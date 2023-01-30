// const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const UserSchema=new mongoose.Schema({
    
name:{
    require:true,
    type:String
},
email:{
    require : true,
    type: String
},
password:{
    require: true,
    type: String
},

},
{ timestamps: true })

UserSchema.pre('save',  async function(next){

    if(!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password,11)
  
  
        next()
  
      })
    
      UserSchema.pre("findOneAndUpdate", async function(next){
  
        if(this._update.password)
        this._update.password = await bcrypt.hash(this._update.password,11)
  
      })
  
  module.exports = mongoose.model("User", UserSchema);

