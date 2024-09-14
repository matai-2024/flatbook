import { ReactNode } from 'react'

export interface FormContainerProps {
  title: string
  children: ReactNode
}

export interface User {
  flat_id: boolean
  id: number
  firstName: string
  lastName: string
  nickname?: string
  about?: string
  profile_photo?: string
  email: string
  number?: string
  socialMedia?: string
}

export interface FormProps extends User {
  updateFields: (fields: Partial<User>) => void
}
