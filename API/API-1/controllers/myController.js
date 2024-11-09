import fakeProduct from '../models/fakeProduct.js';
import the_product from '../models/the_product.js';

const home = (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    });
}

const getAlldata = async (req, res) => {

    // this is the important concepts of query
    const query = req.query;
    const queryOBJ = {};


    if (query.price) {
        queryOBJ.price = { $regex: query.price, $options: 'i' };
    }
    if (query.rating) {
        queryOBJ.rating = query.rating;
    }
    if (query.rate) {
        queryOBJ['rating.rate'] = query.rate;
    }
    if (query.count) {
        queryOBJ['rating.count'] = query.count;
    }
    if (query.id) {
        queryOBJ.id = query.id;
    }


    const allData = await fakeProduct.find(queryOBJ);
    console.log(queryOBJ);
    res.status(200).json({ allData });
}




const the_productData = async (req, res) => {
    const allData = await the_product.find({ price: 699 });
    res.status(200).json({ allData });
}


export {
    home,
    getAlldata,
    the_productData
};