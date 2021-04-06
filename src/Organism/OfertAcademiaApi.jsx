import axios from 'axios';
import React, { Component } from 'react';
import FuntionCardCarrers from '../Molecules/FuntionCardCarrers';

class OfertAcademiaApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataOFertAcademia: []
        }
    }

    // PETICION A API CON AXIOS
    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/eliud-cesar/conalep-backend/master/API/master-oferta-academica.json")
            .then(resp => {
                this.setState({
                    dataOFertAcademia: resp.data
                })
            })
    }

    render() {
        const { dataOFertAcademia } = this.state
        return(
            <div className="ed-grid s-grid-1 m-grid-2 lg-grid-3 center">
                < FuntionCardCarrers
                    ApiData={dataOFertAcademia}
                />
            </div>
        )
    }
}

export default OfertAcademiaApi;