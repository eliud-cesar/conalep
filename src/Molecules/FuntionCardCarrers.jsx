import React from 'react';
import CardOfertAcademia from '../Components/CardOfertAcademia';

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

export default FuntionCardCarrers;