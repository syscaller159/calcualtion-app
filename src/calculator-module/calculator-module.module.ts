import { Module } from '@nestjs/common';
import { CalculatorModuleController } from './calculator-module.controller';
import { CalculatorModuleService } from './calculator-module.service';

@Module({
  controllers: [CalculatorModuleController],
  providers: [CalculatorModuleService]
})
export class CalculatorModuleModule {}
