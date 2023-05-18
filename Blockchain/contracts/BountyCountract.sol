// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract BountyDapp {

    uint256 organisationCount;
    uint256 bountyCount;
    uint256 memberCount;
    uint256 organisationMemberCount;
    uint256 submissionCount;
    address payable owner;
    bool internal locked;

      enum BountyStatus {
        NotStarted,
        Ongoing, 
        Closed
    }
      struct Organisation {
        uint256 id;
        string name;
        string logoIPFS;
        address payable creatorAddress;
        uint256 totalBountiesCreated;
        uint256 totalAmountSpent;
        uint256 totalMembers;
    }

    struct Bounty {
        uint256 organisationId;
        uint256 bountyId;
        string title;
        address payable bountyCreator;
        string descriptionGithubLink;
        uint256 chainId;
        uint256 bountyAmount;
        uint256 startTime;
        uint256 endTIme;
        // BountyStatus status;
        uint256 totalBounterHunters;
        uint256 totalSubmittedWorks;
        string[] sumissionLink;
    }

    struct BountyHunter {
        uint256 id;
        string username;
        address payable walletAddress;
        uint256 bounties;      
    }

    struct SubmitWork {
        uint256 submissionId;
        uint256 organisationId;
        uint256 bountyId;
        address payable participant;
        string submissionLink;
        bool acceptanceStatus;
        uint256 earnings;
    }

    struct Member{
        uint256 id;
        address memberAdress;
    }

   struct OrganisationMember{
       uint256 id;
       string organizationId;
      address memberAdress;
    }

    Organisation[] organisationList;
    Bounty[] bounties;
    Member[] members;
    Member[] organisationMemberList;
    SubmitWork[] submissionList;
    address[] bountyParticipationList;

    mapping (address => uint256) organisationBountyMapCount;
    mapping (uint256 => Bounty[]) bountyMapList;
    mapping (address => mapping(uint256 => mapping(uint256 => Bounty))) bountyMembers;
    mapping (uint256 => Organisation) organistations;
    mapping (uint256 => Member[]) organisationMembers;
    mapping (uint256 => mapping (uint256 => Bounty)) bountyOrgMap;
    mapping (address => Member) users;
    mapping (address => bool) alreadyExist;
    mapping (address => mapping (uint256 => bool)) alreadyMember;
    mapping (address => mapping(uint256 => mapping (uint256 => SubmitWork[]))) worksubmissions;
    mapping (address => mapping(uint256 => mapping (uint256 => SubmitWork))) workMapSubmissions;
    mapping (uint256 => mapping (uint256 => SubmitWork[])) submissions;


    modifier noReentrant() {
        require(!locked, "No re-entrancy");
        locked = true;
        _;
        locked = false;
    }


    modifier onlyOwner{
        require(msg.sender == owner, 'You are not the owner');
        _;
    }

    modifier onlyOrganisationCreator(uint256 _organisationId){
        require(organistations[_organisationId].creatorAddress == msg.snder, "You are not the creator");
        _;
    }

    modifier onlyBountyCreator(uint256 __organisationId, uint256 _bountyId){
        require(bountyMapList[__organisationId][_bountyId].bountyCreator == msg.sender, "You are not the bounty creator");
        _;
    }

    modifier orgMembershipStatus(uint256 _organisationId) {
        require(alreadyExist[msg.sender], " You have not yet setup your account");
        require(!alreadyMember[msg.sender][_organisationId], "You are already a member of this organisation");
        require(organisationList[_organisationId].id == _organisationId, "Organisation does not exist");
        _;
    }


        constructor(){
            owner = payable(msg.sender);
        }

     function createAccount() public {      
        Member storage member = users[msg.sender];
        require(!alreadyExist[msg.sender], "Account already exist");
        member.id = memberCount;
        member.memberAdress = msg.sender;
        members.push(Member(memberCount, msg.sender));
        memberCount++;
        alreadyExist[msg.sender] = true;

    }

    function createOrganisation(
        string memory name,
        string memory logoIPFS
    ) public{
           // check to ensure the the creator has registered
        // check to ensure the same organisation is not registered twice

        uint256 _totalBountiesCreated;
        uint256 _totalAmountSpent;
        uint256 _totalMembers;

        Organisation storage organisation = organistations[organisationCount];
        organisation.id = organisationCount;
        organisation.name = name;
        organisation.logoIPFS = logoIPFS;
        organisation.totalBountiesCreated = _totalBountiesCreated;
        organisation.totalAmountSpent = _totalAmountSpent;
        organisation.totalMembers = _totalMembers;
        organisation.creatorAddress = payable(msg.sender); 
    
        // push to list
        organisationList.push(Organisation(
             organisationCount, 
            name, logoIPFS, 
            payable(msg.sender), 
            _totalBountiesCreated, 
            _totalAmountSpent,
            _totalMembers
        ));
         organisationCount++;

    }

    function getOrganisations() public view returns(Organisation[] memory){
        return organisationList;
    }

    function getOrganisation(uint id) public view returns(
    uint256 _id, 
        string memory name, 
        string memory logoIPFS, 
        address creator, 
        uint256 totalBountiesCreated, 
        uint256 totalAmountSpent,
        uint256 totalMembers
    ){
        return (
            organisationList[id].id,
            organisationList[id].name,
            organisationList[id].logoIPFS,
            organisationList[id].creatorAddress,
            organisationList[id].totalBountiesCreated,
            organisationList[id].totalAmountSpent,
            organisationList[id].totalMembers
        );
    }

    function joinOrganisation(uint256 _organisationId) public {
        require(alreadyExist[msg.sender], " You have not yet setup your account");
        require(!alreadyMember[msg.sender][_organisationId], "You are already a member of this organisation");
        require(organisationList[_organisationId].id == _organisationId, "Organisation does not exist");
        organisationList[_organisationId].totalMembers +=1;  
        Member[] storage membersList = organisationMembers[_organisationId];    
        membersList.push(Member(memberCount, msg.sender));     
        organisationMemberCount++;
        alreadyMember[msg.sender][_organisationId] = true;
    }

    function getOrganisationMembers(uint256 _organisationId) public view  returns(Member[] memory){
        return organisationMembers[_organisationId];
    }

    function getMembers() public view returns (Member[] memory) {
        return members;
    }


  function createBounty(
        uint256 organisationId,
        string memory title,
        // address bountyCreator,
        string memory descriptionGithubLink,
        uint256 chainId,
        uint256 bountyAmount,
        uint256 startTime,
        uint256 endTIme
  ) public payable noReentrant{
        // checks to ensure the organisaction exist
        // check to ensure the bounty creator has registered
        // check to ensure the start and endtime are in the future and endtime not less than start time
        // check the value of status base on the start time
        // the creator of the bounty should be the creator of the organisation

        uint256 _totalBounterHunters;
        uint256 _totalSubmittedWorks;

        uint256 _bountyId = organisationBountyMapCount[msg.sender];
        Organisation storage organisation = organisationList[organisationId];
        organisation.totalAmountSpent += bountyAmount;
        organisation.totalBountiesCreated += 1;

        require(organisation.id == organisationId, "Invalid organisation");
        require(msg.sender == organisation.creatorAddress, "You are not authorised to post bounty for this organisation");
       
        Bounty[] storage bounty = bountyMapList[organisationId];
        // BountyStatus status = BountyStatus(0);
        string[] memory arrs;
        bounty.push(Bounty(
            organisationId,
            bountyCount,
            title,
            payable(msg.sender),
            descriptionGithubLink,
            chainId,
            bountyAmount,
            startTime,
            endTIme,
            // status,
            _totalBounterHunters,
            _totalSubmittedWorks,
            arrs
        ));

        bounties.push(
            Bounty(
            organisationId,
            bountyCount,
            title,
            payable(msg.sender),
            descriptionGithubLink,
            chainId,
            bountyAmount,
            startTime,
            endTIme,
            // status,
            _totalBounterHunters,
            _totalSubmittedWorks,
            arrs
        )
        );
        _bountyId++;
        bountyCount++;
        payable(msg.sender).transfer(bountyAmount);
  }

    function joinBounty(uint256 _bountyId, uint256 _organisationId) public {
        // To join you need to be a member of the organisation
        // the organization and bounty need to exist
        Bounty[] storage bounty = bountyMapList[_bountyId];
        require(alreadyExist[msg.sender], "You have not yet setup your account");
        require(alreadyMember[msg.sender][_organisationId], "You are not yet a member of this organisation");
        require(organisationList[_organisationId].id == _organisationId, "Organisation does not exist");
        require( bounty[_bountyId].bountyId == _bountyId, "Bounty does not exist");
        bounty[_bountyId].totalBounterHunters +=1;  

        Member[] storage membersList = organisationMembers[_organisationId];    
        membersList.push(Member(memberCount, msg.sender));     
        organisationMemberCount++;
        alreadyMember[msg.sender][_organisationId] = true;
    }

    function submitWork(uint256 _bountyId, uint256 _organisationId, string memory _submissionLink) public {
        // check to ensure user registered for the bounty and user also registered and also a member of the organisation
        // check to ensure bounty and organisation exist
        // check to ensure the bounty has not ended
        Bounty storage bounty = bountyOrgMap[_organisationId][_bountyId];
        bounty.sumissionLink.push(_submissionLink);
        uint256 _totalEarnings;
        SubmitWork storage work = workMapSubmissions[msg.sender][_organisationId][_bountyId];
        work.acceptanceStatus = false;
        work.submissionId = submissionCount;
        work.submissionLink = _submissionLink;
        work.participant = payable(msg.sender);
        work.organisationId = _organisationId;
        work.bountyId = _bountyId;

        submissionList.push(SubmitWork(submissionCount, _organisationId, _bountyId, payable(msg.sender), _submissionLink, false, _totalEarnings));
        submissionCount++;
    }

    // function getSubmissions(uint256 _organisationId, uint256 _bountyId) public view returns (SubmitWork[] memory) {
    //     SubmitWork[] storage _submitWork;
        
    //     for (uint256 i = 0; i < submissionList.length; i++) {
    //         if (submissionList[i].organisationId == _organisationId && submissionList[i].bountyId == _bountyId) {
    //             _submitWork.push(submissionList[i]);
                
    //         }
    //     }
           
    //     return _submitWork;
    // }

    function getAllSubmissions() public view returns(SubmitWork[] memory){
        return submissionList;
    }

    function getUserSubmission(uint256 _organisationId, uint256 _bountyId) public view returns(SubmitWork memory) {
       return workMapSubmissions[msg.sender][_organisationId][_bountyId];
    }

