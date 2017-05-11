import {
    Response,
    ResponseOptions,
    ResponseType
} from "@angular/http";


class MockError extends Response implements Error {
    name:any
    message:any
}

export function errorResponse(status:number, body){
    let opts = {type:ResponseType.Error, status:status, body: body};
    let responseOpts = new ResponseOptions(opts);
    return new MockError(responseOpts)
}

export function genericResponse(status, body){
    return new Response(new ResponseOptions({
        status: status,
        body: body
    }));
}

export function correctResponse(body) {
    return new Response(new ResponseOptions({
        body: body
    }));
}
