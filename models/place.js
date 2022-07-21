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
            number: String,
            streetName: String,
            streetType: String,
            city: String,
            state: String,
            zip: String
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