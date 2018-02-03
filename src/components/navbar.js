import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	state = {
		totalInventory: 0,
		totalOrders: 0,
		totalDeliveries: 0
	};


	componentDidMount() {
		this.loadNavbar();
	}

	loadNavbar = () => {
		API.getNavbar()
			.then(res =>
				this.setState({ totalInventory: res.data, totalOrders: res.data, totalDeliveries: res.data})
			)
			.catch(err => console.log(err));
	};

	render() {
		return (
			<container fluid>
			<row>
		<div class="col-xs-6 col-sm-3">
        </div>
        <div className="col-xs-6 col-sm-2" align="center" style={{"font-weight": "bold"}}>Total Stock in Warehouse 1</div>
        <div className="col-xs-6 col-sm-1"></div>
        <div className="col-xs-6 col-sm-2" align="center" style={{"font-weight": "bold"}}>Inventory to be Received</div>
        <div className="col-xs-6 col-sm-1"></div>
        <div className="col-xs-6 col-sm-2" align="center" style={{"font-weight": "bold"}}>Inventory to be Delivered</div>
        <div className="col-xs-6 col-sm-1"></div>
        </Row>
        <Row>
        <div className="col-xs-6 col-sm-3">
        </div>
        <div className="col-xs-6 col-sm-2" id="one" style={{"background-color":"paleturquoise"}}>
            <h1 id="stock"></h1></div>
        <div className="col-xs-6 col-sm-1"></div>
        <div className="col-xs-6 col-sm-2" id="two" style={{"background-color":"thistle"}}>
            <h1 id="received"></h1></div>
        <div className="col-xs-6 col-sm-1"></div>
        <div className="col-xs-6 col-sm-2" id="three" style={{"background-color":"khaki"}}>
            <h1 id="delivered"></h1></div>
        <div className="col-xs-6 col-sm-1"></div>
        </row>
        </container>
			)
	};
}

export default Navbar;