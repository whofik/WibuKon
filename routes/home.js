const express = require('express')
const router = express.Router()

module.exports = (mobinime) => {
    router.get('/', async (req, res) => {
        try {
            const homeData = await mobinime.fetchHomeData()
            res.render('index', {
                data: homeData,
                active: 'home',
                query: null
            })
        } catch (error) {
            res.render('error', { error: error.message })
        }
    })

    return router
}
