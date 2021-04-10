import React from 'react';
import Ficha from './../../images/ficha-de-admision.jpg'

const InfomrationAcademica = () => (
    <div className="container-information-academia">
        <h3 className="t2">Information Academica</h3>
        <p>Si estás por terminar la Secundaria y aún no decides que estudiar, piensa en la mejor opción CONALEP OMETEPEC, que te ofrece 3 Carreras Técnicas:</p>

        <ul className="feature-list">
            <li>P.T.B Contabilidad</li>
            <li>P.T.B Informática</li>
            <li>P.T.B Enfermería General</li>
        </ul>

        <p>Al concluir tu Carrera obtienes tu Certificado de Bachillerato, Título, Cédula Profesional y Certificación por Microsoft, además te Certificas en Normas de Competencias Laborales.</p>

        <img src={Ficha} alt="Conalep website"/>
    </div>
)

export default InfomrationAcademica;