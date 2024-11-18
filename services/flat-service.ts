const { parsePictures } = require('../midlewares/upload');
const FlatRepository = require('../repositories/flat-repository');
import Flat from '../model/flat';

const saveFlatForRent = async (req) => {
    const pictures = JSON.stringify(parsePictures(req.files));
    const newFlat = new Flat(
        null,
        req.user.userId,
       JSON.stringify(req.body.position),
        req.body.district,
        req.body.city,
        req.body.country,
        req.body.title,
        req.body.shortDescription,
        req.body.description,
        req.body.price,
        req.body.email,
        pictures
    );
    return await FlatRepository.saveFlatForRentRepo(newFlat);
};

const saveFlatForSale = async (req) => {
    const pictures = JSON.stringify(parsePictures(req.files));
    const newFlat = new Flat(
        null,
        req.user.userId,
        JSON.stringify(req.body.position),
        req.body.district,
        req.body.city,
        req.body.country,
        req.body.title,
        req.body.shortDescription,
        req.body.description,
        req.body.price,
        req.body.email,
        pictures
    );
    return await FlatRepository.saveFlatForSaleRepo(newFlat);
};

module.exports = {
    saveFlatForRent,
    saveFlatForSale
};