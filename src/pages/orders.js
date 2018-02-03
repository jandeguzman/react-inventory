import React, { Component } from "react";
import { Link } from "react-router-dom";


class Orders extends Component {

	state = {
		productCode: [],
		quantity: [],
		month: [],
		date: [],
		year: [],
	}
	
}
render() {
	return (

		<Row>
		 <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">Enter Items Below:</div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Quantity</th>
                                    <th>Month</th>
                                    <th>Date</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <input id="ordersid" class="form-control" placeholder="Enter ID here"/>
                                    </td>
                                    <td>
                                        <input id="ordersquantity" class="form-control" placeholder="Type in Quantity"/>
                                    </td>
                                    <td>
                                        <select id="ordersmonth" class="month" name="month" form="monthform">
                                            <option value="JAN">JAN</option>
                                            <option value="">FEB</option>
                                            <option value="">MAR</option>
                                            <option value="">APR</option>
                                            <option value="">MAY</option>
                                            <option value="">JUN</option>
                                            <option value="">JUL</option>
                                            <option value="">AUG</option>
                                            <option value="">SEP</option>
                                            <option value="">OCT</option>
                                            <option value="">NOV</option>
                                            <option value="">DEC</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="ordersday" class="date" name="date" form="dateform">
                                            <option value="01">01</option>
                                            <option value="">02</option>
                                            <option value="">03</option>
                                            <option value="">04</option>
                                            <option value="">05</option>
                                            <option value="">06</option>
                                            <option value="">07</option>
                                            <option value="">08</option>
                                            <option value="">09</option>
                                            <option value="">10</option>
                                            <option value="">11</option>
                                            <option value="">12</option>
                                            <option value="">13</option>
                                            <option value="">14</option>
                                            <option value="">15</option>
                                            <option value="">16</option>
                                            <option value="">17</option>
                                            <option value="">18</option>
                                            <option value="">19</option>
                                            <option value="">20</option>
                                            <option value="">21</option>
                                            <option value="">22</option>
                                            <option value="">23</option>
                                            <option value="">24</option>
                                            <option value="">25</option>
                                            <option value="">26</option>
                                            <option value="">27</option>
                                            <option value="">28</option>
                                            <option value="">29</option>
                                            <option value="">30</option>
                                            <option value="">31</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="ordersyear" class="year" name="year" form="yearform">
                                            <option value="2018">2018</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        <div class="container">
            <div class="row" align="center">
                <button className="btn btn-default" onClick={this.ordersreceive}>Receive Inventory</button>
                <button className="btn btn-default" onClick={this.orderssend}>Send Inventory</button>
            </div>
        </div>
		</Row>
		)
}

export default Orders;