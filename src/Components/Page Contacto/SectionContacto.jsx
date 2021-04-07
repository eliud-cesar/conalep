import React from 'react';
import Form from '../../Atoms/Contacto/Form';
import GoogleMaps from '../../Atoms/Contacto/GoogleMaps';
import IntroContacto from '../../Atoms/Contacto/IntroContacto';
import TitleMaster from '../../Atoms/TitleMaster';

const SectionContacto = () => (
    <div className="container-information-academia">
        < IntroContacto />
        < Form />
        < TitleMaster Name="Ubicacion" />
        < GoogleMaps />
    </div>
)

export default SectionContacto;