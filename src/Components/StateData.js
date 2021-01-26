import React, { Component } from 'react';
import Axios from 'axios';
import { Accordion, Card, Button } from 'react-bootstrap';

class StateData extends Component {

    constructor() {
        super();
        this.state = {
            stateData: {}
        }
    }
    componentDidMount() {
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            //response.data
            this.setState({ stateData: response.data })
        })
    }

    render() {
        let keys = Object.keys(this.state.stateData)

        return (
            <div className="row">
                <div className="col-md-12">
                    <Accordion defaultActiveKey="0">
                        {
                            keys.map((item, key) => {

                                let district = this.state.stateData[item].districtData;
                                let district_keys = Object.keys(district)

                                let total_active = 0;
                                let total_deaths = 0;
                                let total_recover = 0;
                                let total_confirm = 0;
                                let district_list = [];

                                for(let x in district) {
                                    total_active += district[x].active;
                                    total_confirm += district[x].confirmed;
                                    total_deaths += district[x].deceased;
                                    total_recover += district[x].recovered;
                                    let ob = district[x];
                                    ob["district_name"] = x;
                                    district_list.push(ob)
                                }
                                console.log(district_list)

                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={key}>
                                            <span className="btn btn-white">{item}</span>  -  Total Case -  {total_confirm}  -  Active Case - {total_active}  -  Recovered Case -  {total_recover}  -  Deaths  -  {total_deaths}
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>District</th>
                                                            <th>Confirmed</th>
                                                            <th>Active</th>
                                                            <th>Recovered</th>
                                                            <th>Deaths</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            district_list.map((item, key) => {
                                                                return(
                                                                    <tr>
                                                                        <td>{item.district_name}</td>
                                                                        <td>{item.confirmed}</td>
                                                                        <td>{item.active}</td>
                                                                        <td>{item.recovered}</td>
                                                                        <td>{item.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                );
                            })
                        }

                    </Accordion>
                </div>
            </div>
        )
    }
}

export default StateData;