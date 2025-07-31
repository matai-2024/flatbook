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
  id: 0,
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
  const { getAccessTokenSilently, user } = useAuth0()

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
      user?.sub ? (data.auth0Id = user.sub) : ''
      const token = await getAccessTokenSilently()
      await addUserProfile.mutateAsync({ data, token })
      navigate(`/profile/${data.id}`)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg">
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
                  className="btn btn-secondary"
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
