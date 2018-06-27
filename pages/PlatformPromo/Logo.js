import $ from "./style.css";
import { STATIC, URL } from "~/playground";
export default () => (
	<div className={$.logo}>
		<img src={`${STATIC}/images/logo.png`} />
	</div>
);
