import $ from "./style.css";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.lower_footer}>
		<div className={$.logo}>
			<img src={`${STATIC}/images/logo_dark.png`} />
		</div>
		<div className={$.navigation}>
			<div className={$.navigation_item}>About</div>
			<div className={$.navigation_item}>Concept</div>
			<div className={$.navigation_item}>Contact</div>
		</div>
		<div className={$.disclaimer}>
			THIS WEBSITE IS JUST A TEST... THAT INPUT IS GDPR COMPLIANT (IT'S
			FAKE)
		</div>
	</div>
);
