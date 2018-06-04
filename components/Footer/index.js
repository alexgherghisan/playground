import $ from "./style.css";
import Header from "~/components/Header";
import { STATIC } from "~/playground";
import Footer_upper from "./Footer_upper";
import Footer_lower from "./Footer_lower";
export default () => (
	<div className={$.footer}>
		<div className={$.footer_upper}>
			<Footer_upper />
		</div>
		<div className={$.footer_lower}>
			<Footer_lower />
		</div>
	</div>
);
