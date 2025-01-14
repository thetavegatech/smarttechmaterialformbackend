const express = require('express');
const router = express.Router();
const Material = require('../Models/Material');

// Create (POST)
router.post('/', async (req, res) => {
    const { orderedBy, clientName, clientAddress, phoneNo, materials } = req.body;

    const newMaterial = new Material({
        orderedBy,
        clientName,
        clientAddress,
        phoneNo,
        materials,
    });

    try {
        const savedMaterial = await newMaterial.save();
        res.status(201).json(savedMaterial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read All (GET)
router.get('/', async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json(materials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read One (GET by ID)
router.get('/:id', async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json(material);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update (PUT)
router.put('/:id', async (req, res) => {
    const { orderedBy, clientName, clientAddress, phoneNo, materials } = req.body;

    try {
        const updatedMaterial = await Material.findByIdAndUpdate(
            req.params.id,
            { orderedBy, clientName, clientAddress, phoneNo, materials },
            { new: true }
        );

        if (!updatedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }

        res.status(200).json(updatedMaterial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedMaterial = await Material.findByIdAndDelete(req.params.id);

        if (!deletedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }

        res.status(200).json({ message: 'Material deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
