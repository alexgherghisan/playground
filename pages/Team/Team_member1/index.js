import $ from "./style.css";
import Header from "~/components/Header";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.team_member_box}>
		<img className={$.team_face} src={`${STATIC}/images/team_member.png`} />
		<div className={$.team_member_name}>Empoyee 1</div>
		<div className={$.team_member_job}>Sed nunc ante</div>
		<div className={$.team_member_bio}>
			Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet augue
			ac tincidunt cursus. Nam sed lectus ipsum.
		</div>
	</div>
);
