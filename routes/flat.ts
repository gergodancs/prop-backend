import express = require('express');
import {pool} from "../db";
import {authenticateToken} from "../midlewares/auth";
import {parsePictures, upload} from "../midlewares/upload";
import {Property} from "../model/dto";
const FlatService = require('../services/flat-service');
const router = express.Router();


router.post('/rent', authenticateToken, upload.array('pictures', 10), async (req, res) => {
    try {
        const newFlat = await FlatService.saveFlatForRent(req);
        res.json(newFlat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/sale', authenticateToken, upload.array('pictures', 10), async (req, res) => {
    try {
        const newFlat = await FlatService.saveFlatForSale(req);
        res.json(newFlat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/user', authenticateToken, async (req: any, res) => {
    try {
        const flatsForRent = await pool.query(
            'SELECT * FROM flats_for_rent WHERE user_id = $1',
            [req.user.userId]
        );
        const flatsForSale = await pool.query(
            'SELECT * FROM flats_for_sale WHERE user_id = $1',
            [req.user.userId]
        );
        res.json({
            flatsForRent: flatsForRent.rows,
            flatsForSale: flatsForSale.rows
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/for-rent', async (_req, res) => {
    try {
        const flatsForRent = await pool.query('SELECT * FROM flats_for_rent');
        res.json(flatsForRent.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/for-sale', async (_req, res) => {
    try {
        const flatsForSale = await pool.query('SELECT * FROM flats_for_sale');
        res.json(flatsForSale.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/all', async (_req, res) => {
    try {
        const flatsForRent = await pool.query('SELECT * FROM flats_for_rent ORDER by price ASC');
        const flatsForSale = await pool.query('SELECT * FROM flats_for_sale ORDER by price ASC');

        // Transform the data to match the expected structure for the frontend
        const transformFlats = (flats: Array<Property>) => {
            return flats.map(flat => {
                return {
                    ...flat,
                    // Convert position from JSON string to object
                    position: flat.position ? JSON.parse(flat.position) : {lat: 0, lng: 0},

                };
            });
        };

        // Transform the flats for rent and sale
        const transformedFlatsForRent = transformFlats(flatsForRent.rows);
        const transformedFlatsForSale = transformFlats(flatsForSale.rows);

        // Combine both arrays and send the response
        res.json([...transformedFlatsForRent, ...transformedFlatsForSale]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


export = router;
