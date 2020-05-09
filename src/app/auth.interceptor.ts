import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.authService.getAccessToken();
        console.log("jwt: ",accessToken);
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTkwODI0ZTc4ZTFmNjVjM2M2ZmU1YWEiLCJpYXQiOjE1ODY1MzE5OTV9.i9e0EO9VK9MoRcV5thIPDYLgEtRNaYw_Zd71cdVexN4`
            }
        });
        return next.handle(req);
    }
}
