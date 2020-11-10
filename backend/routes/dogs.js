const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');


const Dog = require('../models/Dog');

router.get('/', async(req, res) => {
    const dogs = await Dog.find();
    res.json(dogs);
});

router.post('/', async(req, res) => {
    const { name, breed } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newDogs = new Dog({ name, breed, imagePath });
    await newDogs.save()
    res.json({ message: 'Dog save' });

});

router.delete('/:id', async(req, res) => {
    const dog = await Dog.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public' + dog.imagePath))
    res.json({ message: 'Dog deleted' })
})



module.exports = router;