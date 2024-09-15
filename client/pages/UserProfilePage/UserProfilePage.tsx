import UserSidebar from './UserSidebar'

function ProfilePage() {
  return (
    <>
      <div className="container flex flex-row">
        <div className="container static my-0 max-w-96 bg-[#d9d9d9] px-7 py-5">
          <UserSidebar />
        </div>
        <div className="px-6 py-5 text-7xl">
          FirstName LastName
          <div className="none flex py-2 text-2xl italic">Nickname</div>
          <div className="none flex py-2 text-2xl">
            About me <br /> Lorem ipsum dolor sit amet. Ut consequatur optio qui
            minima corporis ea quibusdam harum hic explicabo incidunt nam
            aliquid quam ea temporibus consequatur ut totam incidunt. Ut ipsam
            quia aut dolorem sunt qui eius voluptate aut autem debitis et sint
            omnis.
            <br />
            <br /> Sed necessitatibus quia id aperiam laudantium At harum quia
            et consequatur voluptas aut odit sapiente aut corrupti quae. Est
            mollitia tempora non temporibus eius aut enim voluptatem et deserunt
            consequuntur ea eius consequatur!
            <br />
            <br /> Est facere enim vel molestiae reprehenderit et optio quod id
            accusantium quae qui blanditiis optio! Aut nihil provident qui
            repellendus nobis id necessitatibus illum qui error quod qui fugit
            dolore vel nihil enim ea repellat molestiae. Ea cumque itaque qui
            eveniet autem aut ipsa laborum sit doloremque voluptatibus et
            officia eligendi.
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
