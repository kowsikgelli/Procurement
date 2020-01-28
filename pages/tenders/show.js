import React from 'react'
import Layout from '../../components/Layout'
import instance from '../../ethereum/tender';
import {Card,Button} from 'semantic-ui-react';
import {Link} from '../../routes';
class tendershow extends React.Component{
	static async getInitialProps(props){
		const tenderDetails=await instance.methods.Tenders(props.query.id).call();
		console.log(tenderDetails[1])
		return {
			tenderId:tenderDetails[0],
			tenderType:tenderDetails[1],
			startDate:tenderDetails[2],
			endDate:tenderDetails[3],
			tenderSubject:tenderDetails[4],
			tenderReceivingLocation:tenderDetails[5],
			maxBidValue:tenderDetails[6]
		}
	}
	renderCards(){
		const {
			tenderId,
			tenderType,
			startDate,
			endDate,
			tenderSubject,
			tenderReceivingLocation,
			maxBidValue
		}=this.props;
		const start = new Date(startDate*1000);
		const normalStartDate=`${start.getDate()}/${start.getMonth()+1}/${start.getFullYear()}    ${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`
		const end = new Date(endDate*1000);
		const normalEndDate=`${end.getDate()}/${end.getMonth()+1}/${end.getFullYear()}    ${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`
		const items=[
			{
				header:tenderType,
				meta:"type of tender",
				description:'tender type is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:tenderId,
				description:'tender id is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:normalStartDate,
				description:'tender start date is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:normalEndDate,
				description:'tender closing date is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:tenderSubject,
				description:'tender subject is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:tenderReceivingLocation,
				description:'tenderReceivingLocation is shown here',
				style:{overflowWrap:'break-word'}
			},
			{
				header:maxBidValue,
				description:'maxBidValue is shown here',
				style:{overflowWrap:'break-word'}
			}
		]
		return <Card.Group items={items} />
	}
	render(){

		//console.log(this.props.query.id)
		return(
				<Layout>
					
					<h3>Tender Details</h3>
					{this.renderCards()}
					<br />
					<br />
					<Link route={`/tenders/submitbid/${this.props.tenderId}`}>
						<a>
							<Button primary size='large'>Submit Bid</Button>
						</a>
					</Link>
					<Link route={`/tenders/viewBids/${this.props.tenderId}`}>
						<a>
							<Button primary size='large'>View Bids</Button>
						</a>
					</Link>
				</Layout>
			)
	}
}
export default tendershow