import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from '@/infra/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { EnvService } from './env/env.service'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ],
  providers: [EnvService],
})
export class AppModule {}
