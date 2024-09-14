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
      navigate(`/profile/${id}`)
    }
  }

  return (
    <div>
      mutation
      <div className="tailwind placeholder">
        <div className="tailwind placeholder">
          <h1 className="tailwind placeholder">FLATBOOK</h1>
          <p className="tailwind placeholder">
            Flatbook is a NZ platform for New Zealand Flatties
          </p>
          <div>
            <h2>
              Form Page {currentStepIndex + 1} / {steps.length}
            </h2>
          </div>
        </div>

        <form onSubmit={onSubmit} className="tailwind placeholder">
          <div className="tailwind placeholder">
            <div className="tailwind placeholder">
              <div className="tailwind placeholder">{step}</div>
            </div>
          </div>
          <div className="tailwind placeholder">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="tailwind placeholder"
              >
                Back
              </button>
            )}
            <button type="submit" className="tailwind placeholder">
              {isLastStep ? 'Complete' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
