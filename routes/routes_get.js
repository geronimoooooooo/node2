

export function bro(req, res){
    let sco = 'science';
    console.log("this is bro function");
    res.send(`This is bro ${sco}`);
}

export function npvGet(req, res){
    console.log("this is func npvGet");
}