import React from 'react';
import SectionContacto from '../Components/Page Contacto/SectionContacto';
import InfomrationAcademica from '../Components/Page Infomation/InformationAcademica';
import SectionIframeFacebook from '../Molecules/SectionIframeFacebook';

const Contacto = () => (
    <main className="ed-grid main-master">
        <div className="container-main-infomration ed-grid s-grid-1 m-grid-2 lg-grid-2">
            < SectionContacto />

            < SectionIframeFacebook />
        </div>
    </main>
)

export default Contacto;
