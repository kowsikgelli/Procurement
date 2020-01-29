import React from 'react'
import instance from '../ethereum/tender'
import {Card,Button,Loader,Message,Form} from 'semantic-ui-react';
import Layout from '../components/Layout'
import {Link} from '../routes'
class Procurement extends React.Component{
	state={
		errorMessage:'',
		loading:false,
		account:'',
		successMessage:''
	}
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
	register=async (event)=>{
		this.setState({loading:true,errorMessage:''});
		try{
			const accounts=await web3.eth.getAccounts();
			console.log(accounts)
			this.setState({account:accounts[0]})
			console.log(this.state.account)
			await instance.methods.Register(this.state.account)
			.send({
				from:accounts[0]
			});
			this.setState({successMessage:"successfully Registered"})
		}catch(err){
			this.setState({errorMessage:err.message});
			console.log(err.message)
		}
		this.setState({loading:false})
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
				color:'green'
			}
		})
		return <Card.Group items={items} />
	}
	
	render(){
		return(
			<Layout>
			<div>
				

				<Form onSubmit={this.register} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
					<Button loading={this.state.loading} type="submit" content="Register"  primary={true}/>
					<Message error header={this.state.errorMessage}/>
					<Message success header={this.state.successMessage}/>
				</Form>
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