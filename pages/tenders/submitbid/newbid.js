import React from 'react';
import Layout from '../../../components/Layout';
import {Form,Button,Message} from 'semantic-ui-react'
import instance from '../../../ethereum/tender';
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes';
import {sha256} from 'js-sha256';
class newBid extends React.Component{
	state={
		bidValue:'',
		errorMessage:'',
		loading:false,
		fileHash:''
	}
	static async getInitialProps(props){
		return{
			tenderId:props.query.id
		}
	}
	
	generateHash(file){
		const reader=new FileReader();
		reader.onload=()=>{
			let hash=sha256(reader.result)
			let result=this.state.fileHash;
			result=result+hash;
			this.setState({fileHash:result})
			console.log("result:"+this.state.fileHash)
		}
		reader.readAsText(file);
	}
	combinehash=(event)=>{
		event.preventDefault();
		this.setState({fileHash:sha256(this.state.fileHash)})
	}
	uploadFile=(event)=>{

		console.log(event.target.files.length)
		for(let i=0;i<event.target.files.length;i++){
			console.log("hi")
			this.generateHash(event.target.files[i]);
		}
		
		// console.log(event.target.files[0])
	}
	onSubmit=async (event)=>{
		event.preventDefault();
		this.setState({loading:true,errorMessage:''});
		try{
			const accounts=await web3.eth.getAccounts();
			await instance.methods.submitBid(this.props.tenderId,this.state.bidValue,this.state.fileHash)
			.send({
				from:accounts[0]
			})
			Router.pushRoute('/tenders/Admin/adminDetails')
			// Router.pushRoute(`/tenders/${this.props.tenderId}`);
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
					<Form.Field>
						<label>upload technical and financial bids</label>
						<input type='file' multiple onChange={this.uploadFile}/>
					</Form.Field>
					<Button  size='small' onClick={this.combinehash}>Generate Hash</Button>
					<br/>
					<br/>
					<Form.Field>
						<label>Documents Hash (sha256)</label>
						<input type="text" value={this.state.fileHash}/>
					</Form.Field>
					
					<Message error header="Oops!!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} size='large' primary type='submit'>Submit</Button>
				</Form>
				<Message warning header='You must click Generate Hash before submitting bid' content='If not your file will not be validated By Admin'/>

			</Layout>
			)
	}
}
export default newBid;