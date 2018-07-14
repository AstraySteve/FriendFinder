/*
    Steven Tran
    UofT SCS Coding Bootcamp
*/
var friendsData = require("../data/friends");

module.exports = (app)=>{
    app.get('/api/friends', (req, res)=>{
        //something
        res.json(friendsData);
    });
    
    app.post('/api/friends', (req, res)=>{
        //something
        friendsData.push(req.body);
        res.json(friendsData[1]);
    });
}
