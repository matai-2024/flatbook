import { BsFillHouseAddFill } from 'react-icons/bs'
import FormContainer from '../userSignUpForms/FormContainer.tsx'
import { FaHouseUser, FaKey } from 'react-icons/fa'
import { FlatFormProps } from '../../../models/forms.ts'

//Joining or creating?
export default function FlatFormPage1({ updateFields }: FlatFormProps) {
  updateFields

  return (
    <>
      <h1 className="m-20 text-center text-5xl font-semibold">
        Does your flat already have a FlatBook profile?
      </h1>
      <div className="mx-auto mt-10 flex w-full max-w-4xl items-center justify-center gap-10">
        <FormContainer title="">
          <div className="card glass h-auto w-full text-center">
            <h2 className="mb-5 mt-5 text-center text-5xl font-semibold">
              Yes?
            </h2>
            <figure className="mx-auto ml-10 mr-10 mt-5 h-96 w-96 rounded-full bg-primary p-10">
              <FaHouseUser color="white" className="mx-auto h-72 w-72" />
            </figure>
            <p className="mt-10">
              Tip: Ask an existing Flattie for the flat key!
            </p>
            <div className="card-body flex flex-row items-center">
              <input
                type="text"
                placeholder="Enter Your Flat Key"
                className="color-primary input input-bordered input-secondary w-full"
              />
              <div className="card-actions">
                <button
                  type="button"
                  className="btn-square-primary btn btn-primary border-2 border-solid border-secondary"
                >
                  <FaKey />
                </button>
              </div>
            </div>
          </div>
        </FormContainer>
        <FormContainer title="">
          <div className="card glass h-auto w-full text-center">
            <h2 className="mb-5 mt-5 text-center text-5xl font-semibold">
              No?
            </h2>
            <figure className="mx-auto ml-10 mr-10 mt-5 h-96 w-96 rounded-full bg-primary p-10">
              <BsFillHouseAddFill color="white" className="mx-auto h-72 w-72" />
            </figure>

            <div className="card-body flex flex-row items-center">
              <button className="btn btn-primary mt-16 w-full border-2 border-solid border-secondary">
                Create Flat Profile
              </button>
            </div>
          </div>
        </FormContainer>
      </div>
    </>
  )
}
