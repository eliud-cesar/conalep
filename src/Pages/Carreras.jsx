import React from 'react';
import { Link } from 'react-router-dom';
import TitleMaster from '../Atoms/TitleMaster';

const Carreras = () => (
    <div className="ed-grid main-master">

        {/* Banner */}
        <div className="img-container container-academia-img s-ratio-16-9 s-radius-tr s-ratius-tl">
            <img src="http://www.conalepometepec139.com.mx/wp-content/themes/wallstreet/images/page-header-bg.jpg" alt="Conalep" className="image-banner-academia "/>
        </div>

        {/* Description */}
        < TitleMaster Name="Carreras Academicas" />
        <p>Conalep Ometepec, ademas de ofrecerte la posibilidad de cursar tu bachillerato, también te damos opciones para cursar tu nivel técnico, en las cuales podrás desarrollar tus capacidades respecto a ciertos temas, conoce mas de esto.</p>
        <p>Si estas en el proceso de decidir que carreras quieres tomar o cual te conviene mas, pues para que tu informacion no se quede a medias, aqui tiene las paginas donde se te muestran las ventajas de cada carrera, solo da click en el enlace...</p>

        {/* Enlaces a las paginas de las carreras */}
        <ul className="list-academia">
            <li><Link className="link-academia" to="/carreras/informatica">P.T.B en Informática</Link></li>
            <li><Link className="link-academia" to="/carreras/contabilidad">P.T.B en Contabilidad</Link></li>
            <li><Link className="link-academia" to="/carreras/enfermeria">P.T.B en Enfermería</Link></li>
        </ul>

        {/* Frase */}
        <p className="t4">La educación no es preparación para la vida; la educación es la vida en sí misma</p>
        <p className="s-right m-right lg-right">- John Dewey</p>

    </div>
)

export default Carreras;