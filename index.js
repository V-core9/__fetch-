
const https = require('https');


const vReq = (reqCfg) => {
  this.data = (typeof reqCfg.data !== 'undefined') ? reqCfg.data : "";
  this.options = (typeof reqCfg.options !== 'undefined') ? reqCfg.options : "";

  this.req = https.request(this.options, res => {
    this.postReqInfo(res);
    /*res.on('data', d => {
      process.stdout.write(d)
    })*/
  })

  this.postReqInfo = (res) => {
    console.log(`\nHost:  ${res.socket._host}`)
    console.log(`Status Code: ${res.statusCode}`)
    console.log(`Path: ${res.req.path}`)
    console.log(`Method: ${res.req.method}`)
    //console.log(res.req)
    console.log(`Port: ${res.req.agent.defaultPort}`)
    console.log(`keepAliveMsecs: ${res.req.agent.keepAliveMsecs}`)
    console.log(`keepAlive: ${res.req.agent.keepAlive}`)
    //console.log(`maxCachedSessions: ${res.req.agent.maxCachedSessions}`)
  }

  this.req.on('error', error => {
    console.error(error)
  })

  this.req.write(this.data)
  this.req.end()
}



module.exports = vReq;
