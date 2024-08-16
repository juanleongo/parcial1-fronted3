
import './cardStyles.css'; // Asegúrate de que la ruta sea correcta

function Card({ nombre, marca }) {
  return (
    <div className="card">
      <h3>su bicibleta se registro </h3>
      <p><strong>nombre:</strong> {nombre}</p>
      <p><strong>marca:</strong> {marca}</p>
    </div>
  );
}

export default Card;
