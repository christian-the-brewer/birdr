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

const Places = model('Places', placeSchema)

//EXPORT-------------------------------------------
module.exports = Places