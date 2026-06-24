const express = require('express')
const router = express.Router()

module.exports = (mobinime) => {
    router.get('/:animeSlug/:epsSlug', async (req, res) => {
        try {
            const { animeSlug, epsSlug } = req.params
            const animeId = animeSlug.split('-')[0]
            const epsId = epsSlug.split('-')[0]

            const streamUrl = await mobinime.stream(animeId, epsId)
            const detailData = await mobinime.detail(animeId)

            res.render('watch', {
                url: streamUrl,
                anime: detailData,
                currentEps: epsId,
                active: 'home'
            })
        } catch (error) {
            res.render('error', { error: error.message })
        }
    })

    return router
}
