import { HttpStatus } from "common/httpStatus";

class HttpException extends Error {
  message!: string;
  errors!: {};
  status!: number;
  constructor(status?: HttpStatus, message?: string, errors?: {}) {
    super();
    this.status = status || 500;
    this.message = message || "";
    this.errors = errors || {};
  }
}
export default HttpException;
