const mongoose = require("mongoose")
const Schema = mongoose.Schema
const URL = "mongodb+srv://mack:06062003mohit@cluster0.qzjtknf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/MyBlogApp"

main()
.then(()=>{
    console.log('connected to database successfully')
})
.catch((err)=>{
    console.log("some error had been occured " + err);
})

async function main(){
    await mongoose.connect(URL)
}
const URLschema = new Schema({
    InsertedUrl:{
        type:String,
    },
    RealURL : {
        type : String,
    }
})

const UserURLShortner = mongoose.model("UserURLShortner" , URLschema)

module.exports = UserURLShortner
