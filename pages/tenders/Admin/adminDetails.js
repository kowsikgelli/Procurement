import React from 'react'
import { Message,Button } from 'semantic-ui-react'
import Layout from '../../../components/Layout';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from 'next/link';
class adminDetails extends React.Component{
	render(){
		return(
			<Layout>
				
				<Message success
    				header='Your Bid Details are successfully added to Blockchain '
    				content='Please mail your Documents To Given Email Below'
    				
  				/>
  				
  				<br/>
  				<Link href="https://mail.google.com">
  					<a>
  						<Message info
    						header='kowsikgelli@gmail.com'
  						/>
  					</a>
  				</Link>
  				<br/>
  				<CopyToClipboard text="kowsikgelli@gmail.com">
  					<center><Button >Copy Email</Button></center>
				</CopyToClipboard>
  			</Layout>
			)
	}
}
export default adminDetails
