const { request } = require("express");
const Item = require("../Model/Item");
const retrieve_items = async(request,response,next) => {
    let items;
    try{
        items = await Item.find();
    } catch(err) {console.log(err);}
    if (!items) {
        return response.status(404).json({ message: "404 Error" });
    }
    return response.status(200).json({ items });
};

const retrieve_ID = async(request, response, next) => {
    const id = request.params.id;
    let item;
    try{
        item = await Item.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!item){
        return response.status(404).json({message:"Cannot Carry Out This Operation"});
    }
    return response.status(200).json({item});
};

const new_item = async(request, response, next) => {
    const {item_name,item_description,item_brand,item_price,item_availability} = request.body;
    let item;
    try{
        item = new Item({
            item_name,
            item_description,
            item_brand,
            item_price,
            item_availability
        });
        await item.save();
    }
    catch(err) {console.log(err)};
    if(!item){
        return response.status(500).json({message:"Cannot Carry Out This Operation"});
    }
    return response.status(201).json({item});
};

const add_new_info = async(request, response, next) => {
    const id = request.params.id;
    const {item_name,item_description,item_brand,item_price,item_availability} = request.body;
    let item;
    try {
        item = await Item.findByIdAndUpdate(id, {
            item_name,
            item_description,
            item_brand,
            item_price,
            item_availability
        });
        item = await item.save();
    }
    catch (err){
        console.log(err);
    }
    if(!item){
        return response.status(404).json({message:"Cannot Carry Out This Operation"});
    }
    return response.status(200).json({item});
};

const remove_item = async(request, response, next) => {
    const id = request.params.id;
    let item;
    try{
        item = await Item.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!item){
        return response.status(404).json({message:"Cannot Carry Out This Operation"});
    }
    return response.status(200).json({item});
};

exports.retrieve_items = retrieve_items; 
exports.new_item = new_item;
exports.retrieve_ID = retrieve_ID;
exports.add_new_info = add_new_info;
exports.remove_item = remove_item;