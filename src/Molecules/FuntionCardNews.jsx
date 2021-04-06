import React from 'react';
import CardNews from '../Components/CardNews';

const FuntionCardNews = ({ dataApi }) => {
    return(
        dataApi.map(u => (
            < CardNews 
                Image={u.Image}
                Title={u.Title}
                Description={u.Description}
            />
        ))
    )
}

export default FuntionCardNews;