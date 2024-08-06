import  { any } from 'prop-types';

function Navbar({children}) {
    return (
        <nav className="nav-bar">
           {children}
        </nav>
    )
}

Navbar.propTypes = {
    children: any
}

export default Navbar