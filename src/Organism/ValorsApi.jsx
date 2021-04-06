import axios from 'axios';
import React, { Component } from 'react';
import FuntionCardValors from '../Molecules/FuntionCardValors';

class ValorsApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataValors: []
        }
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/eliud-cesar/conalep-backend/master/API/master-valores.json")
            .then(resp => {
                this.setState({
                    dataValors: resp.data
                })
            })
    }

    render() {
        const { dataValors } = this.state
        return(
            <div className="ed-grid s-grid-1 m-grid-2 lg-grid-4">
                < FuntionCardValors
                    ApiData={dataValors}
                />
            </div>
        )
    }
}

export default ValorsApi;