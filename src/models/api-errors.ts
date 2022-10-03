import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ExceptionBadRequest,
  ExceptionForbidden,
  ExceptionNotFound,
  ExceptionServerError,
  ExceptionUnauthorized,
} from './api-exception.dto';

export function ApiErrorsGET() {
  return applyDecorators(
    ApiBadRequestResponse({
      type: ExceptionBadRequest,
      description: 'Bad Request',
    }),
    ApiNotFoundResponse({ type: ExceptionNotFound, description: 'Not Found' }),
    ApiInternalServerErrorResponse({
      type: ExceptionServerError,
      description: 'Internal Server Error',
    }),
    ApiUnauthorizedResponse({
      type: ExceptionUnauthorized,
      description: 'Unauthorized',
    }),
    ApiForbiddenResponse({
      type: ExceptionForbidden,
      description: 'Forbidden',
    }),
  );
}
