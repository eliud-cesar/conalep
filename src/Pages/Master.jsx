import React from 'react';
import DescriptionMaster from '../Atoms/DescriptionMaster';
import TitleMaster from '../Atoms/TitleMaster';
import Banner from '../Components/Banner';
import CardNews from '../Components/CardNews';
import NewsApi from '../Organism/NewsApi';
import OfertAcademiaApi from '../Organism/OfertAcademiaApi';
import ValorsApi from '../Organism/ValorsApi';

const Master = () => (
    <>
    < Banner />
    <main className="main-master ed-grid">

        <div className="section-master ofert-academic">
            < TitleMaster Name="Carreras Academicas" />
            < DescriptionMaster Name="La oferta educativa de CONALEP Ometepec es de 3 carreras Técnicas donde podrás titularte como Profesional Técnico o Profesional Técnico Bachiller Entérate de la gran diversidad de carreras que tenemos para ti que en conjunto con un bachiller te preparan para tu futuro" />
            < OfertAcademiaApi />
        </div>

        <div className="section-master valors">
            < TitleMaster Name="Nuestros Valores" />
            < DescriptionMaster Name="Consideramos a cada una de las personas como individuos dignos de atención, con intereses más allá de lo estrictamente profesional o laboral. Reconocemos a la sociedad como la beneficiaria de nuestro trabajo, considerando la importancia de su participación en la determinación de nuestro rumbo." />
            < ValorsApi />
        </div>

        <div className="section-master news">
            < TitleMaster Name="Noticias Conalep" />
            < DescriptionMaster Name="Conoce las últimas noticias relevantes sobre la Institución, #Orgullosamente Conalep Ometepec" />
            < NewsApi />
        </div>
    </main>
    </>
)

export default Master;