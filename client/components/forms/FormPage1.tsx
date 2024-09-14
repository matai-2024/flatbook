import { FormProps } from '../../../models/forms.ts'
import FormContainer from './FormContainer.tsx'

//Who are you?
export default function FormPage1({
  firstName,
  lastName,
  nickname,
  about,
  // profile_photo, (i don't know how to do that)
  updateFields,
}: FormProps) {
  return (
    <FormContainer title="Let's get to know each other">
      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="firstName">
          First name
        </label>
        <div className="tailwind placeholder">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>

      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="lastName">
          Last name
        </label>
        <div className="tailwind placeholder">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>

      <div className="sm:col-span-full">
        <label className="tailwind placeholder" htmlFor="nickname">
          Nickname
        </label>
        <div className="tailwind placeholder">
          <input
            id="nickname"
            name="nickname"
            type="nickname"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => updateFields({ nickname: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>

      <div className="sm:col-span-full">
        <label className="tailwind placeholder" htmlFor="about">
          About
        </label>
        <div className="tailwind placeholder">
          <input
            id="about"
            name="about"
            type="about"
            placeholder="About"
            value={about}
            onChange={(e) => updateFields({ about: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>
    </FormContainer>
  )
}
