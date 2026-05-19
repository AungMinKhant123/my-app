import { NavLink } from "react-router";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </header>
    );
};

export default Header;