
import { useParams } from "react-router-dom";
const DetallePlaneta = () => {
    const params = useParams()
    const id = params.id;
    const nombre = params.nombre;
  return (
     <div className="container">
            
            <h4 className="text-center py-4 fw-bold fs-4">Detalle del Planeta {nombre}</h4>
    </div>
  )
}

export default DetallePlaneta