import { UserFormProps } from './userFormModel.ts'
import AvatarIcon from '../UI/AvatarIcon.tsx'
import FormContainer from './FormContainer.tsx'

//Who are you?
export default function NewUserPictureForm({ updateFields }: UserFormProps) {
  return (
    <>
      <FormContainer title="Upload a profile picture">
        <div className="py-8">
          <div className="form-control mb-4 w-full">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full text-sm"
              onChange={(e) => updateFields({ profilePhoto: e.target.value })}
            />
          </div>
          <AvatarIcon
            className="w-96"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </FormContainer>
      <ul className="steps steps-vertical m-2 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
      </ul>
    </>
  )
}