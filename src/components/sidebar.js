import React from 'react';
import { Link } from "react-router-dom";


const Sidebar = props => (
<div className="sidebar">
	<div className="logo"><img src="./images/Tropical_Flooring_Logo_Classic.png"/>
	</div>
	<div className="links">
	    <Link to={"/home/dashboard/"}>
            <strong>
                {Dashboard}
            </strong>
        </Link>
		<Link to={"/home/inventory/"}>
            <strong>
                {Inventory}
            </strong>
        </Link>
        <Link to={"/home/orders/"}>
            <strong>
                {Orders}
            </strong>
        </Link>
        <Link to={"/home/stockcontrol/"}>
            <strong>
                {Stock Control}
            </strong>
        </Link>
    </div>

	<div className="footer">
            <Link to={"/home/logout"}></Link>
            <p><small>&copy; 2018 The Inventory</small></p>
    </div>
  </div>
    );

export default Sidebar;