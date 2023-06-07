
export const middleware = function (err: any, req: any, res: any, next: (error?: any) => any): void {
  let error = err;

  if (error === undefined) {
    return next();
  }
  if (error.code && error.message ) {
    return res.status(error.code).json(error);
  }

  if (error.statusCode !== undefined && error.message !== undefined) {
    error = new Error(error.statusCode, error.message);
  }

  if (error.httpCode !== undefined && error.name === "ParamRequiredError") {
    error = new Error("Invalid parameters provided");
  }

  if (error.errors !== undefined && Object.keys(error.errors).length) {
    res.status(error.status).send({ errors: { messages: error.errors } });
  } else {
    res.send(error);
    //   res.status(error.status ? error.status : HttpStatus
    //   .INTERNAL_SERVER_ERROR).send({ errors: { messages: [error.message] } });
  }
};
