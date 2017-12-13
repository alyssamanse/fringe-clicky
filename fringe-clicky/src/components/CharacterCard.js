// bootstrap card with image
// shadow and pop up on hover

import React from "react";

const CharacterCard = props =>
	<div className="thumbnail">
		<img src={props.image} alt={props.character}>
	</div>


export default CharacterCard;