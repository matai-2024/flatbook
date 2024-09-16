import TextBox from '../UI/TextBox'
import Button from '../UI/Button'
import { useState } from 'react'
import useCreateAnnouncement from '../../hooks/useCreateAnnouncement'
import { AnnouncementData } from '../../../types/Announcement'
import { handleTodaysDate } from '../CreateChore/CreateChore'
interface Props {
  flatId: string
}
// const handleTimestamp = () => {}

// currently accepts flatid from DumbDashboard url, will need to be replaced by real dashboard url
export default function CreateAnnouncement({ flatId }: Props) {
  const defaultAnnouncement: AnnouncementData = {
    flatId: +flatId,
    auth0Id: 'auth0-placeholder',
    title: '',
    content: '',
    createdAt: handleTodaysDate(),
  }

  const [formData, setFormData] = useState(defaultAnnouncement)

  const createAnnouncement = useCreateAnnouncement(flatId)
  const { isPending } = createAnnouncement
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    createAnnouncement.mutateAsync(formData) // create new announcement with form data

    setFormData(defaultAnnouncement) // reset form data to default values
  }

  if (isPending) {
    return <p data-testid={`create-announcement-pending`}>Loading...</p>
  }

  return (
    <div className="mb-4 ml-8 mr-8 max-w-full rounded-lg bg-base-200 p-6 shadow-md">
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
            name="content"
            placeholder="What is your announcement..."
            className="textarea textarea-bordered w-full"
            value={
              typeof formData.content === 'string' &&
              formData.content.length > 0
                ? formData.content
                : undefined
            }
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <Button typeof="submit" className="btn btn-primary w-full">
            Make Announcement
          </Button>
        </div>
      </form>
    </div>
  )
}
