import $ from "./style.css";
import Logo from "./Logo.js";
import Button_Amazing from "./Button_Amazing";
import WebsiteHeader from "~/components/WebsiteHeader";
export default () => (
	<div className={$.hero}>
		<WebsiteHeader />
		<Logo />
		<div className={$.hero_title}>Lorem ipsum dolor sit amet</div>
		<Button_Amazing />
	</div>
);
