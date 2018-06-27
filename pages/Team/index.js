import $ from "./style.css";
import TeamMember from "./TeamMember";

export default ({ items }) => (
	<div className={$.section}>
		<div className={$.section_title}>Team</div>
		<div className={$.members}>
			{items.map((member, key) => {
				const memberClass = `${$.member} member_${key}`;
				// metoda de a pune 2 clase pe un element

				return (
					<div className={memberClass} key={key}>
						<TeamMember
							avatar={member.avatar}
							name={member.name}
							job={member.job}
							bio={member.bio}
						/>
					</div>
				);
			})}
		</div>
	</div>
);
