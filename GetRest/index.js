var request = require("request");

request({
    uri: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    timeout: 10000,
    /*followRedirect: true,
    maxRedirects: 10*/
}, function(error, response, body) {
    console.log(body);
});
