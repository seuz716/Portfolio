import React from "react";
import "./testimonial.css";
import Typical from "react-typical";

function testimonial() {
  return (
    <>
      <div className="home-containe">
        {" "}
        <div className="profile-container">
          {" "}
          <h1 className="primary-text">
            {""} Hello, I'M{" "}
            <span className="highlighted-text">César Andrés </span>
          </h1>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
          <div className="profile-details-name">
            <h2>PERFIL</h2>
            <p>
              Soy una persona organizada, creativa, innovadora que busca siempre
              cumplir con las labores y requerimientos que se le exigen, capaz
              de liderar y solucionar problemas rápidamente. Poseo valores como
              la sinceridad, la responsabilidad y la honradez; me siento muy a
              gusto trabajando en equipo. Estudiante de Contaduría pública de la
              Universidad del Valle último semestre con un rendimiento académico
              muy alto. Me considero una persona con una alta facilidad de
              absorber conocimientos teóricos y prácticos y así mismo,
              trasmitirlos, tengo facilidades para la comunicación en los
              diversos ámbitos de esta, alta afinidad hacia las personas que me
              rodean, logrando influenciar hacia la búsqueda del conocimiento y
              mejora continua. Excelente manejo de excel, elaboración de macros,
              tablas dinámicas, funciones especials, word, powert point, manejo
              de inventarios y análisis financiero, manejo de los módulos AP,
              PO, Proveedores y GL del EPR E Business Suit en plataforma Oracle,
              software CG-UNO, DATAX, SAI, DATALOAD, entre otros.
            </p>
          </div>
        </div>
      </div>
      <div className="home-containe">
        {" "}
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
                    <i className="fa fa-google-plus-square"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
                    <i className="fa fa-youtube-square"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="profile-details-name">
                <div>
                  <div>
                    <div>
                      <h3>EXPERIENCIA LABORAL</h3>
                      <p>
                        Universidad del Valle Contaduría publica Trabajo de
                        grado 2018
                      </p>
                    </div>
                    <div>
                      <h3>FORMACIÓN ACADÉMICA</h3>
                      <p>
                        Universidad del Valle Contaduría publica Trabajo de
                        grado 2018
                      </p>
                    </div>
                    <div className="profile-details-role">
                      <h3>SEMINARIOS Y OTROS</h3>
                      <p>
                        • Administración y Control de Inventarios SENA octubre
                        2009
                        <br />
                        • Análisis financiero SENA noviembre 2009
                        <br />
                        • Actualización contable y tributaria NIIF enero 2018
                        <br />• Gerencia en derecho laboral y seguridad social
                        abril 2017
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {""}
                  <h1>
                    {""}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Ethusiastic Dev 🌇",
                        1000,
                        "Full Stack  Developer 💻",
                        1000,
                        "React Dev 🔢",
                        1000,
                        "MERN Stack Dev 🚄",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-role-tagline">
                    Knack of Building applications with front and backend
                    operations.
                  </span>
                </span>
              </div>
              <div className="profile-options">
                   <a href="ResumeEs.pdf" download="ResumeEs.pdf">
                  <button  className="btn btn-primary" >Get Resumen </button>
                </a>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default testimonial;
