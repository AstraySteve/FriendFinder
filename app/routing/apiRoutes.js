/*
    Steven Tran
    UofT SCS Coding Bootcamp
*/
var friends = require("../data/friends");

module.exports = (app)=>{
    app.get('/api/friends', (req, res)=>{
        //something
        res.json(friends.list);
    });
    
    app.post('/api/friends', (req, res)=>{
        //something
        res.json({"Result": "post"});
    });
}
