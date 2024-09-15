import { useParams } from 'react-router-dom'
import FlatAnnouncements from './FlatAnnouncements/FlatAnnouncements'

export default function DumbDashboard() {
  const { id } = useParams()

  if (id)
    return (
      <>
        <FlatAnnouncements id={id} />
      </>
    )
}
