import React from 'react';

const SectionCarreraAcademica = ({ Title, UrlImage, Description, HYB1, HYB2, HYB3, HYB4, HYB5, HYB6, HYB7, HYB8, ODE1, ODE2, ODE3, ODE4, ODE5, ODE6, ODE7, ODE8, ODE9, ODE10, CDT1, CDT2, CDT3, CDT4, CDT5, CDT6, PdfPerfilEgresado, PdfMapaCurricular }) => (
    <div className="container-information-academia">

        <img src={UrlImage} alt={Title} />
        <h2 className="t1"> {Title} </h2>

        <p> {Description} </p>

        <h3 className="t3 title-list-ofert-academia">Habilidades y Destrezas</h3>
        <ol>
            <li> {HYB1} </li>
            <li> {HYB2} </li>
            <li> {HYB3} </li>
            <li> {HYB4} </li>
            <li> {HYB5} </li>
            <li> {HYB6} </li>
            <li> {HYB7} </li>
            <li> {HYB8} </li>
        </ol>

        <h3 className="t3 title-list-ofert-academia">Oportunidades de Empleo</h3>
        <ol>
            <li> {ODE1} </li>
            <li> {ODE2} </li>
            <li> {ODE3} </li>
            <li> {ODE4} </li>
            <li> {ODE5} </li>
            <li> {ODE6} </li>
            <li> {ODE7} </li>
            <li> {ODE8} </li>
            <li> {ODE9} </li>
            <li> {ODE10} </li>
        </ol>

        <h3 className="t3 title-list-ofert-academia">Centros de Trabajo</h3>
        <ol>
            <li> {CDT1} </li>
            <li> {CDT2} </li>
            <li> {CDT3} </li>
            <li> {CDT4} </li>
            <li> {CDT5} </li>
            <li> {CDT6} </li>
        </ol>

        <div className="line-diviser"></div>

        <p><a className="link-academia" href={PdfPerfilEgresado} >Ver Perfil del egresado completo (PDF)</a></p>
        <p><a className="link-academia" href={PdfMapaCurricular} >Descargar Mapa Curricular (PDF)</a></p>

    </div>
)

export default SectionCarreraAcademica;