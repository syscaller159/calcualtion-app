import { IsNotEmpty, MinLength, MaxLength, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum OperatorEnum {
  addition = '+',
  subtraction = '-',
  multiplication = '*',
  division = '/',
}

export class CalculateParamsDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  x: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  y: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1)
  @IsEnum(OperatorEnum)
  operator: OperatorEnum;
}