import {Injectable} from '@angular/core';
import {CoreModule} from '../core.module';

function GenerateNFactory(n: number = 1) {
  return (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    return Array(n)
      .fill(null)
      .map(() => chars[Math.floor(Math.random() * charsLength)])
      .join('');
  };
}

@Injectable({
    providedIn: CoreModule,
    useFactory: GenerateNFactory(5)
})
export class GeneratorService {
}