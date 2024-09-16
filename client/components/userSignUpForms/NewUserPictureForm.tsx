import { UserFormProps } from './userFormModel.ts'
import FormContainer from './FormContainer.tsx'

//Who are you?
export default function NewUserPictureForm({ updateFields }: UserFormProps) {
  return (
    <>
      <FormContainer title="Upload a profile picture">
        <div className="py-3">
          <div className="form-control mb-4 w-full"></div>
        </div>
        <div className="flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-4 border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">Drag and drop a photo here</p>
            <p className="text-gray-500">or click to select a file</p>
          </div>
        </div>
        <div className="py-1">
          <input
            type="file"
            className="file-input file-input-bordered file-input-info w-full bg-inherit text-sm text-gray-500"
            onChange={(e) => updateFields({ profilePhoto: e.target.value })}
          />
        </div>
      </FormContainer>

      <ul className="steps steps-vertical py-7 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
      </ul>
    </>
  )
}
