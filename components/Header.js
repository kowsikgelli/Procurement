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
		<Menu.Menu position="right">
			<Link route='/tenders/closed/closedTenders'>
				<a className="item">
					Closed Tenders
				</a>
			</Link>
			<Menu.Item>
            <Responsive
              {...Responsive.onlyMobile}
              as={Button}
              content='Switch to desktop version'
              icon='desktop'
              labelPosition='left'
            />
            <Responsive
              as={Button}
              content='Switch to mobile version'
              icon='mobile'
              labelPosition='left'
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </Menu.Item>
		</Menu.Menu>
	</Menu>
	</div>
		)
	
}