const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    id:{type: Number, unique:true},
    block:{type: String},
    flatNo:{type: Number},
    totalflatNo:{type: Number},
    image:{type: String}
},{
    versionkey: false,
    timestamps: true
})