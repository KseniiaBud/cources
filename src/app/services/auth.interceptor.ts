import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('/users')) {
            return next.handle(req);
        }

        let token = localStorage.getItem('auth_token');
        let tokenReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        return next.handle(tokenReq);
    }
}