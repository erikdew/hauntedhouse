let creatures = [
    {
        name: "Halloween Cat",
        image_url: "https://www.animalsheltering.org/sites/default/files/images/magazine/black-cat-pumpkins-bays-blog-m146689.jpg",
        scary: {
            level: 1
        },
        id: 0
    },
    {
        name: "Ghost",
        image_url: "http://konknet.com/-/wp-content/uploads/2017/08/a-ghost-story-thymb.jpg",
        scary: {
            level: 7
        },
        id: 1
    }
]
let id = 2;



module.exports = {

    read: (req, res) => {
        console.log('hitting controller')
        res.status(200).send(creatures)
    },

    create: (req, res) => {
        console.log('req.body', req.body)
        let { name, image_url, scary } = req.body;
        let newCreature = {
            name,
            image_url,
            scary
        }
        creatures.push(newCreature);
        id++
        res.status(200).send(creatures);

    }


}

