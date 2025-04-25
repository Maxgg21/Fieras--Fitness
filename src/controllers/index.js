const {planes} = require("../database")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {
        res.render('index', {
            planes,
            toThousand
        })
    },
    detailPlan: (req, res) => {
        try {
            const plan = planes.find(plan => plan.id === +req.params.id);
            return res.render('detailPlan', {
               planes,
               plan,
               toThousand
            })
        } catch (error) {
            console.log(error)            
        }
    },
    sobreMi: (req, res) => {
        res.render('sobreMi', {
            title: "Sobre mí",
            name: "Joaquín",
            lastName: "González",
            age: 24,
            hobbies: ["Futbol", "Programación", "Música"],
            aboutMe: "Soy un apasionado de la programación y el desarrollo web. Me encanta aprender cosas nuevas y enfrentar desafíos.",
            toThousand
        })
    }
}