
/**
 * The hello function logs a message to the console.
 * @param req - The `req` parameter is an object that represents the HTTP request made by the client. It contains
 * information such as the request method, headers, URL, and body.
 * @param res - The `res` parameter is the response object that is used to send a response back to the client. It contains
 * methods and properties that allow you to control the response, such as setting the status code, headers, and sending the
 * response body.
 */
export function hello(req, res){
    console.log(`this is hello function`);
    res.send(`hello`);
}

export function xxx(req, res){
    console.log("xxx");  
    res.send('xxx!');
  }



