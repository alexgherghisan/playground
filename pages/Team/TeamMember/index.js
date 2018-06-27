import $ from "./style.css";

export default ({ avatar, name, job, bio }) => (
	<div className={$.member}>
		<div className={$.avatar}>
			<img src={avatar} />
		</div>
		<div className={$.name}>{name}</div>
		<div className={$.job}>{job}</div>
		<div className={$.bio}>{bio}</div>
	</div>
);
