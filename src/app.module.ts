import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';

@Module({
  // imports: [UserModule],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
