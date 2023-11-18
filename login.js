import express from "express";

export const router2 = express.Router();
// POST /user/signin
router2.get('/signin', (req, res) => {
    console.log("signin");    
    res.send("this is signin");
});

// export default router2;