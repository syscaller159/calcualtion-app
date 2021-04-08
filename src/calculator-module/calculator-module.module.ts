import { Module } from '@nestjs/common';
import { CalculatorModuleController } from './calculator-module.controller';

@Module({
  controllers: [CalculatorModuleController]
})
export class CalculatorModuleModule {}
