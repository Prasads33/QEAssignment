var request = require("request");

request({
    uri: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    form: {
        body: {
            title: 'foo',
            body: 'bar',
            userId: '1'
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
}
}, function(error, response, body) {
    console.log(body);
});
