import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import useCreateProfile from '../hooks/useCreateProfile'
import useForm from '../hooks/useFormStep'
import NewUserDetailForm from '../components/userSignUpForms/NewUserDetailForm'
import NewUserPictureForm from '../components/userSignUpForms/NewUserPictureForm'
import NewUserContactForm from '../components/userSignUpForms/NewUserContactForm'
import { FormData } from '../components/userSignUpForms/userFormModel'

const MOCK_DATA = {
  flatId: 0,
  firstName: '',
  lastName: '',
  nickName: '',
  about: '',
  profilePhoto: '',
  email: '',
  mobile: '',
  socialMedia: '',
  createdAt: '',
  auth0Id: '',
}

export default function SignUpForm() {
  const [data, setData] = useState(MOCK_DATA)

  const addUserProfile = useCreateProfile()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, isFirstStep, isLastStep, back, next } = useForm([
    <NewUserDetailForm
      {...data}
      updateFields={updateFields}
      key={'form-page-1'}
    />,
    <NewUserPictureForm
      {...data}
      updateFields={updateFields}
      key={'form-page-2'}
    />,
    <NewUserContactForm
      {...data}
      updateFields={updateFields}
      key={'form-page-3'}
    />,
  ])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) {
      next()
    } else {
      const token = await getAccessTokenSilently()
      await addUserProfile.mutateAsync({ data, token })
      navigate(`/`)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-base-100 to-neutral py-32">
      <div className="w-full max-w-lg rounded-xl bg-gradient-to-r from-white to-base-100 p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <form onSubmit={onSubmit} className="mt-6 w-full">
            <div>
              <div>
                <div>{step}</div>
              </div>
            </div>
            <div className="flex justify-center space-x-1">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="btn btn-secondary px-6"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`btn btn-primary px-4 ${isLastStep ? 'btn-accent' : 'btn-primary'}`}
              >
                {isLastStep ? 'Complete' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
