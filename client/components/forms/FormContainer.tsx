import { FormContainerProps } from '../../../models/forms'

function FormContainer({ title, children }: FormContainerProps) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export default FormContainer
