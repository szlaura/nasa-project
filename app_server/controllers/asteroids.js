const request = require('request');

const apiOptions = {
    server : "http://localhost:3000"
};

const showError = (res, status) => {
    let title = '';
    let content = '';
    if (status === 404) { 
        title = "404, page not found";
        content = "Oh dear. Looks as if we can't find this page. Sorry.";
    } else  {
        title = status + ", something's gone wrong";
        content = "Something, somewhere, has gone just a little bit wrong.";
    }
    res.status(status);
    res.render('generic-text', {
        title : title,
        content : content
    });
};

const renderHomePage = (res, responseBody) => {
    let message = null;
    if (!responseBody.length) {
        message = "Asteroids not found";
    }
    res.render('asteroids-list', {
        title: 'Asteroid Tracker - what asteroids appeared near the Earth',
        pageHeader: {
            title: 'Recently detected asteroids ',
            // strapline: 'Lorem ipsum asd'
        },
       // sidebar: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        message : message,
        asteroids:  responseBody,

    });
};

/* GET 'home' page */
const asteroidsList = (req, res) => {
    //    const path = '/api/locations' ;
        const requestOption = {
            url : "http://localhost:3000/api/asteroids",
            //url : "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-10&api_key=8x7SnxROCmJKcbOAt2XiQSWYnGaiQ8aLmYfawmT4",
            method : 'GET',
            json : {}
        };   
        request(requestOption, (err, response, body) =>{
            if (response.statusCode === 200) {
                renderHomePage(res, body);
            }else {
                showError(res, response.statusCode);
            }
        });
    };

    module.exports = {
        asteroidsList
    };