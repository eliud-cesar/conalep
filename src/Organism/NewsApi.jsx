import axios from 'axios';
import React, { Component } from 'react';
import FuntionCardNews from '../Molecules/FuntionCardNews';

class NewsApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataNews: []
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/eliud-cesar/conalep-backend/master/API/master-news.json")
            .then(resp => {
                this.setState({
                    dataNews: resp.data
                })
            })
    }

    render() {
        const { dataNews } = this.state
        return(
            <div className="ed-grid s-grid-1 m-grid-2 lg-grid-3">
                < FuntionCardNews 
                    dataApi={dataNews} 
                />
            </div>
        )
    }
}

export default NewsApi;