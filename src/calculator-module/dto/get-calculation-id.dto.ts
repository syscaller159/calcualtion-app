import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class GetCalculationIdDto {
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    id: number
}