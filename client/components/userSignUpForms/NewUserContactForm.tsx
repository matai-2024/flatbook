import { UserFormProps } from '../../../models/forms.ts'
import FormContainer from './FormContainer.tsx'

//How will your flatties contact you?
export default function NewUserContactForm({
  email,
  number,
  socialMedia,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormContainer title="How will your flatties contact you?">
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="email">
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
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="number">
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
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4 w-full ">
          <label className="label-text" htmlFor="socialMedia">
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
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
      </ul>
    </>
  )
}
