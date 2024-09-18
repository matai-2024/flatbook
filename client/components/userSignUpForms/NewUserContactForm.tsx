import FormContainer from './FormContainer.tsx'
import { FormData } from './userFormModel.ts'

interface UserFormProps extends FormData {
  updateFields: (fields: Partial<FormData>) => void
}

//How will your flatties contact you?
export default function NewUserContactForm({
  email,
  mobile,
  socialMedia,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormContainer title="How will your flatties contact you?">
        <div className="py-5">
          <div className="form-control mb-4 w-full p-1">
            <label className="label-text" htmlFor="email">
              *Email
            </label>
            <div className="tailwind placeholder">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={email ? email : ''}
                onChange={(e) => updateFields({ email: e.target.value })}
                className="input input-bordered input-primary w-full"
              />
            </div>
          </div>
          <div className="form-control mb-4 w-full p-1">
            <label className="label-text" htmlFor="mobile">
              Phone Number
            </label>
            <div className="tailwind placeholder">
              <input
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Phone Number"
                value={mobile ? mobile : ''}
                onChange={(e) => updateFields({ mobile: e.target.value })}
                className="input input-bordered input-primary w-full"
              />
            </div>
          </div>

          <div className="form-control mb-4 w-full p-1 ">
            <label className="label-text" htmlFor="socialMedia">
              Social Media
            </label>
            <div className="tailwind placeholder">
              <input
                id="socialMedia"
                name="socialMedia"
                type="socialMedia"
                placeholder="Whats your facebook?"
                value={socialMedia ? socialMedia : ''}
                onChange={(e) => updateFields({ socialMedia: e.target.value })}
                className="input input-bordered input-primary w-full"
              />
            </div>
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical py-7 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
      </ul>
    </>
  )
}
