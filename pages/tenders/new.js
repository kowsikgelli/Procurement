import React from 'react';
import Layout from '../../components/Layout'
import {Form,Button,Message} from 'semantic-ui-react'
import instance from '../../ethereum/tender';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes'
class newTender extends React.Component{
	state = {
    	startDate: new Date(),
    	tenderSubject:'',
    	tenderType:'',
    	tenderRecevingLocation:'',
    	maxBidValue:'',
    	errorMessage:'',
    	loading:false
  	};
  	handleChange = date => {
    	this.setState({
      	startDate: date.target.value
    	});
    	console.log(typeof(this.state.startDate))
	};
	onSubmit=async(event)=>{
		event.preventDefault();
		this.setState({loading:true,errorMessage:''});
		try{
			const accounts=await web3.eth.getAccounts();
			console.log(accounts)
			const d = new Date(this.state.startDate);

			await instance.methods.createTender(this.state.tenderType,this.state.tenderSubject,this.state.tenderRecevingLocation,d.getTime(),this.state.maxBidValue)
			.send({
				from:accounts[0]
			});
			Router.pushRoute('/');
		}catch(err){
			this.setState({errorMessage:err.message})
		}
		this.setState({loading:false})
	}
	render(){
		return(
			<Layout>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
    				<Form.Field>
      					<label>Tender Subject</label>
      					<input placeholder='Tender Subject' value={this.state.tenderSubject} onChange={event => this.setState({tenderSubject:event.target.value})} />
    				</Form.Field>
    				<Form.Field>
      					<label>Tender Type</label>
      					<input placeholder='Tender Type' value={this.state.tenderType} onChange={event => this.setState({tenderType:event.target.value})}/>
    				</Form.Field>
    				<Form.Field>
      					<label>Tender Receving Location</label>
      					<input placeholder='Tender Receving Location' value={this.state.tenderRecevingLocation} onChange={event=> this.setState({tenderRecevingLocation:event.target.value})} />
    				</Form.Field>
    				<Form.Field>
      					<label>Max Bid Value</label>
      					<input placeholder='Max Bid Value' value={this.state.maxBidValue} onChange={event => this.setState({maxBidValue:event.target.value})}/>
    				</Form.Field>
    				<Form.Field>
    					<label>tender closing date</label>
    					<input type="date" onChange={this.handleChange} value={this.state.startDate}/>
    				</Form.Field>
    				<Message error header="Oops!!" content={this.state.errorMessage} />
    				<Button loading={this.state.loading} primary type='submit'>Submit</Button>
  				</Form>
			</Layout>
			)
	}
	}

export default newTender;