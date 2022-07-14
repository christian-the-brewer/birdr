//IMPORT----------------------------------
const mongoose = require('./connection')

//DEFINITION------------------------------
const { Schema, model } = mongoose

const birdSchema = new Schema(
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
        places: []
    },
    {
        timestamps: true,
    }
)

const Birds = model('Birds', birdSchema)

//EXPORT-------------------------------------------
module.exports = Birds