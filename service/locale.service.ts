import {Injectable} from '@angular/core';
import {CountryLocale} from '../interface/country-locale.interface';
import {CountryCode} from "../interface/country-code.interface";

@Injectable()
export class LocaleService {
  private locales: CountryLocale = {
    'en': {
      'ax': 'AALAND ISLANDS',
      'af': 'AFGHANISTAN',
      'al': 'ALBANIA',
      'dz': 'ALGERIA',
      'as': 'AMERICAN SAMOA',
      'ad': 'ANDORRA',
      'ao': 'ANGOLA',
      'ai': 'ANGUILLA',
      'aq': 'ANTARCTICA',
      'ag': 'ANTIGUA AND BARBUDA',
      'ar': 'ARGENTINA',
      'am': 'ARMENIA',
      'aw': 'ARUBA',
      'au': 'AUSTRALIA',
      'at': 'AUSTRIA',
      'az': 'AZERBAIJAN',
      'bs': 'BAHAMAS',
      'bh': 'BAHRAIN',
      'bd': 'BANGLADESH',
      'bb': 'BARBADOS',
      'by': 'BELARUS',
      'be': 'BELGIUM',
      'bz': 'BELIZE',
      'bj': 'BENIN',
      'bm': 'BERMUDA',
      'bt': 'BHUTAN',
      'bo': 'BOLIVIA',
      'ba': 'BOSNIA AND HERZEGOWINA',
      'bw': 'BOTSWANA',
      'bv': 'BOUVET ISLAND',
      'br': 'BRAZIL',
      'io': 'BRITISH INDIAN OCEAN TERRITORY',
      'bn': 'BRUNEI DARUSSALAM',
      'bg': 'BULGARIA',
      'bf': 'BURKINA FASO',
      'bi': 'BURUNDI',
      'bq': 'CARIBBEAN NETHERLANDS',
      'kh': 'CAMBODIA',
      'cm': 'CAMEROON',
      'ca': 'CANADA',
      'cv': 'CAPE VERDE',
      'ky': 'CAYMAN ISLANDS',
      'cf': 'CENTRAL AFRICAN REPUBLIC',
      'td': 'CHAD',
      'cl': 'CHILE',
      'cn': 'CHINA',
      'cx': 'CHRISTMAS ISLAND',
      'cc': 'COCOS ISLANDS',
      'co': 'COLOMBIA',
      'km': 'COMOROS',
      'cd': 'CONGO',
      'cg': 'CONGO REPUBLIC',
      'ck': 'COOK ISLANDS',
      'cr': 'COSTA RICA',
      'ci': 'COTE DIVOIRE',
      'hr': 'CROATIA ',
      'cu': 'CUBA',
      'cw': 'CURACAO',
      'cy': 'CYPRUS',
      'cz': 'CZECH REPUBLIC',
      'dk': 'DENMARK',
      'dj': 'DJIBOUTI',
      'dm': 'DOMINICA',
      'do': 'DOMINICAN REPUBLIC',
      'ec': 'ECUADOR',
      'eg': 'EGYPT',
      'sv': 'EL SALVADOR',
      'gq': 'EQUATORIAL GUINEA',
      'er': 'ERITREA',
      'ee': 'ESTONIA',
      'et': 'ETHIOPIA',
      'fk': 'FALKLAND ISLANDS (MALVINAS)',
      'fo': 'FAROE ISLANDS',
      'fj': 'FIJI',
      'fi': 'FINLAND',
      'fr': 'FRANCE',
      'gf': 'FRENCH GUIANA',
      'pf': 'FRENCH POLYNESIA',
      'tf': 'FRENCH SOUTHERN TERRITORIES',
      'ga': 'GABON',
      'gm': 'GAMBIA',
      'ge': 'GEORGIA',
      'de': 'GERMANY',
      'gh': 'GHANA',
      'gi': 'GIBRALTAR',
      'gr': 'GREECE',
      'gl': 'GREENLAND',
      'gd': 'GRENADA',
      'gp': 'GUADELOUPE',
      'gu': 'GUAM',
      'gt': 'GUATEMALA',
      'gg': 'GUERNSEY',
      'gn': 'GUINEA',
      'gw': 'GUINEA-BISSAU',
      'gy': 'GUYANA',
      'ht': 'HAITI',
      'hm': 'HEARD AND MC DONALD ISLANDS',
      'hn': 'HONDURAS',
      'hk': 'HONG KONG',
      'hu': 'HUNGARY',
      'is': 'ICELAND',
      'in': 'INDIA',
      'id': 'INDONESIA',
      'ir': 'IRAN ',
      'iq': 'IRAQ',
      'ie': 'IRELAND',
      'im': 'ISLA DE MAN',
      'il': 'ISRAEL',
      'it': 'ITALY',
      'jm': 'JAMAICA',
      'jp': 'JAPAN',
      'je': 'JERSEY',
      'jo': 'JORDAN',
      'kz': 'KAZAKHSTAN',
      'ke': 'KENYA',
      'ki': 'KIRIBATI',
      'kp': 'KOREA NORTH ',
      'kr': 'KOREA SOUTH',
      'xk': 'KOSOVO',
      'kw': 'KUWAIT',
      'kg': 'KYRGYZSTAN',
      'la': 'LAO',
      'lv': 'LATVIA',
      'lb': 'LEBANON',
      'ls': 'LESOTHO',
      'lr': 'LIBERIA',
      'ly': 'LIBYAN ARAB JAMAHIRIYA',
      'li': 'LIECHTENSTEIN',
      'lt': 'LITHUANIA',
      'lu': 'LUXEMBOURG',
      'mo': 'MACAU',
      'mk': 'MACEDONIA',
      'mg': 'MADAGASCAR',
      'mw': 'MALAWI',
      'my': 'MALAYSIA',
      'mv': 'MALDIVES',
      'ml': 'MALI',
      'mt': 'MALTA',
      'mh': 'MARSHALL ISLANDS',
      'mq': 'MARTINIQUE',
      'mr': 'MAURITANIA',
      'mu': 'MAURITIUS',
      'yt': 'MAYOTTE',
      'mx': 'MEXICO',
      'fm': 'MICRONESIA',
      'md': 'MOLDOVA',
      'mc': 'MONACO',
      'mn': 'MONGOLIA',
      'me': 'MONTENEGRO',
      'ms': 'MONTSERRAT',
      'ma': 'MOROCCO',
      'mz': 'MOZAMBIQUE',
      'mm': 'MYANMAR',
      'na': 'NAMIBIA',
      'nr': 'NAURU',
      'np': 'NEPAL',
      'nl': 'NETHERLANDS',
      'an': 'NETHERLANDS ANTILLES',
      'nc': 'NEW CALEDONIA',
      'nz': 'NEW ZEALAND',
      'ni': 'NICARAGUA',
      'ne': 'NIGER',
      'ng': 'NIGERIA',
      'nu': 'NIUE',
      'nf': 'NORFOLK ISLAND',
      'mp': 'NORTHERN MARIANA ISLANDS',
      'no': 'NORWAY',
      'om': 'OMAN',
      'pk': 'PAKISTAN',
      'pw': 'PALAU',
      'ps': 'PALESTINA',
      'pa': 'PANAMA',
      'pg': 'PAPUA NEW GUINEA',
      'py': 'PARAGUAY',
      'pe': 'PERU',
      'ph': 'PHILIPPINES',
      'pn': 'PITCAIRN',
      'pl': 'POLAND',
      'pt': 'PORTUGAL',
      'pr': 'PUERTO RICO',
      'qa': 'QATAR',
      're': 'REUNION',
      'ro': 'ROMANIA',
      'ru': 'RUSSIAN FEDERATION',
      'rw': 'RWANDA',
      'sh': 'SAINT HELENA',
      'kn': 'SAINT KITTS AND NEVIS',
      'lc': 'SAINT LUCIA',
      'pm': 'SAINT PIERRE AND MIQUELON',
      'vc': 'SAINT VINCENT AND THE GRENADINES',
      'ws': 'SAMOA',
      'bl': 'SAN BARTOLOMÉ',
      'sm': 'SAN MARINO',
      'st': 'SAO TOME AND PRINCIPE',
      'sa': 'SAUDI ARABIA',
      'sn': 'SENEGAL',
      'cs': 'SERBIA AND MONTENEGRO',
      'rs': 'SERBIA',
      'sc': 'SEYCHELLES',
      'sl': 'SIERRA LEONE',
      'sg': 'SINGAPORE',
      'sx': 'SINT MAARTEN',
      'sk': 'SLOVAKIA',
      'si': 'SLOVENIA',
      'sb': 'SOLOMON ISLANDS',
      'so': 'SOMALIA',
      'za': 'SOUTH AFRICA',
      'gs': 'SOUTH GEORGIA ISLANDS',
      'es': 'SPAIN',
      'lk': 'SRI LANKA',
      'sd': 'SUDAN',
      'ss': 'SOUTH SUDAN',
      'sr': 'SURINAME',
      'sj': 'SVALBARD AND JAN MAYEN ISLANDS',
      'sz': 'SWAZILAND',
      'se': 'SWEDEN',
      'ch': 'SWITZERLAND',
      'sy': 'SYRIAN ARAB REPUBLIC',
      'tw': 'TAIWAN',
      'tj': 'TAJIKISTAN',
      'tz': 'TANZANIA',
      'th': 'THAILAND',
      'tl': 'TIMOR-LESTE',
      'tg': 'TOGO',
      'tk': 'TOKELAU',
      'to': 'TONGA',
      'tt': 'TRINIDAD AND TOBAGO',
      'tn': 'TUNISIA',
      'tr': 'TURKEY',
      'tm': 'TURKMENISTAN',
      'tc': 'TURKS AND CAICOS ISLANDS',
      'tv': 'TUVALU',
      'ug': 'UGANDA',
      'ua': 'UKRAINE',
      'ae': 'UNITED ARAB EMIRATES',
      'gb': 'UNITED KINGDOM',
      'us': 'UNITED STATES',
      'um': 'UNITED STATES MINOR OUTLYING ISLANDS',
      'uy': 'URUGUAY',
      'uz': 'UZBEKISTAN',
      'vu': 'VANUATU',
      'va': 'VATICAN CITY STATE',
      've': 'VENEZUELA',
      'vn': 'VIET NAM',
      'vg': 'VIRGIN ISLANDS (BRITISH)',
      'vi': 'VIRGIN ISLANDS (U.S.)',
      'wf': 'WALLIS AND FUTUNA ISLANDS',
      'eh': 'WESTERN SAHARA',
      'ye': 'YEMEN',
      'zm': 'ZAMBIA',
      'zw': 'ZIMBABWE '
    },
    'es': {
      'ax': 'ISLAS ÁLAND',
      'af': 'AFGHANISTÁN',
      'al': 'ALBANIA',
      'dz': 'ARGEL',
      'as': 'SAMOA AMERICANA',
      'ad': 'ANDORRA',
      'ao': 'ANGOLA',
      'ai': 'ANGUILA',
      'aq': 'ANTÁRTIDA',
      'ag': 'ANTIGUA Y BARBUDA',
      'ar': 'ARGENTINA',
      'am': 'ARMENIA',
      'aw': 'ARUBA',
      'au': 'AUSTRALIA',
      'at': 'AUSTRIA',
      'az': 'AZERBAIYÁN',
      'bs': 'BAHAMAS',
      'bh': 'BAHRÉIN',
      'bd': 'BANGLADESH',
      'bb': 'BARBADOS',
      'by': 'BELARÚS',
      'be': 'BÉLGICA',
      'bz': 'BELICE',
      'bj': 'BENIN',
      'bm': 'BERMUDAAS',
      'bt': 'BHUTÁN',
      'bo': 'BOLIVIA',
      'ba': 'BOSNIA Y HERZEGOVINA',
      'bw': 'BOTSUANA',
      'bv': 'ISLA BOUVET',
      'br': 'BRASIL',
      'io': 'TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO',
      'bn': 'BRUNÉI',
      'bg': 'BULGARIA',
      'bf': 'BURKINA FASO',
      'bi': 'BURUNDI',
      'bq': 'CARIBE PAÍSES BAJOS',
      'kh': 'CAMBOYA',
      'cm': 'CAMERÚN',
      'ca': 'CANADÁ',
      'cv': 'CABO VERDE',
      'ky': 'ISLAS CAIMÁN',
      'cf': 'REPÚBLICA CENTRO-AFRICANA',
      'td': 'CHAD',
      'cl': 'CHILE',
      'cn': 'CHINA',
      'cx': 'ISLAS CHRISTMAS',
      'cc': 'ISLAS COCOS',
      'co': 'COLOMBIA',
      'km': 'COMOROS',
      'cd': 'CONGO (ZAIRE)',
      'cg': 'CONGO',
      'ck': 'ISLAS COOK',
      'cr': 'COSTA RICA',
      'ci': 'COSTA DE MARFIL',
      'hr': 'CROACIA ',
      'cu': 'CUBA',
      'cw': 'CURAÇAO',
      'cy': 'CHIPRE',
      'cz': 'REPÚBLICA CHECA',
      'dk': 'DINAMARCA',
      'dj': 'YIBUTI',
      'dm': 'DOMÍNICA',
      'do': 'REPÚBLICA DOMINICANA',
      'ec': 'ECUADOR',
      'eg': 'EGIPTO',
      'sv': 'EL SALVADOR',
      'gq': 'GUINEA ECUATORIAL',
      'er': 'ERITREA',
      'ee': 'ESTONIA',
      'et': 'ETIOPÍA',
      'fk': 'ISLAS MALVINAS',
      'fo': 'ISLAS FAROE',
      'fj': 'FIJI',
      'fi': 'FINLANDIA',
      'fr': 'FRANCIA',
      'gf': 'GUIANA FRANCESA',
      'pf': 'POLYNESIA FRANCESA',
      'tf': 'TERRITORIOS AUSTRALES FRANCESES',
      'ga': 'GABÓN',
      'gm': 'GAMBIA',
      'ge': 'GEORGIA',
      'de': 'ALEMANIA',
      'gh': 'GHANA',
      'gi': 'GIBRALTAR',
      'gr': 'GREECE',
      'gl': 'GROENLANDIA',
      'gd': 'GRANADA',
      'gp': 'GUADALUPE',
      'gu': 'GUAM',
      'gt': 'GUATEMALA',
      'gg': 'GUERNSEY',
      'gn': 'GUINEA',
      'gw': 'GUINEA-BISSAU',
      'gy': 'GUYANA',
      'ht': 'HAITI',
      'hm': 'ISLAS HEARD Y MC DONALD',
      'hn': 'HONDURAS',
      'hk': 'HONG KONG',
      'hu': 'HUNGRÍA',
      'is': 'ISLANDIA',
      'in': 'INDIA',
      'id': 'INDONESIA',
      'ir': 'IRÁN',
      'iq': 'IRAK',
      'ie': 'IRLANDA',
      'im': 'ISLA DE MAN',
      'il': 'ISRAEL',
      'it': 'ITALIA',
      'jm': 'JAMAICA',
      'jp': 'JAPÓN',
      'je': 'JERSEY',
      'jo': 'JORDANIA',
      'kz': 'KAZAJSTÁN',
      'ke': 'KENIA',
      'ki': 'KIRIBATI',
      'kp': 'KOREA DEL NORTE',
      'kr': 'KOREA DEL SUR',
      'xk': 'KOSOVO',
      'kw': 'KUWAIT',
      'kg': 'KIRGUISTÁN',
      'la': 'LAOS',
      'lv': 'LETONIA',
      'lb': 'LÍBANO',
      'ls': 'LESOTHO',
      'lr': 'LIBERIA',
      'ly': 'LIBIA',
      'li': 'LIECHTENSTEIN',
      'lt': 'LITUANIA',
      'lu': 'LUXEMBURGO',
      'mo': 'MACAO',
      'mk': 'MACEDONIA',
      'mg': 'MADAGASCAR',
      'mw': 'MALAWI',
      'my': 'MALASIA',
      'mv': 'MALDIVAS',
      'ml': 'MALI',
      'mt': 'MALTA',
      'mh': 'ISLAS MARSHALL',
      'mq': 'MATINICA',
      'mr': 'MAURITANIA',
      'mu': 'MAURICIO',
      'yt': 'MAYOTTE',
      'mx': 'MÉXICO',
      'fm': 'MICRONESIA',
      'md': 'MOLDOVA',
      'mc': 'MÓNACO',
      'mn': 'MONGOLIA',
      'me': 'MONTENEGRO',
      'ms': 'MONTSERRAT',
      'ma': 'MARRUECOS',
      'mz': 'MOZAMBIQUE',
      'mm': 'MYANMAR',
      'na': 'NAMIBIA',
      'nr': 'NAURU',
      'np': 'NEPAL',
      'nl': 'PAÍSES BAJOS',
      'an': 'ANTILLAS NEERLANDESAS',
      'nc': 'NUEVA CALEDONIA',
      'nz': 'NUEVA ZELANDA',
      'ni': 'NICARAGUA',
      'ne': 'NÍGER',
      'ng': 'NIGERIA',
      'nu': 'NIUE',
      'nf': 'ISLAS NORKFOLK',
      'mp': 'ISLAS MARIANAS DEL NORTE',
      'no': 'NORUEGA',
      'om': 'OMÁN',
      'pk': 'PAKISTÁN',
      'pw': 'ISLAS PALAOS',
      'ps': 'PALESTINA',
      'pa': 'PANAMÁ',
      'pg': 'PAPÚA NUEVA GUINEA',
      'py': 'PARAGUAY',
      'pe': 'PERÚ',
      'ph': 'FILIPINAS',
      'pn': 'ISLAS PITCAIRN',
      'pl': 'POLONIA',
      'pt': 'PORTUGAL',
      'pr': 'PUERTO RICO',
      'qa': 'QATAR',
      're': 'REUNIÓN',
      'ro': 'RUMANÍA',
      'ru': 'RUSIA',
      'rw': 'RUANDA',
      'sh': 'SANTA ELENA',
      'kn': 'SAN CRISTÓBAL Y NIEVES',
      'lc': 'SANTA LUCÍA',
      'pm': 'SAN PEDRO Y MIQUELÓN',
      'vc': 'SAN VICENTE Y LAS GRANADINAS',
      'ws': 'SAMOA',
      'bl': 'SAN BARTOLOMÉ',
      'sm': 'SAN MARINO',
      'st': 'SANTO TOMÉ Y PRÍNCIPE',
      'sa': 'ARABIA SAUDITA',
      'sn': 'SENEGAL',
      'cs': 'SERBIA Y MONTENEGRO',
      'rs': 'SERBIA',
      'sc': 'SEYCHELLES',
      'sl': 'SIERRA LEONA',
      'sg': 'SINGAPUR',
      'sx': 'SINT MAARTEN',
      'sk': 'ESLOVAQUIA',
      'si': 'ESLOVENIA',
      'sb': 'ISLAS SOLOMÓN',
      'so': 'SOMALIA',
      'za': 'SUDÁFRICA',
      'gs': 'GEORGIA DEL SUR E ISLAS SANDWICH DEL SUR',
      'es': 'ESPAÑA',
      'lk': 'SRI LANKA',
      'sd': 'SUDÁN',
      'ss': 'SUDÁN DEL SUR',
      'sr': 'SURINAM',
      'sj': 'ISLAS SVALBARD Y JAN MAYEN',
      'sz': 'SUAZILANDIA',
      'se': 'SUECIA',
      'ch': 'SUIZA',
      'sy': 'SIRIA',
      'tw': 'TAIWÁN',
      'tj': 'TAYIKISTÁN',
      'tz': 'TANZANIA',
      'th': 'TAILANDIA',
      'tl': 'TIMOR-LESTE',
      'tg': 'TOGO',
      'tk': 'TOKELAU',
      'to': 'TONGA',
      'tt': 'TRINIDAD Y TOBAGO',
      'tn': 'TÚNEZ',
      'tr': 'TURQUÍA',
      'tm': 'TURKMENISTÁN',
      'tc': 'ISLAS TURCAS Y CAICOS',
      'tv': 'TUVALU',
      'ug': 'UGANDA',
      'ua': 'UCRANIA',
      'ae': 'EMIRATOS ÁRABES UNIDOS',
      'gb': 'REINO UNIDO',
      'us': 'ESTADOS UNIDOS DE AMÉRICA',
      'um': 'ESTADOS UNIDOS ISLAS MINOR OUTLYING',
      'uy': 'URUGUAY',
      'uz': 'UZBEKISTÁN',
      'vu': 'VANUATU',
      'va': 'CIUDAD DEL VATICANO',
      've': 'VENEZUELA',
      'vn': 'VIETNAM',
      'vg': 'ISLAS VÍRGENES (INGLESAS)',
      'vi': 'ISLAS VÍRGENES (U.S.)',
      'wf': 'WALLIS Y FUTUNA',
      'eh': 'SAHARA OCCIDENTAL',
      'ye': 'YEMEN',
      'zm': 'ZAMBIA',
      'zw': 'ZIMBABUE '
    }
  };
  public allCountries:any[]=
  [
    {
      "name": "Afghanistan",
      "countryCode": "AF",
      "dialCode": 
        "93"
       ,
      "numberExample": "070 123 4567"
    },
    {
      "name": "Åland Islands",
      "countryCode": "AX",
      "dialCode": 
        "358"
       ,
      "numberExample": ""
    },
    {
      "name": "Albania",
      "countryCode": "AL",
      "dialCode": 
        "355"
       ,
      "numberExample": "066 212 3456"
    },
    {
      "name": "Algeria",
      "countryCode": "DZ",
      "dialCode": 
        "213"
       ,
      "numberExample": "0551 23 45 67"
    },
    {
      "name": "American Samoa",
      "countryCode": "AS",
      "dialCode": 
        "1684"
       ,
      "numberExample": "(684) 733-1234"
    },
    {
      "name": "Angola",
      "countryCode": "AO",
      "dialCode": 
        "244"
       ,
      "numberExample": "923 123 456"
    },
    {
      "name": "Anguilla",
      "countryCode": "AI",
      "dialCode": 
        "1264"
       ,
      "numberExample": "(264) 235-1234"
    },
    {
      "name": "Antarctica",
      "countryCode": "AQ",
      "dialCode": 
        "672"
       ,
      "numberExample": ""
    },
    {
      "name": "Antigua and Barbuda",
      "countryCode": "AG",
      "dialCode": 
        "1268"
       ,
      "numberExample": "(268) 464-1234"
    },
    {
      "name": "Argentina",
      "countryCode": "AR",
      "dialCode": 
        "54"
       ,
      "numberExample": "011 15-2345-6789"
    },
    {
      "name": "Armenia",
      "countryCode": "AM",
      "dialCode": 
        "374"
       ,
      "numberExample": "077 123456"
    },
    {
      "name": "Aruba",
      "countryCode": "AW",
      "dialCode": 
        "297"
       ,
      "numberExample": "560 1234"
    },
    {
      "name": "Australia",
      "countryCode": "AU",
      "dialCode": 
        "61"
       ,
      "numberExample": "0412 345 678"
    },
    {
      "name": "Austria",
      "countryCode": "AT",
      "dialCode": 
        "43"
       ,
      "numberExample": "0664 123456"
    },
    {
      "name": "Azerbaijan",
      "countryCode": "AZ",
      "dialCode": 
        "994"
       ,
      "numberExample": "040 123 45 67"
    },
    {
      "name": "Bahamas",
      "countryCode": "BS",
      "dialCode": 
        "1242"
       ,
      "numberExample": "(242) 359-1234"
    },
    {
      "name": "Bahrain",
      "countryCode": "BH",
      "dialCode": 
        "973"
       ,
      "numberExample": "3600 1234"
    },
    {
      "name": "Bangladesh",
      "countryCode": "BD",
      "dialCode": 
        "880"
       ,
      "numberExample": "01812-345678"
    },
    {
      "name": "Barbados",
      "countryCode": "BB",
      "dialCode": 
        "1246"
       ,
      "numberExample": "(246) 250-1234"
    },
    {
      "name": "Belarus",
      "countryCode": "BY",
      "dialCode": 
        "375"
       ,
      "numberExample": "8 029 491-19-11"
    },
    {
      "name": "Belgium",
      "countryCode": "BE",
      "dialCode": 
        "32"
       ,
      "numberExample": "0470 12 34 56"
    },
    {
      "name": "Belize",
      "countryCode": "BZ",
      "dialCode": 
        "501"
       ,
      "numberExample": "622-1234"
    },
    {
      "name": "Benin",
      "countryCode": "BJ",
      "dialCode": 
        "229"
       ,
      "numberExample": "90 01 12 34"
    },
    {
      "name": "Bermuda",
      "countryCode": "BM",
      "dialCode": 
        "1441"
       ,
      "numberExample": "(441) 370-1234"
    },
    {
      "name": "Bhutan",
      "countryCode": "BT",
      "dialCode": 
        "975"
       ,
      "numberExample": "17 12 34 56"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "countryCode": "BO",
      "dialCode": 
        "591"
       ,
      "numberExample": "71234567"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "countryCode": "BQ",
      "dialCode": 
        "5997"
       ,
      "numberExample": ""
    },
    {
      "name": "Bosnia and Herzegovina",
      "countryCode": "BA",
      "dialCode": 
        "387"
       ,
      "numberExample": "061 123 456"
    },
    {
      "name": "Botswana",
      "countryCode": "BW",
      "dialCode": 
        "267"
       ,
      "numberExample": "71 123 456"
    },
    {
      "name": "Brazil",
      "countryCode": "BR",
      "dialCode": 
        "55"
       ,
      "numberExample": "(11) 96123-4567"
    },
    {
      "name": "British Indian Ocean Territory",
      "countryCode": "IO",
      "dialCode": 
        "246"
       ,
      "numberExample": "380 1234"
    },
    {
      "name": "Virgin Islands (British)",
      "countryCode": "VG",
      "dialCode": 
        "1284"
       ,
      "numberExample": "(284) 300-1234"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "countryCode": "VI",
      "dialCode": 
        "1 340"
       ,
      "numberExample": "(340) 642-1234"
    },
    {
      "name": "Brunei Darussalam",
      "countryCode": "BN",
      "dialCode": 
        "673"
       ,
      "numberExample": "712 3456"
    },
    {
      "name": "Bulgaria",
      "countryCode": "BG",
      "dialCode": 
        "359"
       ,
      "numberExample": "048 123 456"
    },
    {
      "name": "Burkina Faso",
      "countryCode": "BF",
      "dialCode": 
        "226"
       ,
      "numberExample": "70 12 34 56"
    },
    {
      "name": "Burundi",
      "countryCode": "BI",
      "dialCode": 
        "257"
       ,
      "numberExample": "79 56 12 34"
    },
    {
      "name": "Cambodia",
      "countryCode": "KH",
      "dialCode": 
        "855"
       ,
      "numberExample": "091 234 567"
    },
    {
      "name": "Cameroon",
      "countryCode": "CM",
      "dialCode": 
        "237"
       ,
      "numberExample": "6 71 23 45 67"
    },
    {
      "name": "Canada",
      "countryCode": "CA",
      "dialCode": 
        "1"
       ,
      "numberExample": "(204) 234-5678"
    },
    {
      "name": "Cabo Verde",
      "countryCode": "CV",
      "dialCode": 
        "238"
       ,
      "numberExample": "991 12 34"
    },
    {
      "name": "Cayman Islands",
      "countryCode": "KY",
      "dialCode": 
        "1345"
       ,
      "numberExample": "(345) 323-1234"
    },
    {
      "name": "Central African Republic",
      "countryCode": "CF",
      "dialCode": 
        "236"
       ,
      "numberExample": "70 01 23 45"
    },
    {
      "name": "Chad",
      "countryCode": "TD",
      "dialCode": 
        "235"
       ,
      "numberExample": "63 01 23 45"
    },
    {
      "name": "Chile",
      "countryCode": "CL",
      "dialCode": 
        "56"
       ,
      "numberExample": "9 6123 4567"
    },
    {
      "name": "China",
      "countryCode": "CN",
      "dialCode": 
        "86"
       ,
      "numberExample": "131 2345 6789"
    },
    {
      "name": "Christmas Island",
      "countryCode": "CX",
      "dialCode": 
        "61"
       ,
      "numberExample": "0412 345 678"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "countryCode": "CC",
      "dialCode": 
        "61"
       ,
      "numberExample": "0412 345 678"
    },
    {
      "name": "Colombia",
      "countryCode": "CO",
      "dialCode": 
        "57"
       ,
      "numberExample": "321 1234567"
    },
    {
      "name": "Comoros",
      "countryCode": "KM",
      "dialCode": 
        "269"
       ,
      "numberExample": "321 23 45"
    },
    {
      "name": "Congo",
      "countryCode": "CG",
      "dialCode": 
        "242"
       ,
      "numberExample": "06 123 4567"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "countryCode": "CD",
      "dialCode": 
        "243"
       ,
      "numberExample": "0991 234 567"
    },
    {
      "name": "Cook Islands",
      "countryCode": "CK",
      "dialCode": 
        "682"
       ,
      "numberExample": "71 234"
    },
    {
      "name": "Costa Rica",
      "countryCode": "CR",
      "dialCode": 
        "506"
       ,
      "numberExample": "8312 3456"
    },
    {
      "name": "Croatia",
      "countryCode": "HR",
      "dialCode": 
        "385"
       ,
      "numberExample": "092 123 4567"
    },
    {
      "name": "Cuba",
      "countryCode": "CU",
      "dialCode": 
        "53"
       ,
      "numberExample": "05 1234567"
    },
    {
      "name": "Curaçao",
      "countryCode": "CW",
      "dialCode": 
        "599"
       ,
      "numberExample": "9 518 1234"
    },
    {
      "name": "Cyprus",
      "countryCode": "CY",
      "dialCode": 
        "357"
       ,
      "numberExample": "96 123456"
    },
    {
      "name": "Czech Republic",
      "countryCode": "CZ",
      "dialCode": 
        "420"
       ,
      "numberExample": "601 123 456"
    },
    {
      "name": "Denmark",
      "countryCode": "DK",
      "dialCode": 
        "45"
       ,
      "numberExample": "20 12 34 56"
    },
    {
      "name": "Djibouti",
      "countryCode": "DJ",
      "dialCode": 
        "253"
       ,
      "numberExample": "77 83 10 01"
    },
    {
      "name": "Dominica",
      "countryCode": "DM",
      "dialCode": 
        "1767"
       ,
      "numberExample": "(767) 225-1234"
    },
    {
      "name": "Dominican Republic",
      "countryCode": "DO",
      "dialCode": 
        "1809",
      "numberExample": ""
    },
    {
      "name": "Ecuador",
      "countryCode": "EC",
      "dialCode": 
        "593"
       ,
      "numberExample": "099 123 4567"
    },
    {
      "name": "Egypt",
      "countryCode": "EG",
      "dialCode": 
        "20"
       ,
      "numberExample": "0100 123 4567"
    },
    {
      "name": "El Salvador",
      "countryCode": "SV",
      "dialCode": 
        "503"
       ,
      "numberExample": "7012 3456"
    },
    {
      "name": "Equatorial Guinea",
      "countryCode": "GQ",
      "dialCode": 
        "240"
       ,
      "numberExample": "222 123 456"
    },
    {
      "name": "Eritrea",
      "countryCode": "ER",
      "dialCode": 
        "291"
       ,
      "numberExample": "07 123 456"
    },
    {
      "name": "Estonia",
      "countryCode": "EE",
      "dialCode": 
        "372"
       ,
      "numberExample": "5123 4567"
    },
    {
      "name": "Ethiopia",
      "countryCode": "ET",
      "dialCode": 
        "251"
       ,
      "numberExample": "091 123 4567"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "countryCode": "FK",
      "dialCode": 
        "500"
       ,
      "numberExample": "51234"
    },
    {
      "name": "Faroe Islands",
      "countryCode": "FO",
      "dialCode": 
        "298"
       ,
      "numberExample": "211234"
    },
    {
      "name": "Fiji",
      "countryCode": "FJ",
      "dialCode": 
        "679"
       ,
      "numberExample": "701 2345"
    },
    {
      "name": "Finland",
      "countryCode": "FI",
      "dialCode": 
        "358"
       ,
      "numberExample": "041 2345678"
    },
    {
      "name": "France",
      "countryCode": "FR",
      "dialCode": 
        "33"
       ,
      "numberExample": "06 12 34 56 78"
    },
    {
      "name": "French Guiana",
      "countryCode": "GF",
      "dialCode": 
        "594"
       ,
      "numberExample": "0694 20 12 34"
    },
    {
      "name": "French Polynesia",
      "countryCode": "PF",
      "dialCode": 
        "689"
       ,
      "numberExample": "87 12 34 56"
    },
    {
      "name": "Gabon",
      "countryCode": "GA",
      "dialCode": 
        "241"
       ,
      "numberExample": "06 03 12 34"
    },
    {
      "name": "Gambia",
      "countryCode": "GM",
      "dialCode": 
        "220"
       ,
      "numberExample": "301 2345"
    },
    {
      "name": "Georgia",
      "countryCode": "GE",
      "dialCode": 
        "995"
       ,
      "numberExample": "555 12 34 56"
    },
    {
      "name": "Germany",
      "countryCode": "DE",
      "dialCode": 
        "49"
       ,
      "numberExample": "01512 3456789"
    },
    {
      "name": "Ghana",
      "countryCode": "GH",
      "dialCode": 
        "233"
       ,
      "numberExample": "023 123 4567"
    },
    {
      "name": "Gibraltar",
      "countryCode": "GI",
      "dialCode": 
        "350"
       ,
      "numberExample": "57123456"
    },
    {
      "name": "Greece",
      "countryCode": "GR",
      "dialCode": 
        "30"
       ,
      "numberExample": "691 234 5678"
    },
    {
      "name": "Greenland",
      "countryCode": "GL",
      "dialCode": 
        "299"
       ,
      "numberExample": "22 12 34"
    },
    {
      "name": "Grenada",
      "countryCode": "GD",
      "dialCode": 
        "1473"
       ,
      "numberExample": "(473) 403-1234"
    },
    {
      "name": "Guadeloupe",
      "countryCode": "GP",
      "dialCode": 
        "590"
       ,
      "numberExample": "0690 00 12 34"
    },
    {
      "name": "Guam",
      "countryCode": "GU",
      "dialCode": 
        "1671"
       ,
      "numberExample": "(671) 300-1234"
    },
    {
      "name": "Guatemala",
      "countryCode": "GT",
      "dialCode": 
        "502"
       ,
      "numberExample": "5123 4567"
    },
    {
      "name": "Guernsey",
      "countryCode": "GG",
      "dialCode": 
        "44"
       ,
      "numberExample": "07781 123456"
    },
    {
      "name": "Guinea",
      "countryCode": "GN",
      "dialCode": 
        "224"
       ,
      "numberExample": "601 12 34 56"
    },
    {
      "name": "Guinea-Bissau",
      "countryCode": "GW",
      "dialCode": 
        "245"
       ,
      "numberExample": "955 012 345"
    },
    {
      "name": "Guyana",
      "countryCode": "GY",
      "dialCode": 
        "592"
       ,
      "numberExample": "609 1234"
    },
    {
      "name": "Haiti",
      "countryCode": "HT",
      "dialCode": 
        "509"
       ,
      "numberExample": "34 10 1234"
    },
    {
      "name": "Holy See",
      "countryCode": "VA",
      "dialCode": 
        "379"
       ,
      "numberExample": ""
    },
    {
      "name": "Honduras",
      "countryCode": "HN",
      "dialCode": 
        "504"
       ,
      "numberExample": "9123-4567"
    },
    {
      "name": "Hong Kong",
      "countryCode": "HK",
      "dialCode": 
        "852"
       ,
      "numberExample": "5123 4567"
    },
    {
      "name": "Hungary",
      "countryCode": "HU",
      "dialCode": 
        "36"
       ,
      "numberExample": "(20) 123 4567"
    },
    {
      "name": "Iceland",
      "countryCode": "IS",
      "dialCode": 
        "354"
       ,
      "numberExample": "611 1234"
    },
    {
      "name": "India",
      "countryCode": "IN",
      "dialCode": 
        "91"
       ,
      "numberExample": "081234 56789"
    },
    {
      "name": "Indonesia",
      "countryCode": "ID",
      "dialCode": 
        "62"
       ,
      "numberExample": "0812-345-678"
    },
    {
      "name": "Côte d'Ivoire",
      "countryCode": "CI",
      "dialCode": 
        "225"
       ,
      "numberExample": "01 23 45 67"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "countryCode": "IR",
      "dialCode": 
        "98"
       ,
      "numberExample": "0912 345 6789"
    },
    {
      "name": "Iraq",
      "countryCode": "IQ",
      "dialCode": 
        "964"
       ,
      "numberExample": "0791 234 5678"
    },
    {
      "name": "Ireland",
      "countryCode": "IE",
      "dialCode": 
        "353"
       ,
      "numberExample": "085 012 3456"
    },
    {
      "name": "Isle of Man",
      "countryCode": "IM",
      "dialCode": 
        "44"
       ,
      "numberExample": "07924 123456"
    },
    {
      "name": "Israel",
      "countryCode": "IL",
      "dialCode": 
        "972"
       ,
      "numberExample": "050-123-4567"
    },
    {
      "name": "Italy",
      "countryCode": "IT",
      "dialCode": 
        "39"
       ,
      "numberExample": "312 345 6789"
    },
    {
      "name": "Jamaica",
      "countryCode": "JM",
      "dialCode": 
        "1876"
       ,
      "numberExample": "(876) 210-1234"
    },
    {
      "name": "Japan",
      "countryCode": "JP",
      "dialCode": 
        "81"
       ,
      "numberExample": "090-1234-5678"
    },
    {
      "name": "Jersey",
      "countryCode": "JE",
      "dialCode": 
        "44"
       ,
      "numberExample": "07797 712345"
    },
    {
      "name": "Jordan",
      "countryCode": "JO",
      "dialCode": 
        "962"
       ,
      "numberExample": "07 9012 3456"
    },
    {
      "name": "Kazakhstan",
      "countryCode": "KZ",
      "dialCode": 
        "76",
      "numberExample": "8 (771) 000 9998"
    },
    {
      "name": "Kenya",
      "countryCode": "KE",
      "dialCode": 
        "254"
       ,
      "numberExample": "0712 123456"
    },
    {
      "name": "Kiribati",
      "countryCode": "KI",
      "dialCode": 
        "686"
       ,
      "numberExample": "72001234"
    },
    {
      "name": "Kuwait",
      "countryCode": "KW",
      "dialCode": 
        "965"
       ,
      "numberExample": "500 12345"
    },
    {
      "name": "Kyrgyzstan",
      "countryCode": "KG",
      "dialCode": 
        "996"
       ,
      "numberExample": "0700 123 456"
    },
    {
      "name": "Lao People's Democratic Republic",
      "countryCode": "LA",
      "dialCode": 
        "856"
       ,
      "numberExample": "020 23 123 456"
    },
    {
      "name": "Latvia",
      "countryCode": "LV",
      "dialCode": 
        "371"
       ,
      "numberExample": "21 234 567"
    },
    {
      "name": "Lebanon",
      "countryCode": "LB",
      "dialCode": 
        "961"
       ,
      "numberExample": "71 123 456"
    },
    {
      "name": "Lesotho",
      "countryCode": "LS",
      "dialCode": 
        "266"
       ,
      "numberExample": "5012 3456"
    },
    {
      "name": "Liberia",
      "countryCode": "LR",
      "dialCode": 
        "231"
       ,
      "numberExample": "077 012 3456"
    },
    {
      "name": "Libya",
      "countryCode": "LY",
      "dialCode": 
        "218"
       ,
      "numberExample": "091-2345678"
    },
    {
      "name": "Liechtenstein",
      "countryCode": "LI",
      "dialCode": 
        "423"
       ,
      "numberExample": "660 234 567"
    },
    {
      "name": "Lithuania",
      "countryCode": "LT",
      "dialCode": 
        "370"
       ,
      "numberExample": "(8-612) 34567"
    },
    {
      "name": "Luxembourg",
      "countryCode": "LU",
      "dialCode": 
        "352"
       ,
      "numberExample": "628 123 456"
    },
    {
      "name": "Macao",
      "countryCode": "MO",
      "dialCode": 
        "853"
       ,
      "numberExample": "6612 3456"
    },
    {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "countryCode": "MK",
      "dialCode": 
        "389"
       ,
      "numberExample": "072 345 678"
    },
    {
      "name": "Madagascar",
      "countryCode": "MG",
      "dialCode": 
        "261"
       ,
      "numberExample": "032 12 345 67"
    },
    {
      "name": "Malawi",
      "countryCode": "MW",
      "dialCode": 
        "265"
       ,
      "numberExample": "0991 23 45 67"
    },
    {
      "name": "Malaysia",
      "countryCode": "MY",
      "dialCode": 
        "60"
       ,
      "numberExample": "012-345 6789"
    },
    {
      "name": "Maldives",
      "countryCode": "MV",
      "dialCode": 
        "960"
       ,
      "numberExample": "771-2345"
    },
    {
      "name": "Mali",
      "countryCode": "ML",
      "dialCode": 
        "223"
       ,
      "numberExample": "65 01 23 45"
    },
    {
      "name": "Malta",
      "countryCode": "MT",
      "dialCode": 
        "356"
       ,
      "numberExample": "9696 1234"
    },
    {
      "name": "Marshall Islands",
      "countryCode": "MH",
      "dialCode": 
        "692"
       ,
      "numberExample": "235-1234"
    },
    {
      "name": "Martinique",
      "countryCode": "MQ",
      "dialCode": 
        "596"
       ,
      "numberExample": "0696 20 12 34"
    },
    {
      "name": "Mauritania",
      "countryCode": "MR",
      "dialCode": 
        "222"
       ,
      "numberExample": "22 12 34 56"
    },
    {
      "name": "Mauritius",
      "countryCode": "MU",
      "dialCode": 
        "230"
       ,
      "numberExample": "5251 2345"
    },
    {
      "name": "Mayotte",
      "countryCode": "YT",
      "dialCode": 
        "262"
       ,
      "numberExample": "0639 01 23 45"
    },
    {
      "name": "Mexico",
      "countryCode": "MX",
      "dialCode": 
        "52"
       ,
      "numberExample": "044 222 123 4567"
    },
    {
      "name": "Micronesia (Federated States of)",
      "countryCode": "FM",
      "dialCode": 
        "691"
       ,
      "numberExample": "350 1234"
    },
    {
      "name": "Moldova (Republic of)",
      "countryCode": "MD",
      "dialCode": 
        "373"
       ,
      "numberExample": "0621 12 345"
    },
    {
      "name": "Monaco",
      "countryCode": "MC",
      "dialCode": 
        "377"
       ,
      "numberExample": "06 12 34 56 78"
    },
    {
      "name": "Mongolia",
      "countryCode": "MN",
      "dialCode": 
        "976"
       ,
      "numberExample": "8812 3456"
    },
    {
      "name": "Montenegro",
      "countryCode": "ME",
      "dialCode": 
        "382"
       ,
      "numberExample": "067 622 901"
    },
    {
      "name": "Montserrat",
      "countryCode": "MS",
      "dialCode": 
        "1664"
       ,
      "numberExample": "(664) 492-3456"
    },
    {
      "name": "Morocco",
      "countryCode": "MA",
      "dialCode": 
        "212"
       ,
      "numberExample": "0650-123456"
    },
    {
      "name": "Mozambique",
      "countryCode": "MZ",
      "dialCode": 
        "258"
       ,
      "numberExample": "82 123 4567"
    },
    {
      "name": "Myanmar",
      "countryCode": "MM",
      "dialCode": 
        "95"
       ,
      "numberExample": "09 212 3456"
    },
    {
      "name": "Namibia",
      "countryCode": "NA",
      "dialCode": 
        "264"
       ,
      "numberExample": "081 123 4567"
    },
    {
      "name": "Nauru",
      "countryCode": "NR",
      "dialCode": 
        "674"
       ,
      "numberExample": "555 1234"
    },
    {
      "name": "Nepal",
      "countryCode": "NP",
      "dialCode": 
        "977"
       ,
      "numberExample": "984-1234567"
    },
    {
      "name": "Netherlands",
      "countryCode": "NL",
      "dialCode": 
        "31"
       ,
      "numberExample": "06 12345678"
    },
    {
      "name": "New Caledonia",
      "countryCode": "NC",
      "dialCode": 
        "687"
       ,
      "numberExample": "75.12.34"
    },
    {
      "name": "New Zealand",
      "countryCode": "NZ",
      "dialCode": 
        "64"
       ,
      "numberExample": "021 123 4567"
    },
    {
      "name": "Nicaragua",
      "countryCode": "NI",
      "dialCode": 
        "505"
       ,
      "numberExample": "8123 4567"
    },
    {
      "name": "Niger",
      "countryCode": "NE",
      "dialCode": 
        "227"
       ,
      "numberExample": "93 12 34 56"
    },
    {
      "name": "Nigeria",
      "countryCode": "NG",
      "dialCode": 
        "234"
       ,
      "numberExample": "0802 123 4567"
    },
    {
      "name": "Niue",
      "countryCode": "NU",
      "dialCode": 
        "683"
       ,
      "numberExample": "1234"
    },
    {
      "name": "Norfolk Island",
      "countryCode": "NF",
      "dialCode": 
        "672"
       ,
      "numberExample": "3 81234"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "countryCode": "KP",
      "dialCode": 
        "850"
       ,
      "numberExample": "0192 123 4567"
    },
    {
      "name": "Northern Mariana Islands",
      "countryCode": "MP",
      "dialCode": 
        "1670"
       ,
      "numberExample": "(670) 234-5678"
    },
    {
      "name": "Norway",
      "countryCode": "NO",
      "dialCode": 
        "47"
       ,
      "numberExample": "406 12 345"
    },
    {
      "name": "Oman",
      "countryCode": "OM",
      "dialCode": 
        "968"
       ,
      "numberExample": "9212 3456"
    },
    {
      "name": "Pakistan",
      "countryCode": "PK",
      "dialCode": 
        "92"
       ,
      "numberExample": "0301 2345678"
    },
    {
      "name": "Palau",
      "countryCode": "PW",
      "dialCode": 
        "680"
       ,
      "numberExample": "620 1234"
    },
    {
      "name": "Palestine, State of",
      "countryCode": "PS",
      "dialCode": 
        "970"
       ,
      "numberExample": "0599 123 456"
    },
    {
      "name": "Panama",
      "countryCode": "PA",
      "dialCode": 
        "507"
       ,
      "numberExample": "6123-4567"
    },
    {
      "name": "Papua New Guinea",
      "countryCode": "PG",
      "dialCode": 
        "675"
       ,
      "numberExample": "7012 3456"
    },
    {
      "name": "Paraguay",
      "countryCode": "PY",
      "dialCode": 
        "595"
       ,
      "numberExample": "0961 456789"
    },
    {
      "name": "Peru",
      "countryCode": "PE",
      "dialCode": 
        "51"
       ,
      "numberExample": "912 345 678"
    },
    {
      "name": "Philippines",
      "countryCode": "PH",
      "dialCode": 
        "63"
       ,
      "numberExample": "0905 123 4567"
    },
    {
      "name": "Pitcairn",
      "countryCode": "PN",
      "dialCode": 
        "64"
       ,
      "numberExample": ""
    },
    {
      "name": "Poland",
      "countryCode": "PL",
      "dialCode": 
        "48"
       ,
      "numberExample": "512 345 678"
    },
    {
      "name": "Portugal",
      "countryCode": "PT",
      "dialCode": 
        "351"
       ,
      "numberExample": "912 345 678"
    },
    {
      "name": "Puerto Rico",
      "countryCode": "PR",
      "dialCode": 
        "1"
       ,
      "numberExample": "(787) 234-5678"
    },
    {
      "name": "Qatar",
      "countryCode": "QA",
      "dialCode": 
        "974"
       ,
      "numberExample": "3312 3456"
    },
    {
      "name": "Republic of Kosovo",
      "countryCode": "XK",
      "dialCode": 
        "383"
       ,
      "numberExample": "043 201 234"
    },
    {
      "name": "Réunion",
      "countryCode": "RE",
      "dialCode": 
        "262"
       ,
      "numberExample": "0692 12 34 56"
    },
    {
      "name": "Romania",
      "countryCode": "RO",
      "dialCode": 
        "40"
       ,
      "numberExample": "0712 034 567"
    },
    {
      "name": "Russian Federation",
      "countryCode": "RU",
      "dialCode": 
        "7"
       ,
      "numberExample": "8 (912) 345-67-89"
    },
    {
      "name": "Rwanda",
      "countryCode": "RW",
      "dialCode": 
        "250"
       ,
      "numberExample": "0720 123 456"
    },
    {
      "name": "Saint Barthélemy",
      "countryCode": "BL",
      "dialCode": 
        "590"
       ,
      "numberExample": "0690 00 12 34"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "countryCode": "SH",
      "dialCode": 
        "290"
       ,
      "numberExample": "51234"
    },
    {
      "name": "Saint Kitts and Nevis",
      "countryCode": "KN",
      "dialCode": 
        "1869"
       ,
      "numberExample": "(869) 765-2917"
    },
    {
      "name": "Saint Lucia",
      "countryCode": "LC",
      "dialCode": 
        "1758"
       ,
      "numberExample": "(758) 284-5678"
    },
    {
      "name": "Saint Martin (French part)",
      "countryCode": "MF",
      "dialCode": 
        "590"
       ,
      "numberExample": "0690 00 12 34"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "countryCode": "PM",
      "dialCode": 
        "508"
       ,
      "numberExample": "055 12 34"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "countryCode": "VC",
      "dialCode": 
        "1784"
       ,
      "numberExample": "(784) 430-1234"
    },
    {
      "name": "Samoa",
      "countryCode": "WS",
      "dialCode": 
        "685"
       ,
      "numberExample": "72 12345"
    },
    {
      "name": "San Marino",
      "countryCode": "SM",
      "dialCode": 
        "378"
       ,
      "numberExample": "66 66 12 12"
    },
    {
      "name": "Sao Tome and Principe",
      "countryCode": "ST",
      "dialCode": 
        "239"
       ,
      "numberExample": "981 2345"
    },
    {
      "name": "Saudi Arabia",
      "countryCode": "SA",
      "dialCode": 
        "966"
       ,
      "numberExample": "051 234 5678"
    },
    {
      "name": "Senegal",
      "countryCode": "SN",
      "dialCode": 
        "221"
       ,
      "numberExample": "70 123 45 67"
    },
    {
      "name": "Serbia",
      "countryCode": "RS",
      "dialCode": 
        "381"
       ,
      "numberExample": "060 1234567"
    },
    {
      "name": "Seychelles",
      "countryCode": "SC",
      "dialCode": 
        "248"
       ,
      "numberExample": "2 510 123"
    },
    {
      "name": "Sierra Leone",
      "countryCode": "SL",
      "dialCode": 
        "232"
       ,
      "numberExample": "(025) 123456"
    },
    {
      "name": "Singapore",
      "countryCode": "SG",
      "dialCode": 
        "65"
       ,
      "numberExample": "8123 4567"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "countryCode": "SX",
      "dialCode": 
        "1721"
       ,
      "numberExample": "(721) 520-5678"
    },
    {
      "name": "Slovakia",
      "countryCode": "SK",
      "dialCode": 
        "421"
       ,
      "numberExample": "0912 123 456"
    },
    {
      "name": "Slovenia",
      "countryCode": "SI",
      "dialCode": 
        "386"
       ,
      "numberExample": "031 234 567"
    },
    {
      "name": "Solomon Islands",
      "countryCode": "SB",
      "dialCode": 
        "677"
       ,
      "numberExample": "74 21234"
    },
    {
      "name": "Somalia",
      "countryCode": "SO",
      "dialCode": 
        "252"
       ,
      "numberExample": "7 1123456"
    },
    {
      "name": "South Africa",
      "countryCode": "ZA",
      "dialCode": 
        "27"
       ,
      "numberExample": "071 123 4567"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "countryCode": "GS",
      "dialCode": 
        "500"
       ,
      "numberExample": ""
    },
    {
      "name": "Korea (Republic of)",
      "countryCode": "KR",
      "dialCode": 
        "82"
       ,
      "numberExample": "010-0000-0000"
    },
    {
      "name": "South Sudan",
      "countryCode": "SS",
      "dialCode": 
        "211"
       ,
      "numberExample": "0977 123 456"
    },
    {
      "name": "Spain",
      "countryCode": "ES",
      "dialCode": 
        "34"
       ,
      "numberExample": "612 34 56 78"
    },
    {
      "name": "Sri Lanka",
      "countryCode": "LK",
      "dialCode": 
        "94"
       ,
      "numberExample": "071 234 5678"
    },
    {
      "name": "Sudan",
      "countryCode": "SD",
      "dialCode": 
        "249"
       ,
      "numberExample": "091 123 1234"
    },
    {
      "name": "Suriname",
      "countryCode": "SR",
      "dialCode": 
        "597"
       ,
      "numberExample": "741-2345"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "countryCode": "SJ",
      "dialCode": 
        "4779"
       ,
      "numberExample": "412 34 567"
    },
    {
      "name": "Swaziland",
      "countryCode": "SZ",
      "dialCode": 
        "268"
       ,
      "numberExample": "7612 3456"
    },
    {
      "name": "Sweden",
      "countryCode": "SE",
      "dialCode": 
        "46"
       ,
      "numberExample": "070-123 45 67"
    },
    {
      "name": "Switzerland",
      "countryCode": "CH",
      "dialCode": 
        "41"
       ,
      "numberExample": "078 123 45 67"
    },
    {
      "name": "Syrian Arab Republic",
      "countryCode": "SY",
      "dialCode": 
        "963"
       ,
      "numberExample": "0944 567 890"
    },
    {
      "name": "Taiwan",
      "countryCode": "TW",
      "dialCode": 
        "886"
       ,
      "numberExample": "0912 345 678"
    },
    {
      "name": "Tajikistan",
      "countryCode": "TJ",
      "dialCode": 
        "992"
       ,
      "numberExample": "917 12 3456"
    },
    {
      "name": "Tanzania, United Republic of",
      "countryCode": "TZ",
      "dialCode": 
        "255"
       ,
      "numberExample": "0621 234 567"
    },
    {
      "name": "Thailand",
      "countryCode": "TH",
      "dialCode": 
        "66"
       ,
      "numberExample": "081 234 5678"
    },
    {
      "name": "Timor-Leste",
      "countryCode": "TL",
      "dialCode": 
        "670"
       ,
      "numberExample": "7721 2345"
    },
    {
      "name": "Togo",
      "countryCode": "TG",
      "dialCode": 
        "228"
       ,
      "numberExample": "90 11 23 45"
    },
    {
      "name": "Tokelau",
      "countryCode": "TK",
      "dialCode": 
        "690"
       ,
      "numberExample": "7290"
    },
    {
      "name": "Tonga",
      "countryCode": "TO",
      "dialCode": 
        "676"
       ,
      "numberExample": "771 5123"
    },
    {
      "name": "Trinidad and Tobago",
      "countryCode": "TT",
      "dialCode": 
        "1868"
       ,
      "numberExample": "(868) 291-1234"
    },
    {
      "name": "Tunisia",
      "countryCode": "TN",
      "dialCode": 
        "216"
       ,
      "numberExample": "20 123 456"
    },
    {
      "name": "Turkey",
      "countryCode": "TR",
      "dialCode": 
        "90"
       ,
      "numberExample": "0501 234 56 78"
    },
    {
      "name": "Turkmenistan",
      "countryCode": "TM",
      "dialCode": 
        "993"
       ,
      "numberExample": "8 66 123456"
    },
    {
      "name": "Turks and Caicos Islands",
      "countryCode": "TC",
      "dialCode": 
        "1649"
       ,
      "numberExample": "(649) 231-1234"
    },
    {
      "name": "Tuvalu",
      "countryCode": "TV",
      "dialCode": 
        "688"
       ,
      "numberExample": "901234"
    },
    {
      "name": "Uganda",
      "countryCode": "UG",
      "dialCode": 
        "256"
       ,
      "numberExample": "0712 345678"
    },
    {
      "name": "Ukraine",
      "countryCode": "UA",
      "dialCode": 
        "380"
       ,
      "numberExample": "039 123 4567"
    },
    {
      "name": "United Arab Emirates",
      "countryCode": "AE",
      "dialCode": 
        "971"
       ,
      "numberExample": "050 123 4567"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "countryCode": "GB",
      "dialCode": 
        "44"
       ,
      "numberExample": "07400 123456"
    },
   
    {
      "name": "Uruguay",
      "countryCode": "UY",
      "dialCode": 
        "598"
       ,
      "numberExample": "094 231 234"
    },
    {
      "name": "Uzbekistan",
      "countryCode": "UZ",
      "dialCode": 
        "998"
       ,
      "numberExample": "8 91 234 56 78"
    },
    {
      "name": "Vanuatu",
      "countryCode": "VU",
      "dialCode":
        "678"
       ,
      "numberExample": "591 2345"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "countryCode": "VE",
      "dialCode":
        "58"
       ,
      "numberExample": "0412-1234567"
    },
    {
      "name": "Viet Nam",
      "countryCode": "VN",
      "dialCode":
        "84"
       ,
      "numberExample": "091 234 56 78"
    },
    {
      "name": "Wallis and Futuna",
      "countryCode": "WF",
      "dialCode":
        "681"
       ,
      "numberExample": "50 12 34"
    },
    {
      "name": "Western Sahara",
      "countryCode": "EH",
      "dialCode":
        "212"
       ,
      "numberExample": "0650-123456"
    },
    {
      "name": "Yemen",
      "countryCode": "YE",
      "dialCode":
        "967"
       ,
      "numberExample": "0712 345 678"
    },
    {
      "name": "Zambia",
      "countryCode": "ZM",
      "dialCode":
        "260"
       ,
      "numberExample": "095 5123456"
    },
    {
      "name": "Zimbabwe",
      "countryCode": "ZW",
      "dialCode":
        "263"
       ,
      "numberExample": "071 234 5678"
    }
  ];
  topCountries = [
    {
      "name": "United States",
      "countryCode": "US",
      "dialCode":
        "1"
       ,
      "numberExample": "(201) 555-0123"
    },
  ]
  getLocales(locale: string): CountryCode {
    if (locale && this.locales.hasOwnProperty(locale)) {
      // User given locale
      return this.locales[locale];
    }
    // Default: en
    return this.locales['en'];
  }
}
