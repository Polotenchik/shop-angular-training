import {Injectable} from '@angular/core';
import {CoreModule} from '../core.module';

const appInfo: any = {App: 'TaskManager', Ver: '1.0'};

@Injectable({
    providedIn: CoreModule,
    useValue: appInfo,
  })
  export class ConstantsService {
}