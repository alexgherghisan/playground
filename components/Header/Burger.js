import $ from './style.css';
import {STATIC} from "~/playground";
import { Component } from "react";

export default ()=> (
  <div className={$.burger}>
  	<div className={$.menuhider} />
  	<div className={$.line1} />
  	<div className={$.line2} />
  	<div className={$.line3} />
  	<div className={$.potential_menu}>
  		<div className={$.menu_item_1}>
  			About
  		</div>
  		<div className={$.menu_item_2}>
  			Concept
  		</div>
  		<div className={$.menu_item_3}>
  			Contact
  		</div>
  	</div>
  </div>
)