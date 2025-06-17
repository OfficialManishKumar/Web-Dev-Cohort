// Creating a server using a built-in module named "http" not by using "express"
const http = require('http')
const server = http.createServer(
    function(request,response){
        // response.end("Response......")  // Response, the requeter will get
        console.log("Request..")    // printed on console when someone makes and request
        // Professional Work: to handle different oages and types of request we just writes a code like this:
        switch(request.method){
            case "GET":
                {if(request.url == "/"){response.end("This is the Get Request at our homepage.")}
                if(request.url == "/contact-us"){response.end("This is the Get Request at our contact-us page.")}
                if(request.url == "/about"){response.end("This is the Get Request at our about page.")}}
                break;
            case "POST":
                {if(request.url == "/"){response.end("This is the Post Request at our homepage.")}
                if(request.url == "/contact-us"){response.end("This is the Post Request at our contact-us page.")}
                if(request.url == "/about"){response.end("This is the Post Request at our about page.")}}
                break;
            case "DELETE":
                {if(request.url == "/"){response.end("This is the Delete Request at our homepage.")}
                if(request.url == "/contact-us"){response.end("This is the Delete Request at our contact-us page.")}
                if(request.url == "/about"){response.end("This is the Delete Request at our about page.")}}
                break;
        }
    }
)

server.listen(4000,function(){
    console.log("Server is now listening at Port 4000")
})