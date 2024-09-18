import { ReactNode } from 'react'

interface FormContainerProps {
  title: string
  children: ReactNode
}

function FormContainer({ title, children }: FormContainerProps) {
  return (
    <>
      <div className="tailwind placeholder">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="italic">Required forms marked using *</p>
      </div>
      {children}
    </>
  )
}

export default FormContainer
// small change
