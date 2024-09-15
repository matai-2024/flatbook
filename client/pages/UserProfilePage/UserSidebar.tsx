import AvatarIcon from '../../components/UI/AvatarIcon'

{
  /* Todo: replace this list with dynamic list */
}
export default function UserSidebar() {
  return (
    <>
      <AvatarIcon
        className="h-max w-80 justify-center"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
      <br />
      <br />
      <h2 className="text-2xl font-bold">Contact </h2>
      <ul className="italic">
        <li>Email: example@example.org</li>
        <li>Number: 123 456 789</li>
      </ul>
      <br />
      <h2 className="text-2xl font-bold">Social Media</h2>
      <ul className="italic">
        <li>Facebook: User1</li>
        <li>Linkedin: Linkedin.com</li>
      </ul>
      <br />
      <h2 className="text-2xl font-bold">Flat Status </h2>
      <p className="italic">Taken</p>
      <br />
      <br />
      <br />
    </>
  )
}
