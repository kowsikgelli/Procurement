import React from 'react';
import Layout from '../../../components/Layout';
import instance from '../../../ethereum/tender';
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes';
import {Card} from 'semantic-ui-react'
class closedTenders extends React.Component{
	static async getInitialProps(){
		const tenderCount=await instance.methods.tenderCount().call();
		let tenders=[];
		const d=new Date();
		const currentDate=~~(d.getTime()*0.001);
		for(let i=1;i<=tenderCount;i++){
			const singletender=await instance.methods.Tenders(i).call();
			if(currentDate>singletender.endDate){
				tenders.push(singletender);
			}
		}
		return {tenders}
	}
	renderTenders(){
		const items=this.props.tenders.map(tenderobject=>{
			return{
				header:tenderobject.tenderSubject,
				description:(
					<Link route={`/tenders/${tenderobject.id}`}>
						<a>view tender</a>
					</Link>
					),
				fluid:true,
				color:'red'
			}
		})
		return <Card.Group items={items} />
	}
	render(){
		return(
			<Layout>
				{this.renderTenders()}
			</Layout>
			)
	}
} 
export default closedTenders