import {ResponseError} from './http_types.js';

function httpHandler(controller) {
  // returns an express request handler that traps all responses and errors
  return async (request, response) => {
    try {
      const res = await controller(request);
      response.status(res.status).send(res.json);
    } catch (e) {
      if (e instanceof ResponseError) {
        // e originates from developer, therefore status and json is defined
        response.status(e.status).send(e.json);
      } else {
        response.status(500).send({error: true, message: e});
      }
    }
  };
}

export {httpHandler};
