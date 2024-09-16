import { FlatFormProps } from '../../../models/forms.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatFormPage3({
  title,
  description,
  updateFields,
}: FlatFormProps) {
  description
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-10">
      <FormContainer title="Flat Setup">
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="nickname">
            Invite your flatmates
          </label>
          <div className="tailwind placeholder">
            <input
              id="nickname"
              name="nickname"
              type="nickname"
              placeholder="Nickname"
              value={title}
              onChange={(e) => updateFields({ title: e.target.value })}
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
