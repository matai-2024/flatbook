import FormContainer from './FormContainer.tsx'
import { UserFormProps } from './userFormModel.ts'

//Who are you?
export default function NewUserDetailForm({
  firstName,
  lastName,
  nickName,
  about,
  updateFields,
}: UserFormProps) {
  return (
    <>
      <FormContainer title="Let's get to know each other">
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="firstName">
            First name
          </label>
          <div className="tailwind placeholder">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => updateFields({ firstName: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="lastName">
            Last name
          </label>
          <div className="tailwind placeholder">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              value={lastName ? lastName : ''}
              onChange={(e) => updateFields({ lastName: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="nickName">
            Nickname
          </label>
          <div className="tailwind placeholder">
            <input
              id="nickName"
              name="nickName"
              type="nickName"
              placeholder="Nickname"
              value={nickName ? nickName : ''}
              onChange={(e) => updateFields({ nickName: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="about">
            About
          </label>
          <div className="tailwind placeholder">
            <input
              id="about"
              name="about"
              type="about"
              placeholder="About"
              value={about ? about : ''}
              onChange={(e) => updateFields({ about: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical m-2 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step"></li>
      </ul>
    </>
  )
}
