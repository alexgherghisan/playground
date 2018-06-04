import $ from "./style.css";
import Burger from "./Burger.js";
import Register from "./Register.js";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.header}>
		<Burger />

		<Register />
	</div>
);
