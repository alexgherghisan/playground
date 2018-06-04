import $ from "./style.css";

import { STATIC } from "~/playground";
import Logo from "./Logo.js";
import Button_Amazing from "./Button_Amazing";
export default () => (
	<div className={$.hero}>
		<Logo />
		<div className={$.hero_title}>Lorem ipsum dolor sit amet</div>
		<Button_Amazing />
	</div>
);
