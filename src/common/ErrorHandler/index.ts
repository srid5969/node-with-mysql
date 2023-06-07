import HttpException from "./exception";

declare class BadRequestException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class UnauthorizedException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class ForbiddenException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class NotFoundException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class NotAcceptableException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class ConflictException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class ValidationException extends HttpException {
    constructor(message?: string, errors?: {});
}
declare class InternalServerException extends HttpException {
    constructor(message?: string, errors?: {});
}
export { BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, NotAcceptableException, ConflictException, ValidationException, InternalServerException, };
