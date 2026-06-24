const express = require('express')
const router = express.Router()

module.exports = (mobinime) => {
    router.get('/:slug', async (req, res) => {
        try {
            const id = req.params.slug.split('-')[0]
            const detailData = await mobinime.detail(id)
            res.render('detail', { anime: detailData, active: 'home' })
        } catch (error) {
            res.render('error', { error: error.message })
        }
    })

    return router
}
