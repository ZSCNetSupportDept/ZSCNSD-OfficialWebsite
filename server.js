const express = require('express')
const https = require('https')
const fs = require('fs')
const favicon = require('serve-favicon')
const compression = require('compression')
const microcache = require('route-cache')
const path = require('path')
const ssr = require('./utils/ssr')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
!isProd && (process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0) // avoid https reject

const app = express()

const useMicroCache = process.env.MICRO_CACHE !== 'false'
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/images/logo/logo-48.png'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

// set router
const redirectRouter = require('./router/redirect')
const apiRouter = require('./router/api')
const SEORouter = require('./router/SEO')
const annualRouter = require('./router/annual')
const indexRouter = require('./router/index')

app.use(redirectRouter)
app.use('/api', apiRouter)
app.use(SEORouter)
app.use(annualRouter)
app.use(indexRouter)

ssrData = ssr.start(app)
app.get('*', isProd ? ssrData.render : (req, res) => {
  ssrData.readyPromise.then(() => ssrData.render(req, res))
})

const port = process.env.PORT || 9594
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
// const options = {
//   key: fs.readFileSync('./config/2_www.zsxyww.com.key'),
//   cert: fs.readFileSync('./config/1_www.zsxyww.com_bundle.crt')
// }
// https.createServer(options, app)
//      .listen(port, (error) => {
//        if (error) {
//          console.error(error)
//          return process.exit(1)
//        } else {
//          console.log('Listening on port: ' + port + '.')
//        }
//      })
