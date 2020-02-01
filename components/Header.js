import React from 'react';
import {Menu,Responsive,Button} from 'semantic-ui-react';
import {Link} from '../routes'
export default ()=>{
	return(
		<div>
	<Menu inverted style={{margin:'10px'}}>
		<Link route='/'>
			<a className="item">
				Home
			</a>
		</Link>
		<Menu.Item>
			E Procurement Portal
		</Menu.Item>
		<Link route="/tenders/validDoc/validDocument">
			<a className="item">
				valid Document
			</a>
		</Link>
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