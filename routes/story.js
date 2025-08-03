const {Router} = require("express");
const {auth} = require("../middlewares/auth");

const {StoryModel} = require("../db");


const storyRouter = Router();

storyRouter.get("/all", auth, (req,res) => {
    //Gives all the stories.
})

storyRouter.post("/", auth, (req,res) => {
    //Adds new running story
})

storyRouter.get("/", auth, (req,res) => {
    //Gives the current running story.
})




module.exports = storyRouter;