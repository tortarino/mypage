exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: {context: JSON.stringify(context), event: JSON.stringify(event))
    });
}
