const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
