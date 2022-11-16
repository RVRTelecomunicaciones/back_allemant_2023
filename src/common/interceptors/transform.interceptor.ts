import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ResponseMessageKey } from '@app/decorators/response.decorator';

export interface IResponse<T> {
    message?: string;
    data: T;
}

export interface ApiResponse<T> extends IResponse<T> {
    statusCode: number;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    constructor(private reflector: Reflector) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
        const responseMessage = this.reflector.get<string>(ResponseMessageKey, context.getHandler()) ?? '';
        return next.handle().pipe(
            map((data) => ({
                statusCode: context.switchToHttp().getResponse().statusCode,
                message: responseMessage,
                data: data,
            }))
        );
    }
}

export const TransformInterceptorProvider = {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
};
