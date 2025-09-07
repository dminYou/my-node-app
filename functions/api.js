const { handler } = require('../src/index');

exports.handler = async (event, context) => {
  return handler(event, context);
};