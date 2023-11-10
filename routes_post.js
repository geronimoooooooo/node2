

export function getDataFromForm(req, res){
    const first_name = req.body.first_name
    const last_name = req.body.last_name
  
    res.send(`This is ${first_name} with ${last_name}.`);
   }