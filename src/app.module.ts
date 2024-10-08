import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { WeatherModule } from './openWeather/weather.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), // Configuración global de variables de entorno
  WeatherModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
