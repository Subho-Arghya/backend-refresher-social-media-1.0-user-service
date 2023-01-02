import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { User } from './submodules/backend-refresher-social-media-1.0-entities/src/entities/user.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cemiidda4991ihlnbisg-a.singapore-postgres.render.com',
      port: 5432,
      username: 'refactor_postgres',
      password: 'kyRs3orbEV6ozM3XlhB6nmTjwKbWRryZ',
      database: 'postgres_w31t',
      entities: [User],
      synchronize: false,
      ssl: true,
      //logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
