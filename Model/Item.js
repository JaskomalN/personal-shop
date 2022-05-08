const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const item_schema = new Schema(
    { item_name:{
        type: String,
        required: true
    },
    item_description:{
        type: String,
        required: true
    },
    item_brand:{
        type: String,
        required: true
    },
    item_price:{
        type: Number,
        required: true
    },
    item_availability:{
        type: Boolean,
        required: true
    }
    });

    module.exports = mongoose.model("Item", item_schema);