// Get all bounties of an organisation
  function getOrganisationBounties(uint256 _organisationId) public view returns(Bounty[] memory){
      return bountyMapList[_organisationId];
  }

  function getAllBounties() public view returns(Bounty[] memory){
      return bounties;
  }

  function removeOrganization(uint256 _organizationId) public {
        // TODO organisation can only be removed by the creator
    delete organisationList[_organizationId];

    }

    function removeBounty(uint256 _bountyId) public {
        // bounty can only be removed when it has not started.
        Bounty[] storage bounty = bountyMapList[_bountyId];
        bounty[_bountyId] = bounty[bounty.length - 1];
        bounty.pop();
    }

    function deleteHunterSubmission(uint256 organisationId, uint256 bountyId) public {
        delete  workMapSubmissions[msg.sender][organisationId][bountyId];
    }

    function updateSubmission(uint256 _organisationId, uint256 _bountyId, string memory _submissionLink) public {
        SubmitWork storage work = workMapSubmissions[msg.sender][_organisationId][_bountyId];
        work.submissionLink = _submissionLink;
           // Update the submission in the submissionList array
        for (uint256 i = 0; i < submissionList.length; i++) {
            if (submissionList[i].organisationId == _organisationId && submissionList[i].bountyId == _bountyId && submissionList[i].participant == msg.sender) {
                submissionList[i].submissionLink = _submissionLink;
                break;
            }
        }
    }

    function acceptSubmissions(uint256 _organisationId, uint256 _bountyId, address hunterAddress) public {
        // update the acceptance value
        // this should be called by the bountyCreator
        // This can only be called when bounty has ended

        SubmitWork storage work = workMapSubmissions[hunterAddress][_organisationId][_bountyId];
        work.acceptanceStatus = true;
             // Update the submission in the submissionList array
        for (uint256 i = 0; i < submissionList.length; i++) {
            if (submissionList[i].organisationId == _organisationId && submissionList[i].bountyId == _bountyId && submissionList[i].participant == hunterAddress) {
                submissionList[i].acceptanceStatus = true;
                break;
            }
        }

    }

  function payBountyWinners(uint256 _organisationId, uint256 _bountyId) public payable noReentrant{
    // Get all submissions, check if user submission is accepted, and if true, distribute the funds to the hunters
    // This can only be called when the bounty has ended

    Bounty storage bounty = bountyMapList[_organisationId][_bountyId];
    uint256 bountyAmount = bounty.bountyAmount;
    uint256 acceptedCount = 0;
    uint256 amount;

    require(address(this).balance >= bountyAmount, "Insufficient contract balance");

    for (uint256 i = 0; i < submissionList.length; i++) {
        if (submissionList[i].organisationId == _organisationId && submissionList[i].bountyId == _bountyId && submissionList[i].acceptanceStatus == true) {
            acceptedCount++;
        }
    }

    require(acceptedCount > 0, "No accepted submissions found");

    amount = bountyAmount / acceptedCount;
    uint256 transferAmount = amount * acceptedCount;
    require(transferAmount <= address(this).balance, "Insufficient contract balance for transfer");

    for (uint256 i = 0; i < submissionList.length; i++) {
        if (submissionList[i].organisationId == _organisationId && submissionList[i].bountyId == _bountyId && submissionList[i].acceptanceStatus == true) {
            submissionList[i].participant.transfer(amount);
        }
    }
    
}

//  function split() public payable onlyOwner noReentrant{
//         require(recipients.length != 0, "There are no receipients");
//         require(address(this).balance > 0, "No fund in the account");
//         uint256 share = msg.value /recipients.length;
//         for(uint256 i=0; i<recipients.length; i++){
//             recipients[i].transfer(share);
//         }
//         emit TransferReceived(msg.sender, msg.value);
//     }

}