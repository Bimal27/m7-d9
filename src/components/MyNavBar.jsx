import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

// a functional component by default can disply JSX and use props

const MyNavBar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>{props.title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/menu" className={props.location.pathname === '/menu'
                    ? 'nav-link active'
                    : 'nav-link'}>
                    Menu
                </Link>
                <Link to="/reservations"
                    className={props.location.pathname === '/reservations'
                        ? 'nav-link active'
                        : 'nav-link'
                    }>
                    Reservations
                </Link>
                <Nav.Link>Find us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default withRouter(MyNavBar)
// this is another way in react-router-dom of wrapping a component and giving to it
// history, location and match