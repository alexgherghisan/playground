import $ from "./style.css";
import Burger from "./Burger.js";
import Register from "./Register";
export default () => (
	<div className={$.header}>
		<Burger />

		<Register />
	</div>
);
