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
            planes,
            toThousand
        })
    }
}