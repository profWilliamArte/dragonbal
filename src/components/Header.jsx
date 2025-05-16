import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import FiltroPlaneta from './FiltroPlaneta'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" width={200} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/personajes"} className="nav-link active" aria-current="page" href="#">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/transformaciones"} className="nav-link" href="#">Transformaciones</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Planetas 
                            </a>
                            <ul className="dropdown-menu">
                                <FiltroPlaneta />
                            </ul>
                        </li>
  
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Header