import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import FormPage1 from '../components/forms/FormPage1'
import FormPage2 from '../components/forms/FormPage2'
// import FormPage3 from '../components/forms/FormPage3'
// import FormPage4 from '../components/forms/FormPage4'
import useCreateProfile from '../hooks/useCreateProfile'
import useForm from '../hooks/useForm'
import { FormData } from '../../models/forms'
import Button from '../components/UI/Button'

const MOCK_DATA = {
  flat_id: 0,
  firstName: '',
  lastName: '',
  nickname: '',
  about: '',
  profile_photo: '',
  email: '',
  number: '',
  socialMedia: '',
  created_at: 0,
}

export default function Signup() {
  const [data, setData] = useState(MOCK_DATA)

  const addProfile = useCreateProfile()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useForm([
      <FormPage1 {...data} updateFields={updateFields} key={'form-page-1'} />,
      <FormPage2 {...data} updateFields={updateFields} key={'form-page-2'} />,
      // <FormPage3 {...data} updateFields={updateFields} key={'form-page-3'} />,
      // <FormPage4 {...data} updateFields={updateFields} key={'form-page-4'} />,
    ])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) {
      next()
    } else {
      const token = await getAccessTokenSilently()
      const id = await addProfile.mutateAsync({ data, token })
      //TODO - change to user/profile
      navigate(`/users/${id}`)
    }
  }

  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          {/* <h1 className="text-3xl font-bold">FLATBOOK</h1>
          <p className="mt-2 text-lg">
            Flatbook is a NZ platform for New Zealand Flatties
          </p> */}
          <div className="mt-4">
            {/* <h2>
              Form Page {currentStepIndex + 1} / {steps.length}
            </h2> */}
          </div>

          <form onSubmit={onSubmit} className="mt-6 w-full">
            <div>
              <div>
                <div>{step}</div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              {!isFirstStep && (
                <Button onClick={back} className="">
                  Back
                </Button>
              )}
              <Button className={isLastStep ? 'btn-accent' : 'btn-primary'}>
                {isLastStep ? 'Complete' : 'Continue'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
