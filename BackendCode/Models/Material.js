const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    orderedBy: { type: String, required: true },
    clientName: { type: String, required: true },
    clientAddress: { type: String, required: true },
    phoneNo: { type: String, required: true },
    materials: [
        {
            materialType: String,
            subType: String,
            size: String,
            quantity: Number,
            remark: String,
        },
    ],
});

module.exports = mongoose.model('Material', MaterialSchema);
