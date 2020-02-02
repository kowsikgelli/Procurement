import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head'
import Header from './Header';
export default (props)=>{
	return(
		<div style={{ backgroundImage: `url(require("https://kissflow.com/wp-content/uploads/2018/11/ProcurementSystem_Blog.png"))` ,backgroundRepeat: 'no-repeat'}}>
			


				<Header />
			
			<Container >
			<Head>
				<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
			</Head>
			
			{props.children}
			</Container>
		</div>
		)
}
