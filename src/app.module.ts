import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account-controller'
import { envSchema } from 'env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [AppController, CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
