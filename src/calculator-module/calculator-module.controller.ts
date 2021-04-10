import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculateParamsDto } from './dto/calculate-params.dto';
import { CalculatorModuleService } from './calculator-module.service';
import { GetCalculationIdDto } from "./dto/get-calculation-id.dto";
import { CalculationEntity } from "./entities/calculation.entity";

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
  async getCalculationId(@Body() params: GetCalculationIdDto): Promise<CalculationEntity> {
    return this.calculatorModuleService.getCalculationResult(params.id);
  }

  @Get('list')
  async getCalculationJobList() {
    return this.calculatorModuleService.getCalculationList();
  }
}
