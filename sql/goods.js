const db = require("./db");

const goodsSchema = new db.mongoose.Schema({
    "id":{type:String},
    "name":{type:String},
    "price":{type:String},
    "sales":{type:String},
    "image":{type:String}
})

module.exports = db.mongoose.model("goods", goodsSchema);
