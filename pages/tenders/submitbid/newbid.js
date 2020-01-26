import React from 'react';
import Layout from '../../../components/Layout';
import {Form,Button,Message} from 'semantic-ui-react'
import instance from '../../../ethereum/tender';
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes';
class newBid extends React.Component{
	state={
		bidValue:'',
		errorMessage:'',
		loading:false
	}
	static async getInitialProps(props){
		return{
			tenderId:props.query.id
		}
	}
	onSubmit=async (event)=>{
		event.preventDefault();
		this.setState({loading:true,errorMessage:''});
		try{
			const accounts=await web3.eth.getAccounts();
			await instance.methods.submitBid(this.props.tenderId,this.state.bidValue)
			.send({
				from:accounts[0]
			})
			Router.pushRoute(`/tenders/${this.props.tenderId}`);
		}catch(err){
			this.setState({errorMessage:err.message});
		}
		this.setState({loading:false})
	}
	render(){
		return(
			<Layout>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Bid Value</label>
						<input placeholder="Bid Value" value={this.state.bidValue} onChange={event=>this.setState({bidValue:event.target.value})}/>
					</Form.Field>
					<Message error header="Oops!!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary type='submit'>Submit</Button>
				</Form>

			</Layout>
			)
	}
}
export default newBid;