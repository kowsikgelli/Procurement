import React from 'react';
import instance from '../../../ethereum/tender';
import web3 from '../../../ethereum/web3';
import {Card,Image} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
class winners extends React.Component{
	state={
		Admin:''
	}
	static async getInitialProps(props){
		const owner=await instance.methods.owner().call();
		const winner=await instance.methods.winner(props.query.id).call({from:owner});
		
		console.log(winner)
		const tenderDetails=await instance.methods.Tenders(props.query.id).call();
		console.log(tenderDetails[1])
		const bidCount= await instance.methods.bidCount().call();
		let winnerBids=[]
		for(let i=1;i<=bidCount;i++){
			const bid=await instance.methods.Bids(i).call();
			let singleTenderId=bid.tenderId;
			
			if((singleTenderId==props.query.id) && (bid.bidder==winner)){
				
			let singleBid=await instance.methods.Bids(props.query.id).call();
			
				winnerBids.push(singleBid);
			}
		}
		let lowestBidOfWinner=winnerBids[0].bidValue;
		for(let i=0;i<winnerBids.length;i++){
			if(winnerBids[i].bidValue<lowestBidOfWinner){
				lowestBidOfWinner=winnerBids[i].bidValue;
			}
		}
		return {
			tenderId:tenderDetails[0],
			tenderType:tenderDetails[1],
			startDate:tenderDetails[2],
			endDate:tenderDetails[3],
			tenderSubject:tenderDetails[4],
			tenderReceivingLocation:tenderDetails[5],
			maxBidValue:tenderDetails[6],
			winner:winner,
			winnerBid:lowestBidOfWinner
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
			maxBidValue,
			winner,
			winnerBid
		}=this.props;
		const start = new Date(startDate*1000);
		const normalStartDate=`${start.getDate()}/${start.getMonth()+1}/${start.getFullYear()}    ${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`
		const end = new Date(endDate*1000);
		const normalEndDate=`${end.getDate()}/${end.getMonth()+1}/${end.getFullYear()}    ${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`
		const items=[
			{
				header:winner,
				meta:winnerBid,
				description:'winner of this Tender :)',
				fluid:true
			},
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
		return(
				<Layout>
					<Image centered src="https://t3.ftcdn.net/jpg/01/07/31/48/240_F_107314824_sZFb5Gky3202H2x93do25iyYlpma3eul.jpg"/>
					{this.renderCards()}
				</Layout>
			)
	}
}
export default winners;