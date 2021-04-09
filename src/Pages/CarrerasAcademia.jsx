import React, { Component } from 'react';
import axios from 'axios';
import FuntionTemplateCarreraAcademica from '../Molecules/FuntionTemplateCarreraAcademica';
import SectionIframeFacebook from '../Molecules/SectionIframeFacebook';
import PageNotFound from './PageNotFound';

class CarrerasAcademia extends Component{
    constructor(props) {
        super(props)

        this.state = {
            dataOferta: []
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/eliud-cesar/conalep-backend/master/API/oferta-academica.json")
            .then(resp => {
                this.setState({
                    dataOferta: resp.data
                })
            })
    }

    render() {
        const { dataOferta } = this.state

        // filtracion de un solo objeto
        const urlOFertaAcademica = dataOferta.filter(c => c.Url === this.props.match.params.carrera)[0]

        return(
            // comprobacion de que la url existe
            urlOFertaAcademica ?
                <main className="main-master ed-ge">
                    <div className="container-main-infomration ed-grid s-grid-1 m-grid-2 lg-grid-2">
                        < FuntionTemplateCarreraAcademica Apidata={urlOFertaAcademica} />
                        < SectionIframeFacebook />
                    </div>
                </main>
            :
                < PageNotFound />
        )
    }

}


export default CarrerasAcademia;

