import UserSidebar from './UserSidebar'

function ProfilePage() {
  return (
    <div className="min-h-fit max-w-fit flex-1 space-x-8 bg-gradient-to-b from-base-100 to-neutral">
      <div className="flex space-x-8 p-8">
        {/* Sidebar */}
        <div className="">
          <UserSidebar />
        </div>

        {/* Main Content */}
        <div className="w-4/5 rounded-xl bg-gradient-to-r from-white to-base-100 p-8 shadow-2xl">
          {/* Name and Nickname */}
          <div className="mb-6 border-b-2 border-accent pb-4">
            <h1 className="py-2 text-5xl font-bold text-primary">
              FirstName LastName
            </h1>
            <div className="text-2xl italic text-secondary">Nickname</div>
          </div>

          {/* About Me Section */}
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-primary">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequatur optio qui minima corporis ea quibusdam harum hic
              explicabo incidunt nam aliquid quam ea temporibus consequatur ut
              totam incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi, iure.
              <br />
              <br />
              Sed necessitatibus quia id aperiam laudantium At harum quia et
              consequatur voluptas aut odit sapiente aut corrupti quae. Est
              mollitia tempora non temporibus eius aut enim voluptatem et
              deserunt consequuntur ea eius consequatur!
              <br />
              <br />
              Est facere enim vel molestiae reprehenderit et optio quod id
              accusantium quae qui blanditiis optio! Aut nihil provident qui
              repellendus nobis id necessitatibus illum qui error quod qui fugit
              dolore vel nihil enim ea repellat molestiae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
