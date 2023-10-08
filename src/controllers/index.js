const {planes, videosPlanes} = require("../database")
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
            const videoPlan = videosPlanes.find(video => video.id === plan.id) 
            return res.render('detailPlan',{
               plan,
               videoPlan,
               toThousand
            })
        } catch (error) {
            console.log(error)            
        }
    }
}