import React from 'react'
import instance from '../ethereum/tender'
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout'
import {Link} from '../routes'
class Procurement extends React.Component{
	//state={owner:""}
	static async getInitialProps(){
		const tenderCount=await instance.methods.tenderCount().call();
		let tenders=[];
		const d=new Date();
		const exitDate=~~(d.getTime()*0.001);
		for(let i=1;i<=tenderCount;i++){
			const singletender=await instance.methods.Tenders(i).call();
			tenders.push(singletender);
			let index=tenders.indexOf(singletender)
			if(exitDate>singletender.endDate){
				tenders.splice(index,1);
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
				fluid:true
			}
		})
		return <Card.Group items={items} />
	}
	// async componentDidMount(){
	// 	const owner=await instance.methods.owner().call();
	// 	console.log(owner)
	// 	this.setState({owner})
	// }
	render(){
		return(
			<Layout>
			<div>
				<Link route="/tenders/new">
					<a>
						<Button floated="right" content="create tender" icon="add" labelposition="left" primary={true}/>
						
					</a>
				</Link>
				<h3>Open Tenders</h3>
				{this.renderTenders()}
			</div>
			</Layout>
			)
	}
}
export default Procurement