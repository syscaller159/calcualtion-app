import {ApiProperty} from "@nestjs/swagger";

const DEFAULT_STATUS = {
    error: false,
    message: null,
}

export class StatusResponse {
    @ApiProperty()
    error: boolean;

    @ApiProperty()
    message?: string;
}

export class CalculationResponse {
    @ApiProperty()
    status: StatusResponse;

    @ApiProperty()
    data: any;

    constructor(data, status: StatusResponse = DEFAULT_STATUS) {
        this.status = status;
        this.data = data;
    }
}