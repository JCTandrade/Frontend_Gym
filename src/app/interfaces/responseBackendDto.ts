import { HttpStatusCode } from "@angular/common/http";

export interface ResponseBackend {
    mensaje: any ,
    isError:  boolean ,
    status: HttpStatusCode 
}
