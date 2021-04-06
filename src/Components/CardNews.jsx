import React from 'react';
import PropTypes from 'prop-types';

const CardNews = ({ Image, Title, Description }) => (
    <article class="s-shadow-bottom card-news">
        <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={Image} alt={Title} />
        </div>

        <div class="s-bg-dark s-pxy-2 s-radius-br s-radius-bl">
            <h3 className="title-news"> {Title} </h3>
            <p class="s-mb-0"> {Description} </p>
        </div>
    </article>
)

CardNews.propTypes = {
    Image: PropTypes.string,
    Title: PropTypes.string,
    Description: PropTypes.string
}
CardNews.defaultProps = {
    Image: "https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg",
    Title: "Title not found",
    Description: "Description not Found"
}

export default CardNews;