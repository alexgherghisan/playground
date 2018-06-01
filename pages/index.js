import $ from './style.css';
import Head from 'next/head';
import PlatformPromo from './PlatformPromo';
import {STATIC} from "~/playground";
import { Component } from "react";
export default ()=> (
  <div className={$.application}>
	<Head>
		<link
			 href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700" rel="stylesheet"
		/>
	</Head>
  	<PlatformPromo />
  </div>
)