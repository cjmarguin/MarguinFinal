var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var head = '';
var img = '';
var desc = '';

//add your app get here for the home page '/'

app.get('/', function(req, res){
    fetchInfo(true);

    res.render('index', {header:head, image:img , description:desc});
}
//within the get call your function and render the ejs page
function fetchInfo(yee){
    var SpaceAPI = 'https://csuserversidewebdevfinal.herokuapp.com/';
    fetch(yee? SpaceAPI:SpaceAPI)
    .then(resp => resp.json())
    .then(data =>{
        header = data.head;
        image = data.img;
        description = data.desc;

        
    
    });

}

app.listen(port, function () {
});