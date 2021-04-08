import { Link } from 'react-router-dom';

export default function Header({logo}) {
    return(
        <header className="Header">
            <Link to="/">
                <h1 className="Branding">
                <img src={logo} alt="Social network logo" className="Logo" />
                Social Network
                </h1>
            </Link>
      </header>
    )
}