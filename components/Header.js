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
		<Menu.Item>
			Public Procurement Portal
		</Menu.Item>
		<Menu.Menu position="right">
			<Link route='/tenders/closed/closedTenders'>
				<a className="item">
					Closed Tenders
				</a>
			</Link>
		</Menu.Menu>
	</Menu>
	</div>
		)
	
}