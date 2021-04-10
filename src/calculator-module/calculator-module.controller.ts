import {Body, Controller, Get, Logger, Post, Query} from '@nestjs/common';
import {CalculateParamsDto} from './dto/calculate-params.dto';
import {CalculatorModuleService} from './calculator-module.service';
import {GetCalculationIdDto} from "./dto/get-calculation-id.dto";
import {CalculationResponse} from "../libs/interfaces/calculation-response.interface";
import {ApiCreatedResponse, ApiTags} from "@nestjs/swagger";

@ApiTags(`calculation`)
@Controller('calculation')
export class CalculatorModuleController {
  private logger = new Logger(CalculatorModuleController.name)

  constructor(
    private readonly calculatorModuleService: CalculatorModuleService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Create and run calculation process',
    type: CalculationResponse,
  })
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
  @ApiCreatedResponse({
    description: 'Gate calculation result',
    type: CalculationResponse,
  })
  async getCalculationId(@Query() params: GetCalculationIdDto): Promise<CalculationResponse> {
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
  @ApiCreatedResponse({
    description: 'Gate calculations list with full info',
    type: CalculationResponse,
  })
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
