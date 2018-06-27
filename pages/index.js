import Head from "next/head";
import PlatformPromo from "./PlatformPromo";
import Features from "./Features";
import Team from "./Team";
import Newsletter from "./Newsletter";
import { Component } from "react";
import WebsiteFooter from "~/components/WebsiteFooter";
import $ from "./style.css";
import data from "./data";
export default () => (
	<div className={$.application}>
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700"
				rel="stylesheet"
			/>
		</Head>
		<PlatformPromo />
		<Features />
		<Team items={data.members} />
		<Newsletter items={data.features} />
		<WebsiteFooter />
	</div>
);
