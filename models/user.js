const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim : true,
    },
    email: {
        required: true,
        type: String,
        validate:{
            validator: (value) =>{
                const re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message:"Please enter a valid email address",
        },
    },
    
      password: {
        required: true,
        type: String,
      },
    address:{
        type: String,
        default: "",
    },
    type:{
        type: String,
        default :"user"
,    },
    
});

const User = mongoose.model('User', UserSchema);
module.exports = User;