import useCreateChore from '../hooks/useCreateChore'
import TextBox from './UI/TextBox'
import Button from './UI/Button'
import { ChoreData } from '../../types/Chore'
import { Params } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  flatId: Readonly<Params<string>>
}
// CreatedAt: YYYY-MM-DD timestamp
const handleTodaysDate = () => {
  // zod .date() expects a valid ISO date i.e., YYYY-MM-DD
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0') // Get the day and pad with zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-indexed, so add 1
  const year = date.getFullYear() // Get the full year
  return `${year}-${month}-${day}` // Combine into YYYY-MM-DD format
}

export default function AddChore({ flatId }: Props) {
  const { id } = flatId
  const defaultForm: ChoreData = {
    flatId: +id,
    title: '',
    description: '',
    priority: '0',
    deadline: '',
    createdAt: handleTodaysDate(),
    isCompleted: false,
  }

  const [formData, setFormData] = useState(defaultForm)

  const createChore = useCreateChore(flatId)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    createChore.mutateAsync(formData) // create new chore with form data

    setFormData(defaultForm) // reset form data to default values
  }

  return (
    <div className="mx-auto w-full max-w-lg rounded-lg bg-base-200 p-6 shadow-md">
      <h2 className="mb-4 text-center text-xl font-semibold">
        Add a New Chore
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <TextBox
            required
            name="title"
            placeholder="Title*"
            className="input input-bordered max-w-full"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="chore-deadline" className="label">
            <span className="label-text">Select a Deadline</span>
          </label>
          <input
            name="deadline"
            id="chore-deadline"
            type="date"
            className="input input-bordered input-primary w-full"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="priority" className="label">
            <span className="label-text">Priority (1-10)*</span>
          </label>
          <input
            name="priority"
            type="range"
            min="1"
            max="10"
            className="range range-primary"
            value={formData.priority}
            onChange={handleChange}
          />
          <div className="flex w-full justify-between px-2 text-xs">
            {/* Create visual markers for priority slider */}
            {[...Array(10)].map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        </div>

        <div className="form-control">
          <Button typeof="submit" className="btn btn-primary w-full">
            Add Chore
          </Button>
        </div>
      </form>
    </div>
  )
}
