import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import {CalculateParamsDto} from './dto/calculate-params.dto';
import {CalculatorModuleService} from './calculator-module.service';
import {GetCalculationIdDto} from "./dto/get-calculation-id.dto";
import {CalculationResponse} from "../libs/interfaces/calculation-response.interface";

@Controller('calculator')
export class CalculatorModuleController {
  private logger = new Logger(CalculatorModuleController.name)

  constructor(
    private readonly calculatorModuleService: CalculatorModuleService,
  ) {}

  @Post()
  async calculate(@Body() params: CalculateParamsDto): Promise<CalculationResponse> {
    try {
      const calculationId = await this.calculatorModuleService.createCalculationProcess(params);

      const data = {
        calculationId
      }

      return new CalculationResponse(data)
    } catch (e) {
      this.logger.error(e);

      const status = {
        error: true,
        message: e.message,
      }

      return new CalculationResponse(null, status)
    }
  }

  @Get()
  async getCalculationId(@Body() params: GetCalculationIdDto): Promise<CalculationResponse> {
    try {
      const calculationResult = await this.calculatorModuleService.getCalculationResult(params.id);

      const data = {
        id: params.id,
        calculationResult
      }

      return new CalculationResponse(data);
    } catch (e) {
      this.logger.error(e);

      const status = {
        error: true,
        message: e.message,
      }

      return new CalculationResponse(null, status);
    }
  }

  @Get('list')
  async getCalculationList(): Promise<CalculationResponse> {
    try {
      const calculations = await this.calculatorModuleService.getCalculationList();

      const data = {
        calculations
      }

      return new CalculationResponse(data);
    } catch (e) {
      this.logger.error(e);

      const status = {
        error: true,
        message: e.message,
      }

      return new CalculationResponse(null, status)
    }
  }
}
