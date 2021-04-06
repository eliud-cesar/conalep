import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = ({ ImageError, Title, Description, Redireccion, TextLink }) => (
    <main className=" ed-grid main-master">
        <img className="image-error lg-block-center m-block-center s-block-center" src={ImageError} alt={Title} />

        <h2 className="t1 center">
            {Title}
        </h2>

        <p className="t4 center">{Description} <Link to={Redireccion}> {TextLink} </Link></p>
    </main>
)

export default Error404;