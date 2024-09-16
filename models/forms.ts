import { ReactNode } from 'react'

export interface FormContainerProps {
  title: string
  children: ReactNode
}
export interface User {
  flat_id: number
  firstName: string
  lastName: string
  nickname?: string
  about?: string
  profile_photo?: string
  email: string
  number?: string
  socialMedia?: string
  created_at: EpochTimeStamp
}

export interface FormData {
  flat_id: number
  firstName: string
  lastName: string
  nickname: string
  about: string
  profile_photo: string
  email: string
  number: string
  socialMedia: string
  created_at: number
}

export interface UserFormProps extends User {
  updateFields: (fields: Partial<User>) => void
}

export interface PhotoFormProps {
  updateFields: (fields: Partial<User>) => void
}
