import { useParams } from 'react-router-dom'
import FlatAnnouncements from './FlatAnnouncements/FlatAnnouncements'
import CreateAnnouncement from './CreateAnnouncement/CreateAnnouncement'

export default function DumbDashboard() {
  const { flatId } = useParams()

  if (flatId)
    return (
      <>
        <h2 className="flex justify-center text-3xl font-bold">Announcements</h2>
        <CreateAnnouncement flatId={flatId} />
        <FlatAnnouncements flatId={flatId} />
      </>
    )
}
