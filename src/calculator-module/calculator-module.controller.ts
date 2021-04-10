import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { CalculateParamsDto } from './dto/calculate-params.dto';
import { CalculatorModuleService } from './calculator-module.service';

@Controller('calculator')
export class CalculatorModuleController {

  constructor(
    private readonly calculatorModuleService: CalculatorModuleService,
  ) {}

  @Post()
  async calculate(@Body() params: CalculateParamsDto): Promise<number> {
    return this.calculatorModuleService.createCalculationProcess(params);
  }

  @Get()
  async getCalculationJobId(@Query() params): Promise<number> {
    return this.calculatorModuleService.getCalculationResult(params.id);
  }

  @Get('list')
  getCalculationJobList() {
    return this.calculatorModuleService.getCalculationList();
  }
}
