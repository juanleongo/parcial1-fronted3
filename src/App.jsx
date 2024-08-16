import { useState } from 'react'
import Card from './Card';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [enviar, setEnviar] = useState(null);

  const handleSubmit = (e) => {
    
    if (nombre.length <= 3 || marca.length <= 6 ){
      
      e.preventDefault();
      alert('por favor ingresar mas caracteres ');
    }else{
      e.preventDefault();
      setEnviar({ nombre: nombre, marca: marca });
    }
    
    
  };

  return (
    <div>
    <h2>parquedaro de bicicletas</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">nombre:</label><br />
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      /><br /><br />
      
      <label htmlFor="marca">marca de la bicicleta</label><br />
      <input
        type="text"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      /><br /><br />
      
      <button type="submit">Enviar</button>
    </form>

    {enviar && <Card nombre={enviar.nombre} marca={enviar.marca} />}
  </div>
  )
}

export default Formulario
