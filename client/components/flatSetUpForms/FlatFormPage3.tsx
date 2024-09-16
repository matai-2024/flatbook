import { FlatFormProps } from '../../../models/forms.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatFormPage3({
  streetAddress,
  updateFields,
}: FlatFormProps) {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-10">
      <FormContainer title="Flat Setup">
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="nickname">
            Whats your flats address? (Only you and your flatties can see this)
          </label>
          <div className="tailwind placeholder">
            <input
              id="streetAddress"
              name="streetAddress"
              type="streetAddress"
              placeholder="streetAddress"
              value={streetAddress}
              onChange={(e) => updateFields({ streetAddress: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step"></li>
      </ul>
    </div>
  )
}
