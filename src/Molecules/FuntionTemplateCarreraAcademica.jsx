import React from 'react';
import SectionCarreraAcademica from '../Templates/SectionCarreraAcademica';

const FuntionTemplateCarreraAcademica = ({ Apidata }) => (
        < SectionCarreraAcademica 
            Title={Apidata.Title}
            UrlImage={Apidata.Image}
            Description={Apidata.Description}

            HYB1={Apidata.HYB1}
            HYB2={Apidata.HYB2}
            HYB3={Apidata.HYB3}
            HYB4={Apidata.HYB4}
            HYB5={Apidata.HYB5}
            HYB6={Apidata.HYB6}
            HYB7={Apidata.HYB7}
            HYB8={Apidata.HYB8}
            
            ODE1={Apidata.ODE1}
            ODE2={Apidata.ODE2}
            ODE3={Apidata.ODE3}
            ODE4={Apidata.ODE4}
            ODE5={Apidata.ODE5}
            ODE6={Apidata.ODE6}
            ODE7={Apidata.ODE7}
            ODE8={Apidata.ODE8}
            ODE9={Apidata.ODE9}
            ODE10={Apidata.ODE10}

            CDT1={Apidata.CDT1}
            CDT2={Apidata.CDT2}
            CDT3={Apidata.CDT3}
            CDT4={Apidata.CDT4}
            CDT5={Apidata.CDT5}
            CDT6={Apidata.CDT6}
            CDT1={Apidata.CDT1}
            CDT1={Apidata.CDT1}

            PdfPerfilEgresado={Apidata.PdfPerfilEgresado}
            PdfMapaCurricular={Apidata.PdfMapaCurricular}
        />
)

export default FuntionTemplateCarreraAcademica;