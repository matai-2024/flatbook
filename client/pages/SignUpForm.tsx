import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import FormPage1 from '../components/forms/FormPage1'
import FormPage2 from '../components/forms/FormPage2'
import FormPage3 from '../components/forms/FormPage3'

const MOCK_DATA = {
  firstName: '',
  lastName: '',
  nickName: '',
  about: '',
  email: '',
  phone: '',
  socialMedia: '',
}

export default function Signup() {
  const [data, setData] = useState(MOCK_DATA)
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <FormPage1 {...data} updateFields={updateFields} key={'form-page-1'} />,
      <FormPage2 {...data} updateFields={updateFields} key={'form-page-2'} />,
      <FormPage3 {...data} updateFields={updateFields} key={'form-page-3'} />,
      <FormPage4 {...data} updateFields={updateFields} key={'form-page-4'} />,
    ])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) {
      next()
    } else {
      const token = await getAccessTokenSilently()
      const id = await addProfile.mutateAsync({ data, token })
      navigate(`/profiles/${id}`)
    }
  }
}
