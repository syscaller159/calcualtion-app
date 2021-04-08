import { Module } from '@nestjs/common';
import { CalculatorModuleModule } from './calculator-module/calculator-module.module';

@Module({
  imports: [CalculatorModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
