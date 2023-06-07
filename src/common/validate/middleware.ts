import { plainToClass } from "class-transformer";
import { Validator as ModelValidator } from "class-validator";
import { HttpStatus } from "common/httpStatus";
import { NextFunction, Request, RequestHandler, Response } from "express";

function parse(errors: any): any {
  if (errors.constraints !== undefined) {
    return { message: Object.values(errors.constraints)[0], status: false, code: HttpStatus.UNPROCESSABLE_ENTITY, data: null };
  }
  if (errors.children !== undefined) {
    return parse(errors.children[0]);
  }
  return new Error("Error object does not contain any constraints or children");
}

function validate(classType: any, groups?: string[]): RequestHandler {
  const validator = new ModelValidator();
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.body);

    const input: any = plainToClass(classType, req.body);
    validator
      .validate(input, {
        groups,
        skipMissingProperties: true,
        validationException: { target: false },
      })
      .then((errors: any): any => {
        console.log(errors);

        if (errors.length > 0) {
          let err = parse(errors[0]);
          console.log(err);
          return next(err);

          //   let err = parse(errors[0]);
          //   console.log(err);

          const res: any = {
            message: "message",
            code: HttpStatus.UNPROCESSABLE_ENTITY,
            status: false,
            data: null,
            error: errors,
          };
          return next(res);
        }
        req.body = input;
        return next();
      });
  };
}

export default validate;
