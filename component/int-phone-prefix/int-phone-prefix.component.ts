import {Component, ElementRef, forwardRef, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Country} from '../../interface/country.interface';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CountryCode} from '../../interface/country-code.interface';
import {CountryService} from '../../service/country.service';
import {LocaleService} from '../../service/locale.service';
import * as _ from 'lodash';
import { FormatPipe } from '../../../../pipes/format.pipe';


const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IntPhonePrefixComponent),
    multi: true
};

const PLUS = '+';

@Component({
    moduleId: module.id,
    selector: 'int-phone-prefix',
    templateUrl: './int-phone-prefix.component.html',
    styleUrls: [
        './int-phone-prefix.component.scss',
        '../../assets/flags/flags.min.css'
    ],
    host: {
        '(document:click)': 'hideDropdown($event)',
    },
    providers: [COUNTER_CONTROL_ACCESSOR, CountryService, LocaleService]
})
export class IntPhonePrefixComponent implements OnInit, ControlValueAccessor {
    @Input()
    locale: string = "";

     @Input()
    index: any;
    
    @Input()
    defaultCountry:any;

    @Input()
    maxLength = 15;

    @Input()
    onlyNumbers = true;

    @Input() errorShow:any;
    // ELEMENT REF
    phoneComponent: ElementRef;

    @Input()
    placeholder: any

    @Output() updateDialCode:any = new EventEmitter<object>();
    @Output() onPressInputBox:any = new EventEmitter<object>();
    @Output() onBlurInputBox:any = new EventEmitter<object>();
    
    phoneInput:any;

    // CONTROL VALUE ACCESSOR FUNCTIONS
    onTouch: Function | any;
    onModelChange: Function | any;

