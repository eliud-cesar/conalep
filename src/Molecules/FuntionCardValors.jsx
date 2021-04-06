import React from 'react';
import CardValors from '../Components/CardValors';

const FuntionCardValors = ({ ApiData }) => {
    return(
        ApiData.map(u => (
            < CardValors
                Image={u.Image}
                Title={u.Title}
                Description={u.Descrption}
            />
        ))
    )
}

export default FuntionCardValors;