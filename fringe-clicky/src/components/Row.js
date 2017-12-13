// 4 images in one row

import React from "react";

const Row = props =>
	<div className="row">
	  <div className="col-xs-6 col-md-3">
	    {props.children}
	  </div>
	  ...
	</div>

export default Row;