import React from 'react';
import CardOfertAcademia from '../Components/CardOfertAcademia';
import withLoader from '../HOC/withLoader';

const FuntionCardCarrers = ({ ApiData }) => {
    return(
        ApiData.map(u => (
            < CardOfertAcademia 
                Image={u.Image}
                TitleOfert={u.title}
                Description={u.Description}
                url={u.url}
            />
        ))
    )
}

export default withLoader("ApiData" , FuntionCardCarrers);