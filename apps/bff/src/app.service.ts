import { Injectable } from '@nestjs/common'

export interface HelloWorld {
    message: string
}
@Injectable()
export class AppService {
    getHello(): HelloWorld {
        return { message: 'Hello World!' }
    }
}
