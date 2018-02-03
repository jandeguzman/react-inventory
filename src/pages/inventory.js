import React, { Component } from "react";
import { Link } from "react-router-dom";


class Inventory extends Component {
	state = {
		productCode: [],
		description: [],
		SF_Box: [],
		quantity: [],
		wh2: [],
		wh3: [],
		total: [],
		location: []
	}

	componentDidMount() {
		this.loadInventory();
	}

	loadInventory = () => {
		API.getInventory()
			.then(res =>
				this.setState({productCode: res.data, description: res.data, SF_Box: res.data, quantity: res.data, wh2: res.data, wh3: res.data, total: res.data, location: res.data})
				)
			.catch(err => console.log(err));
	};

render() {
	return (
	       <Row>
                <div className="col-lg-12">
                    <table className="table table-hover" id='inventory-table-header'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>SF_Box</th>
                                <th>Dimension</th>
                                <th>WH1</th>
                                <th>WH2</th>
                                <th>WH3</th>
                                <th>Total</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody id="inventory-table">

                        <td>{this.state.productCode}</td>
                        <td>{this.state.description}</td>
                        <td>{this.state.SF_Box}</td>
                        <td>{this.state.quantity}</td>
                        <td>{this.state.wh2}</td>
                        <td>{this.state.wh3}</td>
                        <td>{this.state.total}</td>
                        <td>{this.state.location}</td>
                        </tbody>
                    </table>
                </div>
            </Row>
		)
};
}

export default Inventory;