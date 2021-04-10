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
    const calculationJobId = saved.id;

    this.runCalculation(input, calculationJobId);

    return calculationJobId;
  }

  private async runCalculation(input: CalculateParamsDto, calculationId) {
    const { x, y, operator } = input;
    const xInt = Number(x)
    const yInt = Number(y)
    let result;

    switch (operator) {
      case OperatorEnum.addition:
        result =  xInt + yInt;
        break;
      case OperatorEnum.subtraction:
        result = xInt - yInt;
        break;
      case OperatorEnum.multiplication:
        result = xInt * yInt;
        break;
      case OperatorEnum.division:
        result = xInt / yInt;
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

  getCalculationResult(id: number) {
    return this.calculationJobs[id];
  }
}
