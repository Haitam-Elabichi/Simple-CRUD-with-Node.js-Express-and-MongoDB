const mongoose=require('mongoose');
const ProductScheme=mongoose.Schema(
    {

        name:{
            type:String,
            required:[true,"please enter product name..."]
        },
        password:{
            type:String,
            required:true,


        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false

        },


    },

    {
        timestamps: true ,// ✅ التصحيح هنا
    }
)
const Product =mongoose.model("Product",ProductScheme);
 module.exports=Product;