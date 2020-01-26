const routes=require('next-routes')()
routes
	.add('/tenders/new','/tenders/new')
	.add('/tenders/:id','/tenders/show')
	.add('/tenders/submitbid/:id','/tenders/submitbid/newbid')
	.add('/tenders/viewBids/:id','/tenders/viewBids/showBids')
module.exports=routes;