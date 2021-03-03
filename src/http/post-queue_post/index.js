let arc = require('@architect/functions')

exports.handler = async function http (event) {
  let body = arc.http.helpers.bodyParser(event);
  let name = "queue-task-proxy";
  let payload = body;
  await arc.queues.publish({ name, payload });
  return { statusCode: 200, body: "Message Sent" };
};
