//RUNS WITH `npm run seed`

//IMPORT----------------------------------
const mongoose = require('./connection')
const Bird = require('./bird')

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