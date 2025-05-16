import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="bg-body-tertiary">
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to={'/personajes'} href="#" className="nav-link px-2 text-body-secondary">Personajes</Link></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Transformaciones</a></li>
  
  
                    </ul>
                    <p className="text-center text-body-secondary">© 2025 Arsistema</p>
                </footer>
            </div>
        </div>

    )
}

export default Footer