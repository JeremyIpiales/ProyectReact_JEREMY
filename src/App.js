import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
                {/* Seccion de Datos Personales */}
                <div>
          <h2>Datos Personales</h2>
          <p><strong>Nombre:</strong> Jeremy Ipiales</p>
          <p><strong>Direccion:</strong> San Antonio de Pichincha, Ciudad QUITO</p>
          <p><strong>Telefono:</strong> 0999815289</p>
          <p><strong>Correo Electronico:</strong> jeremy.ipiales@epn.edu.ec</p>
        </div>

        {/* Sección de Estudios Realizados */}
        <div>
          <h2>Estudios Realizados</h2>
          {/* Lista ordenada */}
          <ol>
            <li>Bachillerato en Mecanica Industrial</li>
            <li>Tecnologia en Desarrollo de Software</li>
            <li>Curso de React JS</li>
          </ol>
        </div>

        {/* Sección de Herramientas Utilizadas */}
        <div>
          <h2>Herramientas Utilizadas</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>React.js</li>
            <li>Imaginacion</li>
          </ul>
        </div>

        {/* Sección de Galería de Deportes Favoritos */}
        <div>
          <h2>Galería de Deportes Favoritos</h2>
          {/* Contenedor para las imágenes */}
          <div className="gallery">
            {/* Cada deporte con su imagen y título */}
            <div className="gallery-item">
              <img src="https://www.elcomercio.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-8.55.44-PM.jpeg" alt="Fútbol" />
              <p>Fútbol</p>
            </div>
            <div className="gallery-item">
              <img src="https://www.elcomercio.com/wp-content/uploads/2022/03/ecuavoley-700x391.jpg" alt="Ecuavoley" />
              <p>Ecuavoley</p>
            </div>
            <div className="gallery-item">
              <img src="https://imagenes.primicias.ec/files/image_480_270/uploads/2024/05/25/665288e43b192.jpeg" alt="MMA" />
              <p>MMA</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
