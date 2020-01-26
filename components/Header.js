import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes'
export default ()=>{
	return(
		<div>
	<Menu style={{margin:'10px'}}>
		<Link route='/'>
			<a className="item">
				Home
			</a>
		</Link>
		<Menu.Menu position="right">
			<Menu.Item>
			Public Procurement Portal
			</Menu.Item>
		</Menu.Menu>
	</Menu>
	</div>
		)
	
}