import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import StateData from './StateData';
import axios from 'axios';

class India extends Component {

    constructor () {
        super();
        this.state = {
            data : {}
        }
    }
    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response => {
            this.setState({data: response.data})
        })
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                <div className="col col-md-12">
                    <img src="https://www.countryflags.io/IN/shiny/64.png"></img>
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASE</Card.Title>
                                    <h4>{this.state.data.cases}</h4>
                                    <Card.Text>
                                      
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASE</Card.Title>
                                    <h4>{this.state.data.active}</h4>
                                    <Card.Text>
                                       
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h4>{this.state.data.recovered}</h4>
                                    <Card.Text>
                                      
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h4>{this.state.data.deaths}</h4>
                                    <Card.Text>
                                      
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <StateData/>
            </div>
            </div>
        )
    }
}

export default India;