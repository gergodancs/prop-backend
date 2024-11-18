class Flat {
    id: number;
    userId: number;
    position: string;
    district: string;
    city: string;
    country: string;
    title: string;
    shortDescription: string;
    description: string;
    price: number;
    email: string;
    pictures: string;

    constructor(
        id: number,
        userId: number,
        position: string,
        district: string,
        city: string,
        country: string,
        title: string,
        shortDescription: string,
        description: string,
        price: number,
        email: string,
        pictures: string
    ) {
        this.id = id;
        this.userId = userId;
        this.position = position;
        this.district = district;
        this.city = city;
        this.country = country;
        this.title = title;
        this.shortDescription = shortDescription;
        this.description = description;
        this.price = price;
        this.email = email;
        this.pictures = pictures;
    }
}

export default Flat;