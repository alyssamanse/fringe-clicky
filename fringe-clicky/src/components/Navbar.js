// clicky game (right)
// click an image to begin (middle)
// scoreboard (right)

import React from "react";
import Scoreboard from "./Scoreboard";

const Navbar = props =>
	<ul className="nav nav-pills">
		<li role="presentation" className="active"><a href="#">Fringe Clicky Game</a></li>
		<li role="presentation">Click an image to begin</li>
		{/*<li role="presentation">{Scoreboard}</li>*/}
	</ul>


export default Navbar;