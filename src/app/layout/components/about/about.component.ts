import {Component, OnInit, Optional} from '@angular/core';

import {LocalStorageService} from '../../../core/services/local-storage.service';
import {ConfigOptionsService} from '../../../core/services/config-options.service';
import {ConstantsService} from '../../../core/services/constant.service';
import {GeneratorService} from '../../../core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
  ) {
  }

  ngOnInit() {
    this.localStorageService.setItem('test', 'test value');
    console.log(this.localStorageService.getItem('test'));
    this.localStorageService.removeItem('test');

    this.configOptionsService.setLogin('john123');
    console.log(this.configOptionsService.getConfig());

    console.log(this.constantsService);
    console.log(this.generatorService);
  }

}
