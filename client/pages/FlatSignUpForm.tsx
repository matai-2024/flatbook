import { FormEvent, useState } from 'react'
import FlatFormPage1 from '../components/flatSetUpForms/FlatFormPage1'
// import { useNavigate } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
import useForm from '../hooks/useForm'
import FlatFormPage2 from '../components/flatSetUpForms/FlatFormPage2'
import { FlatFormProps } from '../../models/forms'
import FlatFormPage3 from '../components/flatSetUpForms/FlatFormPage3'
import FlatFormPage4 from '../components/flatSetUpForms/FlatFormPage4'
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

  // const navigate = useNavigate()
  // const { getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<FlatFormProps>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, isFirstStep, isLastStep, back, next } = useForm([
    <FlatFormPage1 {...data} updateFields={updateFields} key={'form-page-1'} />,
    <FlatFormPage2 {...data} updateFields={updateFields} key={'form-page-2'} />,
    <FlatFormPage3 {...data} updateFields={updateFields} key={'form-page-2'} />,
    <FlatFormPage4 {...data} updateFields={updateFields} key={'form-page-4'} />,
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
      navigate('/')
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w w-full">
        <div className="flex items-center text-center">
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
                  className="btn btn-secondary"
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