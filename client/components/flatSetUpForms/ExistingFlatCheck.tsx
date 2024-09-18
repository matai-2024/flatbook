import { BsFillHouseAddFill } from 'react-icons/bs'
import FormContainer from '../userSignUpForms/FormContainer.tsx'
import { FaHouseUser, FaKey } from 'react-icons/fa'
import { FlatFormProps } from '../../../types/Flat.ts'

export default function ExistingFlatCheck({ updateFields }: FlatFormProps) {
  updateFields

  return (
    <>
      <FormContainer title="Does your flat already have a FlatBook profile?">
        <div className="mx-auto mt-5 flex w-full max-w-4xl items-center justify-center gap-3">
          <div className="card glass h-auto w-full bg-orange-100 text-center">
            <h2 className="mb-5 mt-5 pt-6 text-center text-3xl font-semibold">
              Yes?
            </h2>
            <figure className="mx-auto ml-10 mr-10 mt-5 h-48 w-48 rounded-full bg-current p-10">
              <FaHouseUser color="white" className="mx-auto h-64 w-64" />
            </figure>
            <p className="text mt-2 p-1 italic">
              Tip: Ask an existing Flattie for the flat key!
            </p>
            <div className="card-body flex flex-row items-center">
              <input
                type="text"
                placeholder="Enter Your Flat Key"
                className="color-primary input input-bordered input-secondary w-full text-center text-xs"
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

          <div className="card glass h-auto w-full bg-orange-100 text-center">
            <h2 className="mb-5 mt-5 pt-6 text-center text-3xl font-semibold">
              No?
            </h2>
            <figure className="mx-auto ml-10 mr-10 mt-5 h-48 w-48 rounded-full bg-current p-10">
              <BsFillHouseAddFill color="white" className="mx-auto h-64 w-64" />
            </figure>

            <div className="card-body flex flex-row items-center">
              <button className="btn btn-primary mt-16 w-full border-2 border-solid border-secondary">
                Create Flat Profile
              </button>
            </div>
          </div>
        </div>
      </FormContainer>
    </>
  )
}
