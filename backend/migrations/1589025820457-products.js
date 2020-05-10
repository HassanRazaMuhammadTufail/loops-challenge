
'use strict'

const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://admin:admin@hassanraza-szqrm.mongodb.net/test?retryWrites=true&w=majority"
    , { useNewUrlParser: true, useFindAndModify: false });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  return db.once("open", () => {
    console.log("we are conncted");
    return mongoose;
  });
};


const ProductsSchema = new mongoose.Schema({
  type: { type: String },
  size: { type: String },
  price: { type: Number },
  color: { type: String },
  image: { type: String }
});



module.exports.up = async function () {
  try {
    console.log("we are conncted");
    await connectDB();
    const a = mongoose.model("Products", ProductsSchema);
    a.insertMany([
      { type: "T-Shirt", size: "S", price: 500, color: "Black", image: "https://images-na.ssl-images-amazon.com/images/I/71HOd3bJbnL._AC_UX466_.jpg" },
      { type: "T-Shirt", size: "M", price: 600, color: "White", image: "https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scenes.documents.cimpress.io/v1/scenes/1cce36d1-28e0-4ef5-9df9-6c2c1a756ae9" },
      { type: "T-Shirt", size: "L", price: 700, color: "Blue", image: "https://www.pictureperfectproducts.com.au/wp-content/uploads/2018/10/JADEKTJX_01_636664777004198992.jpg" },
      { type: "T-Shirt", size: "XL", price: 800, color: "Brown", image: "https://images-na.ssl-images-amazon.com/images/I/61WfW1tvLjL._UX385_.jpg" },
      { type: "T-Shirt", size: "XS", price: 400, color: "Yellow", image: "https://i.pinimg.com/originals/e2/d0/3a/e2d03ac00cc52e4a5a7b685f180a90d3.jpg" },
      { type: "T-Shirt", size: "XXL", price: 900, color: "Grey", image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/404137/item/goods_08_404137.jpg?width=380" },
      { type: "T-Shirt", size: "S", price: 500, color: "Black", image: "https://www.wildmoonclothing.com/wp-content/uploads/2019/03/tshirts-black23-600x750.png" },
      { type: "T-Shirt", size: "M", price: 600, color: "White", image: "https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scenes.documents.cimpress.io/v1/scenes/1cce36d1-28e0-4ef5-9df9-6c2c1a756ae9" },
      { type: "T-Shirt", size: "L", price: 700, color: "Blue", image: "https://www.pictureperfectproducts.com.au/wp-content/uploads/2018/10/JADEKTJX_01_636664777004198992.jpg" },
      { type: "T-Shirt", size: "XL", price: 800, color: "Brown", image: "https://images-na.ssl-images-amazon.com/images/I/61WfW1tvLjL._UX385_.jpg" },
      { type: "T-Shirt", size: "XS", price: 400, color: "Yellow", image: "https://i.pinimg.com/originals/e2/d0/3a/e2d03ac00cc52e4a5a7b685f180a90d3.jpg" },
      { type: "T-Shirt", size: "XXL", price: 900, color: "Grey", image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/404137/item/goods_08_404137.jpg?width=380" },
      { type: "T-Shirt", size: "S", price: 500, color: "Black", image: "https://images-na.ssl-images-amazon.com/images/I/71HOd3bJbnL._AC_UX466_.jpg" },
      { type: "T-Shirt", size: "M", price: 600, color: "White", image: "https://vangogh.teespring.com/v3/image/33w2lxKUfZXas4xZR_0eWjcsbSY/480/560.jpg" },
      { type: "T-Shirt", size: "L", price: 700, color: "Blue", image: "https://www.pictureperfectproducts.com.au/wp-content/uploads/2018/10/JADEKTJX_01_636664777004198992.jpg" },
      { type: "T-Shirt", size: "XL", price: 800, color: "Brown", image: "https://images-na.ssl-images-amazon.com/images/I/61WfW1tvLjL._UX385_.jpg" },
      { type: "T-Shirt", size: "XS", price: 400, color: "Yellow", image: "https://i.pinimg.com/originals/e2/d0/3a/e2d03ac00cc52e4a5a7b685f180a90d3.jpg" },
      { type: "T-Shirt", size: "XXL", price: 900, color: "Grey", image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/404137/item/goods_08_404137.jpg?width=380" },
      { type: "T-Shirt", size: "S", price: 500, color: "Black", image: "https://www.wildmoonclothing.com/wp-content/uploads/2019/03/tshirts-black23-600x750.png" },
      { type: "T-Shirt", size: "M", price: 600, color: "White", image: "https://vangogh.teespring.com/v3/image/33w2lxKUfZXas4xZR_0eWjcsbSY/480/560.jpg" },
      { type: "T-Shirt", size: "L", price: 700, color: "Blue", image: "https://www.pictureperfectproducts.com.au/wp-content/uploads/2018/10/JADEKTJX_01_636664777004198992.jpg" },
      { type: "T-Shirt", size: "XL", price: 800, color: "Brown", image: "https://images-na.ssl-images-amazon.com/images/I/61WfW1tvLjL._UX385_.jpg" },
      { type: "T-Shirt", size: "XS", price: 400, color: "Yellow", image: "https://i.pinimg.com/originals/e2/d0/3a/e2d03ac00cc52e4a5a7b685f180a90d3.jpg" },
      { type: "T-Shirt", size: "XXL", price: 900, color: "Grey", image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/404137/item/goods_08_404137.jpg?width=380" },
      { type: "T-Shirt", size: "S", price: 500, color: "Black", image: "https://images-na.ssl-images-amazon.com/images/I/71HOd3bJbnL._AC_UX466_.jpg" },
      { type: "T-Shirt", size: "M", price: 600, color: "White", image: "https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scenes.documents.cimpress.io/v1/scenes/1cce36d1-28e0-4ef5-9df9-6c2c1a756ae9" },
      { type: "T-Shirt", size: "L", price: 700, color: "Blue", image: "https://www.pictureperfectproducts.com.au/wp-content/uploads/2018/10/JADEKTJX_01_636664777004198992.jpg" },
      { type: "T-Shirt", size: "XL", price: 800, color: "Brown", image: "https://images-na.ssl-images-amazon.com/images/I/61WfW1tvLjL._UX385_.jpg" },
      { type: "T-Shirt", size: "XS", price: 400, color: "Yellow", image: "https://i.pinimg.com/originals/e2/d0/3a/e2d03ac00cc52e4a5a7b685f180a90d3.jpg" },
      { type: "T-Shirt", size: "XXL", price: 900, color: "Grey", image: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/404137/item/goods_08_404137.jpg?width=380" },
    ]);
  }
  catch (e) {
    console.log(e)
  }
}

module.exports.down = function (next) {
  next()
}