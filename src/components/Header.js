import { Outlet, Link } from 'react-router-dom';
import '../styles/Header.scss'

const Header = () => {
    return (
        <div >
            <div className='header'>
                <div className='header__links'>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                </div>
                <h2>Clothe Store</h2>
            </div>
            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default Header;