import { Injectable } from '@nestjs/common';

const { KUBERNETES_NAMESPACE } = process.env;

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World in ${KUBERNETES_NAMESPACE}!!!`;
  }
}
