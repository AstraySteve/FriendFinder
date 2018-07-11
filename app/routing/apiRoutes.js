/*
    Steven Tran
    UofT SCS Coding Bootcamp
*/

module.exports = (app)=>{
    app.get('/api/friends', (req, res)=>{
        //something
        res.json({"Result": "get"});
    });
    
    app.post('/api/friends', (req, res)=>{
        //something
        res.json({"Result": "post"});
    });
}
