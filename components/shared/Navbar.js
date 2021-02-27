import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/Link'

const AppLink = ({ children, className, href }) => 
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>

const AppNavbar = () => {
  return(
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink href='/' className='navbar-brand mr-3 font-weight-bold'>Patty Ouwehand</AppLink> 
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="navlink mr-3">
              Portfolios
            </AppLink>
            <AppLink href="/forum/categories" className="navlink mr-3">
              Forum
            </AppLink>
            <AppLink href="/cv" className="navlink mr-3">
              Cv
            </AppLink>
          </Nav>
          <Nav>
          <AppLink href="/login" className="navlink mr-3">
            Sing In
          </AppLink>
          <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">
            Sign Up
          </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar
