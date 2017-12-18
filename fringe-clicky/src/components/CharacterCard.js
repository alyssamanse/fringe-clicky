// bootstrap card with image
// shadow and pop up on hover

import React from "react";

const CharacterCard = props =>
	<div className="thumbnail" id={props.id} onClick={props.handleClick}>
		<img src={props.url} alt={props.id} width=200 height=200/>
	</div>


export default CharacterCard;