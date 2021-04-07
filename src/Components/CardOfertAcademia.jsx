import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardOfertAcademia = ({Image, TitleOfert, Description, url}) => (
    <article className="s-shadow-bottom card-ofert">
        <div className="circle img-container">
            <img src={Image} alt={TitleOfert}/>
        </div>
        <div class="s-bg-dark s-pxy-2">
            <h3 className="title-card"> {TitleOfert} </h3>
            <p class="s-mb-0"> {Description} </p>
        </div>
        <Link to={`/carreras/${url}`} className="button dark-color full">Leer más...</Link>
    </article>
)

CardOfertAcademia.propTypes = {
    Image: PropTypes.string,
    TitleOfert: PropTypes.string,
    Description: PropTypes.string
}
CardOfertAcademia.defaultProps = {
    Image: "https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png",
    TitleOfert: "Title not found",
    Description: "Description not Found"
}

export default CardOfertAcademia;