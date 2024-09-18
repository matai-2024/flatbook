import { FormEvent, useState } from 'react'
import ExistingFlatCheck from '../components/flatSetUpForms/ExistingFlatCheck'
import useFormStep from '../hooks/useFormStep'
import FlatSetUpDetails from '../components/flatSetUpForms/FlatSetUpDetails'
import { FlatFormProps } from '../../types/Flat'
import FlatAddressForm from '../components/flatSetUpForms/FlatAddressForm'
import FlatSetProfilePicture from '../components/flatSetUpForms/FlatSetProfilePicture'
import { useCreateFlat } from '../hooks/useFlats'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const FLAT_FORM_DEFAULTS = {
  flatAdmin: '',
  title: '',
  image: '',
  description: '',
  streetAddress: '',
  createdAt: '',
}

export default function FlatSignUpForm() {
  const [data, setData] = useState(FLAT_FORM_DEFAULTS)

  const addFlat = useCreateFlat()
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<FlatFormProps>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, isFirstStep, isLastStep, back, next } = useFormStep([
    <ExistingFlatCheck
      {...data}
      updateFields={updateFields}
      key={'form-page-1'}
    />,
    <FlatSetUpDetails
      {...data}
      updateFields={updateFields}
      key={'form-page-2'}
    />,
    <FlatAddressForm
      {...data}
      updateFields={updateFields}
      key={'form-page-2'}
    />,
    <FlatSetProfilePicture
      {...data}
      updateFields={updateFields}
      key={'form-page-4'}
    />,
  ])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) {
      next()
    } else if (user?.sub) {
      const token = await getAccessTokenSilently()
      //TODO - update with flat profile
      data.flatAdmin = user.sub
      await addFlat.mutateAsync({ data, token })
      navigate('/dashboard')
    }
  }

  return (
    <div className="flex w-full items-center justify-center p-10">
      <div className="w-1/4 rounded-xl bg-white p-10 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <form onSubmit={onSubmit} className="mt-6 w-full">
            <div>
              <div>
                <div>{step}</div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="btn btn-secondary mr-1 px-6"
                >
                  Back
                </button>
              )}
              {!isFirstStep ? (
                <button
                  type="submit"
                  className={`btn btn-primary ${isLastStep ? 'btn-accent' : 'btn-primary'}`}
                >
                  {isLastStep ? 'Complete' : 'Continue'}
                </button>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
