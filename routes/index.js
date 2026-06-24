const homeRoute = require('./home')
const scheduleRoute = require('./schedule')
const searchRoute = require('./search')
const aboutRoute = require('./about')
const animeRoute = require('./anime')
const watchRoute = require('./watch')

module.exports = (app, mobinime) => {
    app.use('/', homeRoute(mobinime))
    app.use('/schedule', scheduleRoute(mobinime))
    app.use('/search', searchRoute(mobinime))
    app.use('/about', aboutRoute())
    app.use('/anime', animeRoute(mobinime))
    app.use('/watch', watchRoute(mobinime))

    app.use((req, res) => {
        res.status(404).render('404', { active: '' })
    })
}
