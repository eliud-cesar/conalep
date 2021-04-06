import React from 'react';
import PropTypes from 'prop-types';

const IframePublicationConalep = ({ LinkPost, Alto }) => (
    <iframe
        src={LinkPost} 
        width="350" 
        height={Alto}
        style={{border: 'none', overflow:'hidden', background: 'white'}} 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
    </iframe>
)

IframePublicationConalep.propTypes = {
    LinkPost: PropTypes.string
}
IframePublicationConalep.defaultProps = {
    LinkPost: "https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg"
}

export default IframePublicationConalep;