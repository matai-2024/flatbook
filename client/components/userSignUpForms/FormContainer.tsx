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
        <p className="text-sm italic">Required forms marked using *</p>
        <hr className="my-2 h-px border-0 bg-info" />
      </div>
      {children}
    </>
  )
}

export default FormContainer
