import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OnlyNumberDirective} from "./directive/only-number.directive";

import {CountryService} from "./service/country.service";
import {LocaleService} from "./service/locale.service";


@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    
    OnlyNumberDirective,
    
    
    
  ],
  exports: [
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [CountryService, LocaleService]
})
export class InternationalPhoneModule {}
