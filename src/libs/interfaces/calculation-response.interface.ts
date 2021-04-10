const DEFAULT_STATUS = {
    error: false,
    message: null,
}

export interface StatusResponse {
    error: boolean,
    message?: string,
}

export class CalculationResponse {
    status: StatusResponse;

    data: any;

    constructor(data, status: StatusResponse = DEFAULT_STATUS) {
        this.status = status;
        this.data = data;
    }
}