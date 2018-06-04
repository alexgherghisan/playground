import $ from "./style.css";
import Header from "~/components/Header";
import { STATIC } from "~/playground";
export default () => (
	<div className={$.upper_footer_holder}>
		<div className={$.contacts_holder}>
			<div className={$.contacts}>Contacts</div>
			<div className={$.contacts_info}>
				Morbi interdum dolor ut pellentesque gravida. Vivamus aliquet
				augue ac tincidunt cursus. Nam sed lectus ipsum.
			</div>
		</div>
		<div className={$.contacts_ctas}>
			<div className={$.cta}>Morbi interdum dolor1</div>
			<div className={$.cta}>Morbi interdum dolor2</div>
			<div className={$.cta}>Morbi interdum dolor3</div>
			<div className={$.cta}>Morbi interdum dolor4</div>
		</div>
		<div className={$.contacts_ctas}>
			<div className={$.cta}>Morbi interdum dolor1</div>
			<div className={$.cta}>Morbi interdum dolor2</div>
			<div className={$.cta}>Morbi interdum dolor3</div>
			<div className={$.cta}>Morbi interdum dolor4</div>
		</div>
	</div>
);
