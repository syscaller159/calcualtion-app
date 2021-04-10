import { Module } from '@nestjs/common';
import { CalculatorModuleModule } from './calculator-module/calculator-module.module';
import { dbConfiguration } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfiguration),
    CalculatorModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
