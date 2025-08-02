const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true }
});

const storySchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

const runningStorySchema = new Schema({
    storyId: { type: ObjectId, required: true },
    userId: { type: ObjectId, required: true },
    content: {
        currentStory: { type: String, required: true },
        image: {
            data: { type: String , required:true },
            contentType: { type: String , required: true }   
        },
        option1 : {
            title: { type: String, required: true },
            content: { type: String, required: true }
        },
        option2 : {
            title: { type: String, required: true },
            content: { type: String, required: true }
        }
    }
});


const UserModel = mongoose.model("User", userSchema);
const StoryModel = mongoose.model("Story", storySchema);
const RunningStoryModel = mongoose.model("RunningStory", runningStorySchema);

module.exports = {UserModel, StoryModel, RunningStoryModel};