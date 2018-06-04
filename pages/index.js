import $ from "./style.css";
import Head from "next/head";
import PlatformPromo from "./PlatformPromo";
import Features from "./Features";
import Team from "./Team";
import { STATIC } from "~/playground";
import Newsletter from "./Newsletter";
import { Component } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default () => (
	<div className={$.application}>
		<Head>
			<link
				href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700"
				rel="stylesheet"
			/>
		</Head>
		<Header />
		<PlatformPromo />
		<Features />
		<Team />
		<Newsletter />
		<Footer />
	</div>
);
