interface Props {
  id: string
}

export default function FlatAnnouncements({ id }: Props) {
  return <p>{`Announcements${id}`}</p>
}
