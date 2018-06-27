import $ from "./style.css";

export default ({ title, headline }) => (
	<div className={$.feature}>
		<div className={$.title}>{title}</div>
		<div className={$.headline}>{headline}</div>
	</div>
);
