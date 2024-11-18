import {pool} from "../db";

export class FlatForRentRepository {

   async saveNewFlatForRent(req, pictures){
       const res = await pool.query(
                    'INSERT INTO flats_for_rent (user_id, position, district, city, country, title, short_description, description, price, email, pictures) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
                    [
                        req.user.userId,
                        req.body.position,
                        req.body.district,
                        req.body.city,
                        req.body.country,
                        req.body.title,
                        req.body.shortDescription,
                        req.body.description,
                        req.body.price,
                        req.body.email,
                        pictures
                    ]
                );
            return res;
        }

   async saveFlatForSale(req,pictures){
       const res = await pool.query(
           'INSERT INTO flats_for_sale (user_id, position, district, city, country, title, short_description, description, price, email, pictures) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [
                req.user.userId,
                req.body.position,
                req.body.district,
                req.body.city,
                req.body.country,
                req.body.title,
                req.body.shortDescription,
                req.body.description,
                req.body.price,
                req.body.email,
                pictures
            ]
        );
            return res;
       }

    }