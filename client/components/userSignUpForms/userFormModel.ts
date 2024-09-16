export interface FormData {
  flatId: number
  firstName: string
  lastName: string
  nickName?: string
  about?: string
  profilePhoto?: string
  email: string
  mobile?: string
  socialMedia?: string
  createdAt: string
}

export interface UserFormProps extends FormData {
  updateFields: (fields: Partial<FormData>) => void
}
