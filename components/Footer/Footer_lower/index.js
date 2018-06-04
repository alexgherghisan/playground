import $ from "./style.css";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.lower_footer_holder}>
		<div className={$.logo_holder}>
			<img src={`${STATIC}/images/logo_dark.png`} />
		</div>
		<div className={$.navigation_holder}>
			<div className={$.navigation_item}>About</div>
			<div className={$.navigation_item}>Concept</div>
			<div className={$.navigation_item}>Contact</div>
		</div>
		<div className={$.disclaimer_holder}>
			THIS WEBSITE IS JUST A TEST... THAT INPUT IS GDPR COMPLIANT (IT'S
			FAKE)
		</div>
	</div>
);
