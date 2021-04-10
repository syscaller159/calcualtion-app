import { IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetCalculationIdDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsInt()
    id: number
}