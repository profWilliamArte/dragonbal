import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = 'https://dragonball-api.com/api/planets?page=1&limit=100';

const FiltroPlaneta = () => {
     const [datos, setDatos] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
     
        const getDatos = async () => {
            try {
                const response = await fetch(API);
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                setDatos(data.items);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
    
        useEffect(() => {
            getDatos();
        }, []);
        if (loading) {
            return (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Cargando planetas...</p>
                </div>
            );
        }
    
        if (error) {
            return (
                <div className="text-center py-5 text-danger">
                    <h4>Error al cargar los planetas</h4>
                    <p>{error}</p>
                </div>
            );
        }
  return (
    <>
      {datos.map((item) => (
         <li key={item.id}><Link to={`/detallePlaneta/${item.id}/${item.name}`} className="dropdown-item" href="#">{item.name}</Link></li>
        ))}
    </>
  )
}

export default FiltroPlaneta