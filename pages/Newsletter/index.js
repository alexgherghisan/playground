import $ from "./style.css";
import Header from "~/components/Header";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.newsletter}>
		<div className={$.newsletter_titile}>Join our newsletter</div>
		<div className={$.newsletter_form_holder}>
			<input
				className={$.newsletter_input}
				type="text"
				placeholder="Placeholder"
			/>
			<a className={$.newsletter_button}>SEND</a>
		</div>
	</div>
);
