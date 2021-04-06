import React from 'react';
import InfomrationAcademica from '../Components/Page Infomation/InformationAcademica';
import SectionIframeFacebook from '../Molecules/SectionIframeFacebook';

const Infomration = () => (
    <main className="ed-grid main-master">

        <div className="container-main-infomration ed-grid s-grid-1 m-grid-2 lg-grid-2">
            < InfomrationAcademica />

            < SectionIframeFacebook />
        </div>

    </main>
)

export default Infomration;