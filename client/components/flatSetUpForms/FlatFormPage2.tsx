import { FlatFormProps } from '../../../models/forms.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatFormPage2({
  title,
  description,
  updateFields,
}: FlatFormProps) {
  return (
    <FormContainer title="Your flat details">
      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="title">
          What is your flat nickname?
        </label>
        <div className="tailwind placeholder">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => updateFields({ title: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>

      <div className="tailwind placeholder">
        <label className="tailwind placeholder" htmlFor="description">
          What is your flat motto?
        </label>
        <div className="tailwind placeholder">
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Phone description"
            value={description}
            onChange={(e) => updateFields({ description: e.target.value })}
            className="tailwind placeholder"
          />
        </div>
      </div>
    </FormContainer>
  )
}
