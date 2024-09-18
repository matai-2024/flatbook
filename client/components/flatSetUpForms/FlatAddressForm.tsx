import { FlatFormProps } from '../../../types/Flat.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatAddressForm({
  streetAddress,
  updateFields,
}: FlatFormProps) {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-6">
      <FormContainer title="Location?">
        <div className="form-control mb-4 w-full">
          <label className="label-text p-1" htmlFor="nickname">
            Whats your flats address?
          </label>
          <div className="">
            <input
              id="streetAddress"
              name="streetAddress"
              type="streetAddress"
              placeholder="*Only you and your flatties can see this"
              value={streetAddress}
              onChange={(e) => updateFields({ streetAddress: e.target.value })}
              className="input input-bordered input-primary w-full italic"
            />
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
      </ul>
    </div>
  )
}
