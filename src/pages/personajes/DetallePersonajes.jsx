import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
const API = 'https://dragonball-api.com/api/characters/';
const DetallePersonajes = () => {


    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams()
    const id = params.id;
    const URI = API + id


    const getDatos = async () => {
        try {
            const response = await fetch(URI);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setDatos(data);
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
                <p>Cargando Personaje...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar el personaje</h4>
                <p>{error}</p>
            </div>
        );
    }



    return (
        <div className="container">
            <div className="text-end pt-3">
                <Link to={"/personajes"} className="btn btn-secondary"><FaBackward /> Regresar</Link>
            </div>
            <h4 className="text-center py-4 fw-bold fs-4">Detalle de {datos.name}</h4>
            <div className="row">
                <div className="col-md-3">
                    <img src={datos.image} className="img-fluid " alt={datos.name}  />
                </div>
                <div className="col-md-9">
                    <h5 className="py-4 fw-bold fs-4">{datos.name}</h5>

                    <p>
                        <b>Energía espiritual o energía vital:</b>{' '}
                        <span className="badge rounded-pill text-bg-danger p-2">{datos.ki}</span> <br />
                        <b>Cantidad máxima de energía que puede alcanzar o controlar:</b> {datos.maxKi} <br />
                        <b>Raza:</b> {datos.race} <br />
                        <b>Género:</b> {datos.gender} <br />
                        <b>Afiliación:</b> {datos.affiliation}
                    </p>

                    <p>
                        <b>Descripción:</b> {datos.description}
                    </p>

                    <p>
                        <b>Planeta Origen:</b> {datos.originPlanet.description}
                    </p>

                   
                </div>
            </div>
            <div>
                 {/* Transformaciones */}
                    {datos.transformations && datos.transformations.length > 0 && (
                        <>
                            <h5 className="mt-4"><b>Transformaciones</b></h5>
                            <div className="row">
                                {datos.transformations.map((trans) => (
                                    <div className="col-md-6 col-lg-4 mb-3" key={trans.id}>
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-header p-0">
                                                <img src={trans.image} alt={trans.name}className="img-fluid" />
                                            </div>
                                            
                                            <div className="card-body text-center">
                                                <h6 className="card-title fs-3">{trans.name}</h6>
                                                
                                            </div>
                                            <div className="card-footer text-center">
                                                <p className="card-text">
                                                    <b>Energia: </b><span className="badge rounded-pill text-bg-danger p-2">{trans.ki}</span> 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
            </div>

        </div>
    )
}

export default DetallePersonajes