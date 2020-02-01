import React from 'react';
import Layout from '../../../components/Layout';
import {Form,Button,Message} from 'semantic-ui-react'
import instance from '../../../ethereum/tender';
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes';
import {sha256} from 'js-sha256';
class validDocument extends React.Component{
	state={
		errorMessage:'',
		loading:false,
		fileHash:'',
		isButtonDisabled:false,
		exactTwoFiles:false,
		valid:false
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
		if(!!this.state.fileHash){
			this.setState({fileHash:sha256(this.state.fileHash),isButtonDisabled:true})
		}
	}
	uploadFile=(event)=>{
		try{
			console.log(event.target.files.length)
			if(event.target.files.length==2){
				for(let i=0;i<event.target.files.length;i++){
					console.log("hi")
					this.generateHash(event.target.files[i]);
				}
			}else{
				throw "select exact two files";
			}
		}catch(err){
			this.setState({errorMessage:err});
			console.log(err)
		}
		// console.log(event.target.files[0])
	}
	onSubmit=async (event)=>{
		event.preventDefault();
		this.setState({loading:true,errorMessage:''});
		try{
			// const accounts=await web3.eth.getAccounts();
			const bidCount=await instance.methods.bidCount().call();
			console.log(bidCount)
			for(let i=1;i<=bidCount;i++){
				console.log("valids")
				const singleBid=await instance.methods.Bids(i).call();
				console.log(singleBid.fileHash);
				if(singleBid.fileHash==this.state.fileHash){
					console.log("if")
					this.setState({valid:true});
				}
			}
			if(this.state.valid===false){
				throw "Document is invalid"
			}
			console.log(this.state.valid);
			// Router.pushRoute('/tenders/Admin/adminDetails')
			// Router.pushRoute(`/tenders/${this.props.tenderId}`);
		}catch(err){
			this.setState({errorMessage:err});
		}
		this.setState({loading:false})
	}
	render(){
		return(
			<Layout>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.valid}>
					<Form.Field>
						<label>upload technical and financial bids</label>
						<input type='file' multiple onChange={this.uploadFile}/>
					</Form.Field>
					<Button  size='small' onClick={this.combinehash} disabled={this.state.isButtonDisabled}>Generate Hash</Button>
					<br/>
					<br/>
					<Form.Field>
						<label>Documents Hash (sha256)</label>
						<input type="text" value={this.state.fileHash}/>
					</Form.Field>
					<Message success header="Document is Valid"/>
					<Message error header="Oops!!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} size='large' primary type='submit'>Submit</Button>
				</Form>
			</Layout>
			)
	}
}
export default validDocument;