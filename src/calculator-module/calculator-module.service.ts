import { Injectable } from '@nestjs/common';
import { CalculateParamsDto, OperatorEnum } from './dto/calculate-params.dto';
import { CalculationEntity, CalculationStatus } from './entities/calculation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CalculatorModuleService {
  private calculationJobs = {};

  constructor(
    @InjectRepository(CalculationEntity)
    private calculationRepository: Repository<CalculationEntity>,
  ) {}

  async createCalculationProcess(input: CalculateParamsDto) {
    const calculation = new CalculationEntity();
    const saved = await this.calculationRepository.save(calculation);
    const calculationId = saved.id;

    this.runCalculation(input, calculationId);

    return calculationId;
  }

  private async runCalculation(input: CalculateParamsDto, calculationId) {
    const { x, y, operator } = input;
    let result;

    switch (operator) {
      case OperatorEnum.addition:
        result =  x + y;
        break;
      case OperatorEnum.subtraction:
        result = x - y;
        break;
      case OperatorEnum.multiplication:
        result = x * y;
        break;
      case OperatorEnum.division:
        result = x / y;
        break;
      default:
        throw new Error('error: unknown operator');
    }

    let status;

    if (isNaN(result) || !isFinite(result)) {
      status = CalculationStatus.cancel;
    } else {
      status = CalculationStatus.done;
    }

    this.calculationJobs[calculationId] = { result };
    this.calculationRepository.update({
        id: calculationId,
      },
      {
        status,
        result
      });
  }

  async getCalculationList(): Promise<CalculationEntity[]> {
    return this.calculationRepository.find();
  }

  async getCalculationResult(id: number): Promise<string> {
    const calculation = await this.calculationRepository.findOneOrFail({ id });
    return calculation.result
  }
}
