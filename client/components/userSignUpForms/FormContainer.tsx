import { ReactNode } from 'react'

interface FormContainerProps {
  title: string
  children: ReactNode
}

function FormContainer({ title, children }: FormContainerProps) {
  return (
    <>
      <h1 className="mb-4 text-lg font-bold italic">{title}</h1>
      {children}
    </>
  )
}

export default FormContainer
