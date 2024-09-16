import { UserData } from '../../../types/User.ts'
import AvatarIcon from '../UI/AvatarIcon.tsx'
import FormContainer from './FormContainer.tsx'
interface PhotoFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void
}

//Who are you?
export default function NewUserPictureForm({ updateFields }: PhotoFormProps) {
  return (
    <>
      <FormContainer title="Upload a profile picture">
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
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
      </ul>
    </>
  )
}
