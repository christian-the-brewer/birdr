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
        seasons: [],
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

const Bird = model('Bird', birdSchema)

//EXPORT-------------------------------------------
module.exports = Bird