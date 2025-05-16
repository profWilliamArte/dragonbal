import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = 'https://dragonball-api.com/api/characters?page=1&limit=100';
const Personajes = () => {
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
                <p>Cargando Personajes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
    }
    return (
        <div className="container">
            <h4 className="text-center py-4">Personajes ({datos.length})</h4>
            <div className="row">
                {datos.map((item) => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="card-header p-0">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.name}
                                    style={{
                                        height: "300px",
                                        objectFit: "cover",
                                        width: "100%",
                                        objectPosition: "top",
                                    }}
                                />
                            </div>
                            <div className="card-body text-center">
                                <p className="card-title fw-bold fs-4">{item.name}</p>
                                <p><b>Raza:</b> {item.race}<br />
                                    <b>Energía:</b> {item.ki && item.ki !== "unknown" ? item.ki : "No disponible"}</p>
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-outline-info btn-sm mx-2" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</a>
                                <Link to ={`/detallepersonajes/${item.id}`} href="#" className="btn btn-outline-danger btn-sm">Detalle</Link>
                            </div>

                        </div>



                        <div>

                            {/* Modal */}
                            <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body ">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={item.image} className="img-fluid" alt={item.name}/>
                                                </div>
                                                <div className="col-8">
                                                    <p className="card-title fw-bold fs-4">{item.name}</p>
                                                    <p><b>Raza:</b> {item.race}<br />
                                                    <b>Genero:</b> {item.gender}<br />
                                                    <b>Energía:</b> {item.ki && item.ki !== "unknown" ? item.ki : "No disponible"}<br />
                                                    <b>Energía Maxima:</b> {item.maxKi && item.maxKi !== "unknown" ? item.ki : "No disponible"}</p>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default Personajes