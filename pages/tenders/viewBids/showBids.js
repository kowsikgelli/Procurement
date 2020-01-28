import React from 'react';
import instance from '../../../ethereum/tender'
import web3 from '../../../ethereum/web3';
import {Card} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
class showBids extends React.Component{
	static async getInitialProps(props){
		const bidCount= await instance.methods.bidCount().call();
		let bids=[]
		for(let i=1;i<=bidCount;i++){
			const bid=await instance.methods.Bids(i).call();
			const bidTenderId=bid.tenderId;
			if(bidTenderId==props.query.id){
				const singleBid=await instance.methods.Bids(i).call();
				bids.push(singleBid);
			}
		}
		return{bids}
	}
	renderBids(){
		const items=this.props.bids.map(bidobject=>{
			return{
				header:bidobject.bidder,
				description:bidobject.bidValue,
				meta:" Bid Hash:"+bidobject.fileHash,
				fluid:true
			}
		})
		return <Card.Group items={items} />
	}
	render(){
		return(
			<Layout>
				<h3>submitted Bids</h3>
				{this.renderBids()}
			</Layout>
			)
	}
}
export default showBids;