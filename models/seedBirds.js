//RUNS WITH `npm run seedBirds`

//IMPORT----------------------------------
const mongoose = require('./connection')
const Bird = require('./bird')
const Place = require('.place')

const db = mongoose.connection

//fill with birds
db.on('open', () => {
    // array of birbs
    const startBirds = [
        {
            name: 'House Sparrow',
            description: "An introduced non-migratory species. Males have gray and brown headswith white cheeks and a black bib, with grey bellies and black and brown backs. Females lack the bib and are browner all over.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/02/House-sparrow-edited.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Turkey Vulture',
            description: "With an appearance somewhat wimilar to a turkey, the Turkey Vulture has a bald red head with a brown-ish-black body and light colored bill. While flying their wings are slightly raised and form a V shape.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/06/Turkey-Vulture-edited.jpg",
            seasons: ['spring', 'summer', 'fall'],
            places: []


        },
        {
            name: 'Black-capped Chickadee',
            description: "Distinctive large head and tiny body. Aptly named, with a black cap, beak, and throat, with white throat and cheeks. They have gray backs, wings, and tails and a light tan belly. ",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/Black-capped-chickadee-768x511.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Carolina Wren',
            description: "With small heads relative to their very round bodies, the wren resembles and beaked ball. It has brown head, back and wings, with a lighter tan belly. Noticeable white eyebrows.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/Carolina-Wren-1024x683.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Snowy Owl',
            description: "Distinctive flecks of brown and black across a white plumage with yellows make these a very streiking bird. Not common in Massachusetts as it is the southern limits of their range.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2020/12/Snowy-owl-768x548.jpg",
            seasons: ['winter'],
            places: []


        },
        {
            name: 'Red-tailed Hawk',
            description: "With a short and wide red tail and brown backs and light bellies, they can often be seen circling on high, searching for prey",
            img: "https://www.birdadvisors.com/wp-content/uploads/2020/12/Depositphotos_red-tailed-hawk-1-768x560.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Red-headed Woodpecker',
            description: "Bright red heads make this wookpecker quite distinctive. They have white bellies and black wings and back",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/02/red-headed-woodpecker-3-768x512.jpg",
            seasons: ['spring', 'summer', 'fall',],
            places: []


        },
        {
            name: 'American Robin',
            description: "black heads, backs, and wings with a reddish belly are charactreristic of this common backyard bird.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2021/01/American-robin-1024x683.jpg",
            seasons: ['spring', 'summer', 'fall',],
            places: []


        },
        {
            name: 'Blue Jay',
            description: "Bright blue crests with blue wings, light bellies and black backs, these vocal songbirds are always on the search for the next meal.",
            img: "https://www.birdadvisors.com/wp-content/uploads/2022/01/Blue-Jay-2-edited.jpg",
            seasons: ['spring', 'summer', 'fall', 'winter'],
            places: []


        },
        {
            name: 'Marina the Timneh African Grey',
            description: "Bright red heads make this wookpecker quite distinctive. They have white bellies and black wings and back",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs-images.forbes.com%2Fgrrlscientist%2Ffiles%2F2016%2F10%2FAfrican-grey-parrot-1024x682.jpg&f=1&nofb=1",
            seasons: ['spring', 'summer', 'fall',],
            places: []


        },

    ]

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

    Bird.remove({})

        .then(deletedBirds => {
            console.log('this is what remove returns', deletedBirds)


            Bird.create(startBirds)
                .then(data => {
                    console.log('the new birds', data)
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


