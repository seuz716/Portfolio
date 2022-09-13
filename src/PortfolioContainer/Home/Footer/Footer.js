import React from 'react';
import './Footer.css';


export default function Footer() {

  return(
    <>

    <section className="footer-section">
        <div className="container">
            <div className="row footer-section-row">
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            <img src="location.png" alt='location' />
                        </div>
                        <div className="right-text">
                            <h3>Localizacíon</h3>
                            <p>Santiago de Cali, Valle del Cauca, Colombia</p>
                            <p>76001 </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            <img src=""  alt='addres'/>
                        </div>
                        <div className="right-text">
                            <h3>Correo Eléctronico</h3>
                            <p>ceanabad@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                            <img src="call.png" alt='call'/>
                        </div>
                        <div className="right-text">
                            <h3>Telefonos</h3>
                            <p>+57 3166710912 </p>
                            <p>+602 4368472 </p>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h3 className="footer-title"><span className="footer-title-text"> Links</span><span className="footer-title"></span></h3>
                    <ul className="quick-link-list">
                        <li><a href="/">  Desarrollos</a></li>
                        <li><a href="/"> Música</a></li>
                        <li><a href="/"> Educacion</a></li>
                        <li><a href="/"> financiero</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title">Noticias </h3>
                    <ul className="quick-link-list">
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Inicio</a></li>
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Archivos de Video</a></li>
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Notas & Eventos</a></li>
                        
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title">Links de interés</h3>
                    <ul className="quick-link-list">
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Donation</a></li>
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Desarrollos en proceso</a></li>
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Feedback</a></li>
                        <li><a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"> Contacta Me</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title"><span className="footer-title-text">Actualizaciones</span><span className="footer-title"></span></h3>
                    <p className="newsletter">Incribete para estar actualizado.</p>
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-new" id="usr" name="username" placeholder="Ingresa tu correo"/>
                        </div>
                        <button type="submit" className="btn btn-primary subscribe">Subscribete</button>
                    </form>
                    <div id="social">
                        <a className="facebookBtn smGlobalBtn" href="https://m.facebook.com/profile.php?id=100063820491585&_rdr"></a>
                        <a className="youtubeBtn smGlobalBtn" href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ"></a>
                        <a className="linkedinBtn smGlobalBtn" href="https://www.linkedin.com/in/cesar-andr%C3%A9s-abad%C3%ADa-d%C3%A1vila-b0a915203/"></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="footer-section-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6 footer-bottom-left">
                    <p>© All Rights Reserved César Andrés Abadía</p>
                </div>
                <div className="col-md-6 footer-bottom-right">
                    <p>Developed by <a href="#">César Andrés Abadía</a></p>
                </div>
            </div>
        </div>
    </section>
</>

    
  );
  
}
