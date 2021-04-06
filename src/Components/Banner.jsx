import React from 'react';
import ImageBanner from './../images/image-banner.png'

const Banner = () => (
    <section className="l-section s-py-4 bg-banner-theme">
        {/* <!-- Separación del contenido en columnas --> */}
        <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
            {/* <!-- Contenido de la columna 1 --> */}
            <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                <h1 className="title-banner">¡¡Crece con nosotros!! Te estamos esperando.</h1>
                <p>Capacitate y certificate, sea en linea o presencial</p>
                {/* <!-- Botones --> */}
                <div className="s-main-center">
                    <a href="https://youtu.be/Z725Z-USpIo" target="_blank" className="button s-mr-2 s-mb-2 m-mb-0 fourth-color-alt">Animate</a>
                </div>
            </div>
            {/* <!-- Contenido de la columna 2 --> */}
            <div>
                <div className="img-container s-ratio-16-9">
                    <img className="s-radius-1" src={ImageBanner}  alt="Conalep"/>
                </div>
            </div>
        </div>
    </section>
)

export default Banner;