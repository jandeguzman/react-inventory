import React from 'react';
import { Link } from "react-router-dom";



const Sidebar = props => (
<div className="sidebar">
	<div className="logo"><img src="./images/Tropical_Flooring_Logo_Classic.png"/>
	</div>
	<div className="links">
		<a onClick={() => props.}

	<nav id="fh5co-main-menu" role="navigation">
            <ul>
                <li class="fh5co-active"><a href="/home/dashboard">Dashboard</a></li>
                <li><a href="/home/inventory">Inventory</a></li>
                <li><a href="/home/orders">Orders</a></li>
                <li><a href="/home/stockcontrol">Stock Control</a></li>
            </ul>
    </nav>

	<div class="fh5co-footer">
            <a href="/home/logout">Logout</a>
            <p><small>&copy; 2018 The Inventory</small></p>
            </ul>
    </div>

</div>;

export default Sidebar;