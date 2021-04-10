import React from 'react';
import CardNews from '../Components/CardNews';
import withLoader from '../HOC/withLoader';

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

export default withLoader("dataApi", FuntionCardNews);