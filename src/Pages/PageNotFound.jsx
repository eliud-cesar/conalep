import React from 'react';
import Error404 from '../Components/Error404';

const PageNotFound = () => (
    < Error404 
        ImageError="https://raw.githubusercontent.com/eliud-cesar/conalep-backend/432dfaf495b706eeff31b3001ea9f75d1c789e6f/DB/error%20404.svg"
        Title="Hey, aqui no damos clases"
        Description="Regresa a tu clase, "
        Redireccion="/"
        TextLink="Classroom"
    />
)

export default PageNotFound;