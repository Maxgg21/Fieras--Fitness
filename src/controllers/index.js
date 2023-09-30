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
        res.render('detailPlan')
    }
}