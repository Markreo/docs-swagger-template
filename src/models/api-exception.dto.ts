import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ExceptionBadRequest {
  @ApiModelProperty({ default: 400 })
  status: number;

  @ApiProperty({ default: 'Bad Request' })
  message: string;
}

export class ExceptionUnauthorized {
  @ApiModelProperty({ default: 401 })
  status: number;

  @ApiProperty({ default: 'Unauthorized' })
  message: string;
}

export class ExceptionForbidden {
  @ApiModelProperty({ default: 403 })
  status: number;

  @ApiProperty({ default: 'Forbidden' })
  message: string;
}

export class ExceptionNotFound {
  @ApiModelProperty({ default: 404 })
  status: number;

  @ApiProperty({ default: 'Not Found' })
  message: string;
}

export class ExceptionServerError {
  @ApiModelProperty({ default: 500 })
  status: number;

  @ApiProperty({ default: 'Internal Server Error' })
  message: string;
}
