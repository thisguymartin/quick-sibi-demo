const arc = require('@architect/functions')

exports.handler = async function queue(req) {
    let name = 'status-mapper'
    let payload = JSON.parse(req.Records[0].body)
    await arc.queues.publish({name, payload})  
    return 
  }
  