class DogService {
    constructor() {
        this.URI = 'http://localhost:3000/api/dogs';
    }

    async getDogs() {
        const res = await fetch(this.URI);
        const dogs = await res.json();
        return dogs;
    }
    async postDogs(dog) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: dog
        });
        const data = await res.json();
        return data;
    }
    async deleteDog(dogId) {
        const res = await fetch(`${this.URI}/${dogId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',

        });

        const dog = await res.json();
        return dog;
    }
}

export default DogService;