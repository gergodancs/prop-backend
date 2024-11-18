import {pool} from "../db";
import Flat from '../model/flat';

const saveFlatForRentRepo = async (flat: Flat) => {
    const res = await pool.query(
        'INSERT INTO flats_for_rent (user_id, position, district, city, country, title, short_description, description, price, email, pictures) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [
            flat.userId,
            flat.position,
            flat.district,
            flat.city,
            flat.country,
            flat.title,
            flat.shortDescription,
            flat.description,
            flat.price,
            flat.email,
            flat.pictures
        ]
    );
    return res.rows[0];
};

const saveFlatForSaleRepo = async (flat: Flat) => {
    const res = await pool.query(
        'INSERT INTO flats_for_sale (user_id, position, district, city, country, title, short_description, description, price, email, pictures) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [
            flat.userId,
            flat.position,
            flat.district,
            flat.city,
            flat.country,
            flat.title,
            flat.shortDescription,
            flat.description,
            flat.price,
            flat.email,
            flat.pictures
        ]
    );
    return res.rows[0];
};

module.exports = {
    saveFlatForRentRepo,
    saveFlatForSaleRepo
};