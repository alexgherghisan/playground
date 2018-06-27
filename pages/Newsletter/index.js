import $ from "./style.css";
export default () => (
	<div className={$.newsletter}>
		<div className={$.newsletter_title}>Join our newsletter</div>
		<div className={$.newsletter_form}>
			<div className={$.newsletter_input}>
				<input type="text" placeholder="Placeholder" />
			</div>
			<a className={$.newsletter_submit}>SEND</a>
		</div>
	</div>
);
