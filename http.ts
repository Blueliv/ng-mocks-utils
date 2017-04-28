import {
    Response,
    ResponseOptions,
} from "@angular/http";

export function correctResponse(body) {
    return new Response(new ResponseOptions({
        body: body
    }));
}
