// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract BountyContract {

    address owner;

    uint256 public bountyCount;
    uint256 public bountyHunterCount;
    uint256 public organisationCount;
    uint256 userCount;
    uint256 submissionCount;

    enum BountyStatus {
        NotStarted,
        Ongoing, 
        Closed
    }

    struct User {
        uint256 id;
        string username;
        address walletAddress;     
    }
    
    struct Organisation {
        uint256 id;
        string name;
        string logoIPFS;
        address creatorAddress;
        Bounty[] bounties;
        BountyHunter[] bountyHunters;
        Bounty bounty;
    }

    struct Bounty {
        uint256 organisationId;
        uint256 bountyId;
        string title;
        string descriptionGithubLink;
        uint256 chainId;
        uint256 bountyAmount;
        uint256 startTime;
        uint256 endTIme;
        BountyStatus status;
        // BountyHunter[] bounterHunters;
        //SubmitWork[] submittedWorks
    }

    struct BountyHunter {
        uint256 id;
        string username;
        address walletAddress;
        // Bounty[] bounties;      
    }

    struct SubmitWork {
        uint256 submissionId;
        address participant;
        string submissionLink;
        bool acceptanceStatus;
    }

    struct BountyObj {
        Bounty[] bounties;
    }

    struct BountyHunterObj {
        BountyHunter[] bountyHunters;
    }

    struct SubmissionObj {
        SubmitWork[] submissions;
    }

    struct OrganisationObj {
        Organisation[] organisations;
    }

    // List
    Organisation[] organisations;
    Bounty[] bounties;
    BountyHunter[] bountyHunters;
    User[] users;

    // Mappings
    mapping (uint256 => Organisation) public organisationMap;
    mapping (uint256 => OrganisationObj) orgMap;
    mapping  (address  => mapping (uint256 => Bounty)) public  bountyMaps;
    mapping  (uint256 => mapping(uint256 => Bounty)) public  bountyMap;
    mapping (uint256 => BountyObj) bountyListMap;
    mapping (uint256 => BountyHunterObj) bountyHunterMap;
    mapping(address => User) usersMap;
    mapping (uint256 => mapping (uint256 => SubmissionObj)) submissions;
    mapping (address => mapping (uint256 => mapping (uint256 => SubmitWork))) userSubmission;
    mapping (uint256 => mapping (uint256 => SubmitWork)) worksubmissions;

    //Map user github account to wallet address
    mapping(string => address) userAccount;

    constructor(){
        msg.sender == owner;
    }

    function createAccount(string memory username) public {
        // check to ensure user does not register twice
        
        User storage user = usersMap[userAccount[username]];
        user.id = userCount;
        user.username = username;
        user.walletAddress = msg.sender;
        userCount++; 
    }

    function createOrganization(string memory _name, string memory _logoIPFS) public {
        // check to ensure the the creator has registered
        // check to ensure the same organisation is not registered twice

        Organisation storage organisation = organisationMap[organisationCount];
        organisation.id = organisationCount;
        organisation.name = _name;
        organisation.logoIPFS = _logoIPFS;
        organisation.bounties = bounties;
        organisation.bountyHunters = bountyHunters;
        organisationCount++;
    }


    // function joinOrganisation(uint organizationId, string memory username) public {
    //     // check to ensure the the user has registered
    //     // check to ensure the organisation exist
    //     // check to ensure user does to join more than once

    //     Organisation storage organisation =  organisationMap[organizationId];
    //     // organisation.bounty = bountyHunterMap[organizationId].bountyHunters.push(BountyHunter(
    //     // username, msg.sender
    //     // ));
        
    //     // uint256 id;
    //     // string username;
    //     // address walletAddress;
    //     // Bounty[] bounties; 

    // }

    function createBounty(
        uint256 organisationId,
        string memory title,
        string memory descriptionGithubLink,
        uint256 chainId,
        uint256 bountyAmount,
        uint256 startTime,
        uint256 endTIme,
        BountyStatus status

        ) public {
        // checks to ensure the organisaction exist
        // check to ensure the bounty creator has registered
        // check to ensure the start and endtime are in the future and endtime not less than start time
        // check the value of status base on the start time
        Bounty storage bounty = bountyMaps[msg.sender][organisationId];
        bounty.bountyId = bountyCount;
        bounty.title = title;
        bounty.descriptionGithubLink = descriptionGithubLink;
        bounty.chainId = chainId;
        bounty.bountyAmount = bountyAmount;
        bounty.startTime = startTime;
        bounty.endTIme = endTIme;
        bounty.status = status;
    }

    function submitWork(uint256 bountyId, uint256 organisationId, string memory submissionLink) public {
        // check to ensure user registered
        // check to ensure bounty and organisation exist
        // check to ensure the bounty has not ended
        SubmitWork storage work = worksubmissions[organisationId][bountyId];
        work.acceptanceStatus = false;
        work.submissionId = submissionCount;
        work.submissionLink = submissionLink;
        submissionCount++;
    }

    function removeOrganization(uint256 _organizationId) public {
        // TODO organisation can only be removed by the creator
        delete orgMap[_organizationId].organisations;
    }

    function removeBounty(uint256 _bountyId) public {
        // bounty can only be removed when it has not started.
        delete bountyListMap[_bountyId].bounties;
    }

    function deleteHunterSubmission(uint256 organisationId, uint256 bountyId) public {
        delete userSubmission[msg.sender][organisationId][bountyId];
    }

    function updateSubmission(uint256 organisationId, uint256 bountyId, string memory submissionLink) public {
        SubmitWork storage work = userSubmission[msg.sender][organisationId][bountyId];
        work.submissionLink = submissionLink;
    }

    function acceptSubmissions(uint256 organisationId, uint256 bountyId, address hunterAddress) public {
        // update the acceptance value
        // this should be called by the bountyCreator
        // This can only be called when bounty has ended

        SubmitWork storage work = userSubmission[hunterAddress][organisationId][bountyId];
        work.acceptanceStatus = true;

    }

  function payBountyWinners(uint256 organisationId, uint256 bountyId) public  {
    // get all submissions, check if user submission is accepted, and if true, distribute the funds to the hunters
    // This can only be called when the bounty has ended

    SubmitWork[] storage works = submissions[organisationId][bountyId].submissions;
    Bounty storage bounty = bountyMap[organisationId][bountyId];
    uint256 bountyAmount = bounty.bountyAmount;
    uint256 acceptedCount = 0;
    uint256 amount;

    for (uint256 i = 0; i < works.length; i++) {
        if (works[i].acceptanceStatus == true) {
            acceptedCount++;
        }
    }

    if (acceptedCount > 0) {
        amount = bountyAmount / acceptedCount;
        for (uint256 i = 0; i < works.length; i++) {
            if (works[i].acceptanceStatus == true) {
                payable(works[i].participant).transfer(amount);
            }
        }
    }

}

function getSumissions (uint256 organisationId, uint256 bountyId) public view returns(SubmitWork[] memory){
    return  submissions[organisationId][bountyId].submissions;

}

    function getOrganisations() public view returns(Organisation[] memory){
        return organisations;
    }

    function getOrganisation(uint256 _organizationId) public view returns(Organisation memory){
        return  organisationMap[_organizationId];
    }

     function getBountyHunters() public view returns(uint256){
        return bountyHunterCount;
    }

    function getBounty(uint256 _bountyId) public view returns (Bounty memory){
        return bountyListMap[_bountyId].bounties[_bountyId];
    }

    function getBounties() public  view returns(uint256){
        return bountyCount;
    }

    function getOrganisationBounties(uint256 _organisationId) public view returns(Bounty[] memory){    
        return bountyListMap[_organisationId].bounties;
    }

    function getBountyHunterBounties(uint256 _bounterHunterId) public view returns(BountyHunter[] memory){
        return bountyHunterMap[_bounterHunterId].bountyHunters;
    }


}