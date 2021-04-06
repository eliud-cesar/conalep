import React from 'react';
import PropTypes from 'prop-types';

const CardValors = ({ Image, Title, Description }) => (
    <div className="cuadro-card-valors">
        <img src={Image} alt={Title}/>

        <div className="container-card-valors">
            <h2 className="title-valors t3 center"> {Title} </h2>
            <p className="description-valors t6 center"> {Description} </p>
        </div>
    </div>
)

CardValors.propTypes = {
    Image: PropTypes.string,
    Title: PropTypes.string,
    Description: PropTypes.string
}
CardValors.defaultProps = {
    Image: "https://images.unsplash.com/photo-1601714582667-574b826b99a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    Title: "Title not found",
    Description: "Description not Found"
}

export default CardValors;