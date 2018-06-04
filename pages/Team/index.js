import $ from "./style.css";
import Header from "~/components/Header";
import Team_member1 from "./Team_member1";
import Team_member2 from "./Team_member2";
import Team_member3 from "./Team_member3";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.team}>
		<div className={$.team_container_title}>Team</div>
		<div className={$.team_holeder}>
			<Team_member1 />
			<Team_member2 />
			<Team_member3 />
		</div>
	</div>
);
