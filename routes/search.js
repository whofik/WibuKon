const express = require('express')
const router = express.Router()

module.exports = (mobinime) => {
    router.get('/', async (req, res) => {
        try {
            const query = req.query.q
            if (!query) return res.redirect('/')

            const searchResults = await mobinime.search(query)
            res.render('search', {
                data: searchResults,
                active: 'search',
                query: query
            })
        } catch (error) {
            res.render('search', {
                data: [],
                active: 'search',
                query: req.query.q
            })
        }
    })

    return router
}