    countries: Country[] | any;
    locales: CountryCode | any;
    phoneFilter: any = '';
    selectedCountry: Country | any;
    countryFilter: string = "";
    showDropdown : boolean = false;
    @Input() disabled :boolean = false;
    topCountries:any[]=[];
    form:FormGroup;
    activeImage:any;
    @Input() set getCountryCode(val:any){
        if(val){
         this.activeCountryCode = val;
         this.ngOnInit();
        }
    }
    @Input() set getDialCode(ele:any){
        if(ele){
         this.activeDialCode = ele;
         this.ngOnInit();
        }
    }
    @Input() activeCountryCode:any;
    @Input() activeDialCode:any;
    @Input() component:any;
    @Input() required:any;
    value = '';
    phoneNumber: any;
    // FILTER COUNTRIES LIST WHEN DROPDOWN IS OPEN
    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.showDropdown) {
            this.countryFilter = `${this.countryFilter}${event.key}`;
        }
    }

    constructor(public service: CountryService,  phoneComponent: ElementRef, public formatPipe:FormatPipe, public fb: FormBuilder) {
        this.phoneComponent = phoneComponent;
        this.form = fb.group({
            phoneValue: [''],
          });
    }

    ngOnInit(): void {
   
        
        this.service.getCountries().then((data:any)=>{
            this.countries = data;
            if(this.activeCountryCode != 'US'){
                this.getDefaultEntry();
            }
        })
        this.service.getTopCountries().then((data:any)=>{
            this.topCountries = data;
            this.getDefaultEntry();
        })
        
        this.translateCountryNames();
    }

    getDefaultEntry(){
        if(this.activeDialCode == null || this.activeDialCode == undefined || this.activeDialCode == ""){
            this.defaultCountry = 'US';
        }else{
            this.defaultCountry = this.activeCountryCode;
            let selected:any;
            if(this.activeCountryCode != 'US'){
                selected = this.countries.find((country: Country) => country.countryCode.toLowerCase() === this.activeCountryCode?.toLowerCase());
                if(selected?.countryCode != 'CA'){
                    selected.maxLength = this.getMaxLength(selected?.numberExample);
                    this.maxLength = selected?.maxLength;
                    this.placeholder = this.required ? selected?.numberExample + ' (R)' : selected?.numberExample;
                    this.activeImage = selected?.flagImg;
                    this.activeDialCode = selected?.dialCode;
                }else{
                    selected.maxLength = selected.numberExample.length;
                    this.placeholder = this.required ? selected?.numberExample + ' (R)' : selected?.numberExample;
                    this.activeImage = selected?.flagImg;
                    this.activeDialCode = selected?.dialCode;
                }
                this.updateDialCode.emit(selected);
            }else{
                selected = this.topCountries.find((country: Country) => country.countryCode.toLowerCase() === this.activeCountryCode?.toLowerCase());
                this.placeholder = this.required ? selected?.numberExample + ' (R)' : selected?.numberExample;
                this.activeImage = selected?.flagImg;
                this.activeDialCode = selected?.dialCode;
                selected.maxLength = selected?.numberExample.length;
                this.updateDialCode.emit(selected);
            }
        }
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onPressInput(){
        this.onPressInputBox.emit();
    }

    onBlur(){
        this.onBlurInputBox.emit();
    }

    registerOnTouched(fn: Function) {
        this.onTouch = fn;
    }

    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    writeValue(value: string) {
        this.value = value || '';
        
        this.phoneInput = this.value;
        
        if (IntPhonePrefixComponent.startsWithPlus(this.value)) {
            this.findPrefix(this.value.split(PLUS)[1]);
            if (this.selectedCountry) {
                this.updatePhoneInput(this.selectedCountry.countryCode);
            }
        }

        if (this.defaultCountry) {
            this.updatePhoneInput(this.defaultCountry);
        }
    }

    updateSelectedCountry(event: Event, countryCode: string, country:any) {
        this.phoneFilter = "";
        this.phoneInput = "";
        if(country?.countryCode != 'US' && country?.countryCode != 'CA'){
            country.maxLength = this.getMaxLength(country.numberExample);
            country.numberExample = this.getPlaceholder(country.numberExample);
        }else{
            country.maxLength = country.numberExample.length;
        }
        event.preventDefault();
        this.updatePhoneInput(countryCode);
        this.updateValue();
    }

    getPlaceholder(number:any){
        if(number){
            let newStr = number.replace(/-/g, "").replace('(', "").replace(')', "").replace(/\s/g, '');
            return newStr;
        }
      
      }

    getMaxLength(number:any){
        if(number){
            let newStr = number.replace(/-/g, "").replace('(', "").replace(')', "").replace(/\s/g, '');
            return newStr.length;
        }
        
      }
    
    showDropDown(i:any) {
        setTimeout(()=>{
            let id = 'phoneNumberFilter'+(i == undefined ? '' : i)
            document.getElementById(id).focus();
        }, 50);
        this.showDropdown = !this.showDropdown;
        this.countryFilter = '';
    }

    hideDropdown(event: Event) {
        if (!this.phoneComponent.nativeElement.contains(event.target)) {
            
        }
    }
    AcceptsNumbers(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

    updatePhone() {
        
        if(this.phoneInput && this.phoneInput?.length == 15 && !this.phoneInput?.includes("  ")){
            let val = this.phoneInput.slice(0, -1);
            this.phoneInput = val;
        }
        this.updateValue();
    }

    onKeypressEvent(){
    }

    private translateCountryNames() {
        

        this.orderCountriesByName();
    }

    private orderCountriesByName() {
        this.countries = _.sortBy(this.countries, 'name');
    }

    private updatePhoneInput(countryCode: string) {
        
        let selected:any;
        

            if(countryCode != "US"){
                this.selectedCountry = this.countries.find((country: Country) => country.countryCode.toLowerCase() === countryCode.toLowerCase());
                selected = this.countries.find((country: Country) => country.countryCode.toLowerCase() === countryCode.toLowerCase());
                
                this.placeholder = this.required ?  selected?.numberExample + ' (R)' : selected?.numberExample;
                this.activeImage = selected?.flagImg;
                this.activeDialCode = selected?.dialCode;
                if(selected?.countryCode != 'CA'){
                    this.maxLength = selected?.maxLength;
                }else{
                    selected.maxLength = selected.numberExample.length;
                }
                this.updateDialCode.emit(selected);
            }else{
                this.selectedCountry = this.topCountries.find((country: Country) => country.countryCode.toLowerCase() === countryCode.toLowerCase());
                selected = this.topCountries.find((country: Country) => country.countryCode.toLowerCase() === countryCode.toLowerCase());
                
                this.placeholder = this.required ?  selected?.numberExample + ' (R)' : selected?.numberExample;
                this.activeImage = selected?.flagImg;
                this.activeDialCode = selected?.dialCode;
                 selected.maxLength = selected.numberExample.length;
                this.updateDialCode.emit(selected);
            }
    }

    private findPrefix(prefix: string) {
        if(this.countries != undefined){
            let foundPrefixes: Country[] = this.countries.filter((country: Country) => prefix.startsWith(country.dialCode));
            this.selectedCountry = !_.isEmpty(foundPrefixes)
                ? IntPhonePrefixComponent.reducePrefixes(foundPrefixes)
                : null;
        }
    }

    private updateValue() {
        this.value = this.phoneInput.replace(/ /g, '');
        this.onModelChange(this.value);
        this.onTouch();
    }

    private static startsWithPlus(text: string): boolean {
        return text?.startsWith(PLUS);
    }

    private static reducePrefixes(foundPrefixes: Country[]) {
        return foundPrefixes.reduce(
            (first: Country, second: Country) =>
                first.dialCode.length > second.dialCode.length
                    ? first
                    : second
        );
    }

    incrementClickOutsideCount(){
        if(this.showDropdown){
            this.showDropdown = false;
        }
    }

    changeValue(val: string):any {
        if(val.includes('+')){
            let value = val.split("+"+this.activeDialCode);
            return this.phoneInput = value[1];
        }
    }

    inputWidthR(){
        let width =  document.getElementById("int-phone-data")?.offsetWidth
        return width;
     }

     getValFromPhoneMask(event:any){
        this.phoneInput = event;
     }
     stopClick(event:any){
        event.stopPropagation() 
     }

     titleValue(code:any){
        if(code == 'US'){
            return "United State";
        }else{
            let name:any;
            this.countries.filter((data:any) => {
                if (code && data.countryCode == code) {
                  name = data.name
                }
              })
              return name;
        }
     }
}
