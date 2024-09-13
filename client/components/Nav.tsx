import { NavLink } from 'react-router-dom'

function Nav() {
  const navItems = [
    { title: '', link: '/' },
    // { title: '', link: './' },
    // { title: '', link: './' },
    // { title: '', link: './' },
  ]

  return (
    <>
      <nav className="tailwind placeholder">
        <NavLink to="/"></NavLink>
        <ul>
          {navItems.map((item) => (
            <p key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </p>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav
