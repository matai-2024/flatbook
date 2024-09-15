import { FormContainerProps } from '../../../models/forms'

function FormContainer({ title, children }: FormContainerProps) {
  return (
    <>
      <h1 className="mb-4 text-lg font-bold italic">{title}</h1>
      {children}
    </>
  )
}

export default FormContainer
