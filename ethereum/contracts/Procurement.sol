pragma solidity >0.5.0 <0.7.0;
contract Procurement{
    address public owner;
    constructor()public{
        owner=msg.sender;
    }
    modifier onlyAdmin(){
        require(msg.sender==owner,"only Admin has access");
        _;
    }
    struct Tender{
        uint id;
        string tenderType;
        uint startDate;
        uint endDate;
        string tenderSubject;
        string tenderReceivingLocation;
        uint maxBidValue;
    }
    mapping(uint=>Tender)public Tenders;
    uint public tenderCount;
    struct Bid{
        address bidder;
        uint tenderId;
        uint bidValue;
        string fileHash;
    }
    mapping(uint=>Bid)public Bids;
    uint public bidCount;
    struct BidRegister{
        address bidder;
        bool registered;
    }
    mapping(address=>BidRegister)public BidRegisters;
    function Register(address _bidder)public{
        require(BidRegisters[_bidder].registered==false);
        BidRegisters[_bidder]=BidRegister(_bidder,true);
    }
    //mapping(address=>mapping(uint=>bool))public bidded;
    function createTender(string memory _tenderType,string memory _tenderSubject,string memory _tenderReceivingLocation,uint _endDate,uint _maxBidValue)public onlyAdmin{
        require(_endDate>now,"enter correct closing date");
        tenderCount++;
        Tenders[tenderCount]=Tender(tenderCount,_tenderType,now,_endDate,_tenderSubject,_tenderReceivingLocation,_maxBidValue);
        
    }
    function submitBid(uint _tenderId,uint _bidValue,string memory _fileHash)public{
        require(BidRegisters[msg.sender].registered==true);
        require(now<Tenders[_tenderId].endDate,"bid is closed");
        require(_bidValue<=Tenders[_tenderId].maxBidValue,"max bidding value exceeded");
       // require(!bidded[msg.sender][_tenderId]);
        require(msg.sender!=owner,"owner cant submit Bid");
        bidCount++;
        Bids[bidCount]=Bid(msg.sender,_tenderId,_bidValue,_fileHash);
        //bidded[msg.sender][_tenderId]=true;
    }
    
    function winner(uint _tenderId)public onlyAdmin view returns(address){
        require(now>Tenders[_tenderId].endDate);
        uint min=Tenders[_tenderId].maxBidValue;
        for(uint i=1;i<=bidCount;i++){
            if(Bids[i].tenderId==_tenderId){
                if(Bids[i].bidValue<min){
                    min=Bids[i].bidValue;
                }
            }
                
        }
        for(uint j=1;j<=bidCount;j++){
            if(Bids[j].tenderId==_tenderId){
                if(min==Bids[j].bidValue){
                    return Bids[j].bidder;
                }
            }
        }
    }
}