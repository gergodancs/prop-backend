import {Position, Property} from "../model/dto";
import {parsePictures} from "../midlewares/upload";
import {pool} from "../db";
import {FlatForRentRepository} from "../repository/flat-for-rent-repository"

export class FlatService {

    private flatForRentRepository = new FlatForRentRepository();

    public async saveNewFlatForRent(req: any): Promise<Property> {
        const pictures = JSON.stringify(parsePictures(req.files));
        const newFlat = await this.flatForRentRepository.saveNewFlatForRent(req, pictures);
        return newFlat.rows[0];
    }

    public async saveFlatForSale(req: any):Promise<Property> {
        const pictures = JSON.stringify(parsePictures(req.files));
        const result = await this.flatForRentRepository.saveFlatForSale(req, pictures);
        return result.rows[0];
        }

}