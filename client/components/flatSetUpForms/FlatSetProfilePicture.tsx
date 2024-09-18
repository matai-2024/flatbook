import { FlatFormProps } from '../../../types/Flat.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatSetProfilePicture({
  image,
  updateFields,
}: FlatFormProps) {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-4">
      <FormContainer title="What does home look like?">
        <div className="flex h-64 w-80 cursor-pointer items-center justify-center rounded-lg border-4 border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">Drag and drop a photo here</p>
            <p className="text-gray-500">or click to select a file</p>
          </div>
        </div>
        <div className="">
          <input
            type="file"
            value={image ? image : ''}
            className="file-input file-input-bordered file-input-info  text-sm text-gray-500"
            onChange={(e) => updateFields({ image: e.target.value })}
          />
        </div>
      </FormContainer>
      <ul className="steps steps-vertical mb-1 py-6 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
      </ul>
    </div>
  )
}
