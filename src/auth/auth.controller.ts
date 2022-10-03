import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiProduces,
  ApiProperty,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnsupportedMediaTypeResponse,
} from '@nestjs/swagger';
import { ExceptionUnauthorized } from '../models/api-exception.dto';
import { IsUUID } from 'class-validator';

class LoginRequest {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

class LoginResponse {
  @ApiProperty()
  token: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  userId: string;
}

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  @Post('/login')
  @ApiOkResponse({
    type: LoginResponse,
    description: 'Login success',
  })
  @ApiUnsupportedMediaTypeResponse()
  @ApiUnauthorizedResponse({
    type: ExceptionUnauthorized,
    description: 'Unauthorized',
  })
  login(@Body() body: LoginRequest): LoginResponse {
    return new LoginResponse();
  }
}
