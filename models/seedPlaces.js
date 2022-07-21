//RUNS WITH `npm run seedPlaces`

//IMPORT----------------------------------
const mongoose = require('./connection')
const Bird = require('./bird')
const Place = require('./place')

const db = mongoose.connection

//fill with places
db.on('open', () => {
    const startPlaces = [
        {
            name: 'Cambridge Common',
            description: 'The big park in Harvard Square',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rnmBMsA4nGHPQwFZaUPcvgEsCY%26pid%3DApi&f=1',
            address: {
                number: '5',
                streetName: 'Garden',
                streetType: 'Street',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Harvard Square',
            description: 'The square that is becoming very corporate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5WRErBfXT4i2SaQjszrBkwHaEt%26pid%3DApi&f=1',
            address: {
                number: '1',
                streetName: 'Brattle',
                streetType: 'Street',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Micro Center',
            description: 'The computer store on the river. A surprising amount of birds here',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ajE1ibkvVNwHu2dcxXdQDQHaD-%26pid%3DApi&f=1',
            address: {
                number: '730',
                streetName: 'Memorial',
                streetType: 'Drive',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02138'
            },
            birds: []

        },
        {
            name: 'Middlesex Fells',
            description: 'Densley wooded area home to a lot of wildlife. Bring bug spray',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2_wjcyuYYNxH9TLFqthcnwHaFj%26pid%3DApi&f=1',
            address: {
                number: '464',
                streetName: 'S Border',
                streetType: 'Road',
                city: 'Winchester',
                state: 'Ma',
                zip: '01890'
            },
            birds: []

        },
        {
            name: 'Fruitlands Museum',
            description: 'A museum based on the former site of the Alcott/s failed utopia, Fruitlands.',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sS23lxxq77tvT45ntUg7KwHaDm%26pid%3DApi&f=1',
            address: {
                number: '102',
                streetName: 'Prospect',
                streetType: 'Rd',
                city: 'Harvard',
                state: 'Ma',
                zip: '01451'
            },
            birds: []

        },
        {
            name: 'MIT',
            description: 'Another university with a sprawling campus buying up all the real estate',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.urLJnqbc2BwJDacMvo5LzwHaDt%26pid%3DApi&f=1',
            address: {
                number: '77',
                streetName: 'massachusetts',
                streetType: 'ave',
                city: 'Cambridge',
                state: 'Ma',
                zip: '02139'
            },
            birds: []

        },
        {
            name: 'The Museum of Fine Arts',
            description: 'The MFA!',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1kb_1_FmQKY7RhXQ6eh9mAHaEi%26pid%3DApi&f=1',
            address: {
                number: '465',
                streetName: 'Huntington',
                streetType: 'Ave',
                city: 'Boston',
                state: 'Ma',
                zip: '02115'
            },
            birds: []

        },
        {
            name: 'The Isabella Stewart Gardner',
            description: 'A really nice small museum with great architecture and pieces',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Uzh-s3vFDAP4yKx886FtJQHaFj%26pid%3DApi&f=1',
            address: {
                number: '25',
                streetName: 'Evans',
                streetType: 'Way',
                city: 'Boston',
                state: 'Ma',
                zip: '02115'
            },
            birds: []

        },
        {
            name: 'New England Aquarium',
            description: 'The aquarium.',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rQ6uB4xTeCnptz8t23cGgAHaE8%26pid%3DApi&f=1',
            address: {
                number: '1',
                streetName: 'Central',
                streetType: 'Wharf',
                city: 'Boston',
                state: 'Ma',
                zip: '02110'
            },
            birds: []

        },
        {
            name: 'Stone Zoo',
            description: 'The computer store on the river. A surprising amount of birds here',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KAQXjSAqBBBXq5fBTL8gNQHaEY%26pid%3DApi&f=1',
            address: {
                number: '149',
                streetName: 'Pond',
                streetType: 'street',
                city: 'Stoneham',
                state: 'Ma',
                zip: '02180'
            },
            birds: []

        },
    ]

    Place.remove({})

        .then(deletedPlaces => {
            console.log('this is what remove returns', deletedPlaces)


            Place.create(startPlaces)
                .then(data => {
                    console.log('the new places', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })

})

