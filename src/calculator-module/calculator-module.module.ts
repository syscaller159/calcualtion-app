import { Module } from '@nestjs/common';
import { CalculatorModuleController } from './calculator-module.controller';
import { CalculatorModuleService } from './calculator-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationEntity } from './entities/calculation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalculationEntity]),
  ],
  controllers: [CalculatorModuleController],
  providers: [CalculatorModuleService]
})
export class CalculatorModuleModule {}
