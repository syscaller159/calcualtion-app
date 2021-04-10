import { IsNotEmpty, IsNumber, IsEnum, } from 'class-validator';
import { Type } from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export enum OperatorEnum {
  addition = '+',
  subtraction = '-',
  multiplication = '*',
  division = '/',
}

export class CalculateParamsDto {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  x: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  y: number;

  @ApiProperty({
    default: '+'
  })
  @IsEnum(OperatorEnum)
  operator: OperatorEnum;
}