import $ from "./style.css";
import Header from "~/components/Header";
import { STATIC, URL } from "~/playground";
import { Component } from "react";
export default () => (
	<div className={$.logo_holder}>
		<img src={`${STATIC}/images/logo.png`} />
	</div>
);
