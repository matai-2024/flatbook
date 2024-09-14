import { UserFormProps } from '../../../models/forms.ts'
import FormContainer from './FormContainer.tsx'

//How will your flatties contact you?
export default function FormPage2({
  email,
  number,
  socialMedia,
  updateFields,
}: UserFormProps) {
  return (
    <FormContainer title="How will your flatties contact you?">
      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="email">
          Email
        </label>
        <div className="tailwind placeholder">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>
      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="number">
          Phone Number
        </label>
        <div className="tailwind placeholder">
          <input
            id="number"
            name="number"
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => updateFields({ number: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>

      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="socialMedia">
          Social Media
        </label>
        <div className="tailwind placeholder">
          <input
            id="socialMedia"
            name="socialMedia"
            type="socialMedia"
            placeholder="Social Media"
            value={socialMedia}
            onChange={(e) => updateFields({ socialMedia: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>
    </FormContainer>
  )
}
