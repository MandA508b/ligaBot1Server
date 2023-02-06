const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const adminRouter = require('./admin.router')
const teamsRouter = require('./team.router')
const leagueRouter = require('./league.router')
const cityRouter = require('./city.router')
const channelRouter = require('./channel.router')
const advertisementRouter = require('./advertisement.router')
router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/teams', teamsRouter)
router.use('/leagues', leagueRouter)
router.use('/city',cityRouter)
router.use('/advertisement',advertisementRouter)
router.use('/channel',channelRouter)
module.exports = router