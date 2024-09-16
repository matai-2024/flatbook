import { FlatFormProps } from '../../../models/forms.ts'
import AvatarIcon from '../UI/AvatarIcon.tsx'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatFormPage4({
  title,
  description,
  updateFields,
}: FlatFormProps) {
  description
  title
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-10">
      <FormContainer title="Flat Setup">
        <div className="form-control mb-4 w-full">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full text-sm"
            onChange={(e) => updateFields({ description: e.target.value })}
          />
        </div>
        <AvatarIcon
          className="w-96"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step"></li>
      </ul>
    </div>
  )
}
