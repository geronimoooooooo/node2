
// const router = require('express').Router()
import  express, { response } from "express";

export const routerVar = express.Router();


routerVar.get('/' , (req , res)=>{
    // router code here
})


routerVar.get('/another-route' , (req , res)=>{
    console.log("another-route");
})

// module.exports  = router


export function getDataFromForm(req, res){
    const {food} = req.body;
    const sel = req.body.sel;
    console.log(sel);
    console.log(req.body);
    // req.body.field = Boolean(req.body.field)
    // object = {
    //     first: req.body.first_name ? true : false,
    //     second: req.body.2 ? true : false,
    //     third: req.body.3 ? true : false
    // };
    const form = {  
        first:req.body.first_name,  
        last:req.body.last_name,
        selector: req.body.sel        
    };  
    console.log(JSON.stringify(form) + "," +form.first);  
    res.send(form);
    return
    // res.end(JSON.stringify(response));  
    if(food)
    food.forEach((item) => {
        console.log(item);
    });

    const listFood = req.body.food;
    console.log(listFood);
    const radio = req.body.list_radio;
    console.log(radio);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    
    const dairy = req.body.dairy_name === 'on';
    
    const celcius = req.body.celcius;

    if (req.body.meat) {
        console.log("meat true");
    } else {
        console.log("meat false");
    }

    // Check if checkbox1 is checked
    const checkbox1Checked = req.body.checkbox1 === 'on';

    // Check if checkbox2 is checked
    const checkbox2Checked = req.body.checkbox2 === 'on';
    if((req.body.food != undefined) && (listFood.includes('meat'))) {
        console.log("meat is checked");
    } else {
        
    }
        
    const meat = req.query.meat;
    if(req.query.meat === undefined){
        console.log("true 1meat ist: "+ meat);
    }else{
        console.log("false 1meat ist: "+ meat);
    }

    console.log( "req.body.checkbox1: "+req.body.checkbox1);
    console.log( "req.body.checkbox2: "+req.body.checkbox2);
    console.log( "req.body.dairy: "+req.body.dairy);    
    console.log(`This is ${first_name} with ${last_name} with ${checkbox1Checked} with ${checkbox2Checked}.`);
    console.log("this is first: "+first_name + " dairy: "+ dairy + " whole checked list: "+ req.body.food);
    // res.send(`Checkbox 1 checked: ${checkbox1Checked}, Checkbox 2 checked: ${checkbox2Checked}`);
    res.send(`This is ${first_name} with ${last_name} with ${dairy}..`);
   }

   