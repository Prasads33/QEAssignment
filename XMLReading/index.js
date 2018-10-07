var fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('data.xml', 'utf-8', function (err, data){
    if(err) console.log(err);
        console.log(data);

        // we then pass the data to our method here

    parseString(data, function(err, result){
        if(err) console.log(err);
        // here we log the results of our xml string conversion
        console.log(result);

        var json = result;
        json.root.graph[0].node[0].Name = "Wipro.LTD";

        // create a new builder object and then convert
        // our json back to xml.
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);

        fs.writeFile('edited-test.xml', xml, function(err, data){
            if (err) console.log(err);

            console.log("successfully updated xml to file");
        })

    });
});
