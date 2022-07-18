//IMPORT----------------------------------
const mongoose = require('./connection')

//DEFINITION------------------------------
const { Schema, model } = mongoose

const placeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: String,
        address: {
            number: Number,
            streetName: String,
            streetType: String,
            city: String,
            state: String,
            zip: Number
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        birds: []
    },
    {
        timestamps: true,
    }
)

const Place = model('Place', placeSchema)

//EXPORT-------------------------------------------
module.exports = Place