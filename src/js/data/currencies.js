/**
 * Ripple default external currency list.
 *
 * Important: XRP must be the first entry in this list.
 */
module.exports = [

  // XRP - IMPORTANT: XRP must be first entry in this list
  {value: 'XRP', display_value: 'XRP', name: 'Ripple', standard_precision: 4, order: 5},

  // Fiat - Official ISO-4217
  // display_value used for display purposes only, display used for dropdown menu
  {value: 'USD', display_value: 'USD', name: 'US Dollar', display: true, standard_precision: 2, order: 4},
  {value: 'EUR', display_value: 'EUR', name: 'Euro', display: true, standard_precision: 2, order: 3},
  {value: 'JPY', display_value: 'JPY', name: 'Japanese Yen', display: true, standard_precision: 2, order: 0},
  {value: 'CNY', display_value: 'CNY', name: 'Chinese Yuan', display: true, standard_precision: 2, order: 0},
  {value: 'INR', display_value: 'INR', name: 'Indian Rupee', display: true, standard_precision: 2, order: 0},
  {value: 'RUB', display_value: 'RUB', name: 'Russian Ruble', display: true, standard_precision: 2, order: 0},
  {value: 'GBP', display_value: 'GBP', name: 'British Pound', display: true, standard_precision: 2, order: 0},
  {value: 'CAD', display_value: 'CAD', name: 'Canadian Dollar', display: true, standard_precision: 2, order: 0},
  {value: 'BRL', display_value: 'BRL', name: 'Brazilian Real', display: true, standard_precision: 2, order: 0},
  {value: 'CHF', display_value: 'CHF', name: 'Swiss Franc', display: true, standard_precision: 2, order: 0},
  {value: 'DKK', display_value: 'DKK', name: 'Danish Krone', display: true, standard_precision: 2, order: 0},
  {value: 'NOK', display_value: 'NOK', name: 'Norwegian Krone', display: true, standard_precision: 2, order: 0},
  {value: 'SEK', display_value: 'SEK', name: 'Swedish Krona', display: true, standard_precision: 2, order: 0},
  {value: 'CZK', display_value: 'CZK', name: 'Czech Koruna', display: true, standard_precision: 2, order: 0},
  {value: 'PLN', display_value: 'PLN', name: 'Polish Zloty', display: true, standard_precision: 2, order: 0},
  {value: 'AUD', display_value: 'AUD', name: 'Australian Dollar', display: true, standard_precision: 2, order: 0},
  {value: 'MXN', display_value: 'MXN', name: 'Mexican Peso', display: true, standard_precision: 2, order: 0},
  {value: 'KRW', display_value: 'KRW', name: 'South Korean Won', display: true, standard_precision: 2, order: 0},
  {value: 'TWD', display_value: 'TWD', name: 'New Taiwan Dollar', display: true, standard_precision: 2, order: 0},
  {value: 'HKD', display_value: 'HKD', name: 'Hong Kong Dollar', display: true, standard_precision: 2, order: 0},
  {value: 'KES', display_value: 'KES', name: 'Kenyan Shilling', display: true, standard_precision: 2, order: 0},
  {value: 'AMD', display_value: 'AMD', name: 'Armenian Drams', display: true, standard_precision: 2, order: 0},
  {value: 'RUR', display_value: 'RUR', name: 'Russian Rubles', display: true, standard_precision: 2, order: 0},
  {value: 'RON', display_value: 'RON', name: 'Romanian Leu', display: true, standard_precision: 2, order: 0},
  {value: 'NZD', display_value: 'NZD', name: 'New Zealand Dollar', display: true, standard_precision: 2, order: 0},
  {value: 'TRY', display_value: 'TRY', name: 'Turkish Lira', display: true, standard_precision: 2, order: 0},

  // Fiat currencies NOT SHOWN
  {value: 'AFN', display_value: 'AFN', name: 'Afghan Afghani', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ALL', display_value: 'ALL', name: 'Albanian Lek', display: false, standard_precision: 2, order: 0 },
  {value: 'DZD', display_value: 'DZD', name: 'Algerian Dinar', display: false, standard_precision: 2, order: 0 },
  {value: 'AOA', display_value: 'AOA', name: 'Angolan Kwanza Readjustado', display: false, standard_precision: 2, order: 0 }, 
  {value: 'XCD', display_value: 'XCD', name: 'East Caribbean Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ARS', display_value: 'ARS', name: 'Argentine peso', display: false, standard_precision: 2, order: 0 },
  {value: 'AWG', display_value: 'AWG', name: 'Aruban Florin', display: false, standard_precision: 2, order: 0 }, 
  {value: 'AZN', display_value: 'AZN', name: 'Azerbaijani Manat', display: false, standard_precision: 2, order: 0 }, 
  {value: 'BSD', display_value: 'BSD', name: 'Bahamian Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'BHD', display_value: 'BHD', name: 'Bahraini Dinar', display: false, standard_precision: 3, order: 0 },
  {value: 'BDT', display_value: 'BDT', name: 'Taka', display: false, standard_precision: 2, order: 0 },
  {value: 'BBD', display_value: 'BBD', name: 'Barbados Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'BYR', display_value: 'BYR', name: 'Belarussian Ruble', display: false, standard_precision: 0, order: 0 }, 
  {value: 'BZD', display_value: 'BZD', name: 'Belize Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'XOF', display_value: 'XOF', name: 'CFA Franc BCEAO', display: false, standard_precision: 0, order: 0 }, 
  {value: 'BMD', display_value: 'BMD', name: 'Bermudian Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'BTN', display_value: 'BTN', name: 'Ngultrum', display: false, standard_precision: 2, order: 0 },
  {value: 'BOB', display_value: 'BOB', name: 'Boliviano', display: false, standard_precision: 2, order: 0 },
  {value: 'BOV', display_value: 'BOV', name: 'Mvdol', display: false, standard_precision: 2, order: 0 }, 
  {value: 'BAM', display_value: 'BAM', name: 'Convertible Mark', display: false, standard_precision: 2, order: 0 }, 
  {value: 'BWP', display_value: 'BWP', name: 'Pula', display: false, standard_precision: 2, order: 0 },
  {value: 'BND', display_value: 'BND', name: 'Brunei Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'BGN', display_value: 'BGN', name: 'Bulgarian Lev', display: false, standard_precision: 2, order: 0 }, 
  {value: 'BIF', display_value: 'BIF', name: 'Burundi Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'KHR', display_value: 'KHR', name: 'Riel', display: false, standard_precision: 2, order: 0 }, 
  {value: 'XAF', display_value: 'XAF', name: 'CFA Franc BEAC', display: false, standard_precision: 0, order: 0 }, 
  {value: 'CVE', display_value: 'CVE', name: 'Cabo Verde Escudo', display: false, standard_precision: 2, order: 0 }, 
  {value: 'KYD', display_value: 'KYD', name: 'Cayman Islands Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CLF', display_value: 'CLF', name: 'Chilean Unidad de Formentos', display: false, standard_precision: 0, order: 0 }, 
  {value: 'CLP', display_value: 'CLP', name: 'Chilean Peso', display: false, standard_precision: 0, order: 0 }, 
  {value: 'COP', display_value: 'COP', name: 'Colombian Peso', display: false, standard_precision: 2, order: 0 }, 
  {value: 'COU', display_value: 'COU', name: 'Unidad de Valor Real', display: false, standard_precision: 2, order: 0 }, 
  {value: 'KMF', display_value: 'KMF', name: 'Comoro Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'CDF', display_value: 'CDF', name: 'Congolese Franc', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CRC', display_value: 'CRC', name: 'Costa Rican Colon', display: false, standard_precision: 2, order: 0 }, 
  {value: 'HRK', display_value: 'HRK', name: 'Croatian Kuna', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CUC', display_value: 'CUC', name: 'Peso Convertible', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CUP', display_value: 'CUP', name: 'Cuban Peso', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ANG', display_value: 'ANG', name: 'Netherlands Antillean Guilder', display: false, standard_precision: 2, order: 0 }, 
  {value: 'DJF', display_value: 'DJF', name: 'Djibouti Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'DOP', display_value: 'DOP', name: 'Dominican Peso', display: false, standard_precision: 2, order: 0 }, 
  {value: 'EGP', display_value: 'EGP', name: 'Egyptian Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SVC', display_value: 'SVC', name: 'El Salvador Colon', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ERN', display_value: 'ERN', name: 'Nakfa', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ETB', display_value: 'ETB', name: 'Ethiopian Birr', display: false, standard_precision: 2, order: 0 }, 
  {value: 'FKP', display_value: 'FKP', name: 'Falkland Islands Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'FJD', display_value: 'FJD', name: 'Fiji Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'XPF', display_value: 'XPF', name: 'CFP Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'GMD', display_value: 'GMD', name: 'Dalasi', display: false, standard_precision: 2, order: 0 }, 
  {value: 'GEL', display_value: 'GEL', name: 'Lari', display: false, standard_precision: 2, order: 0 }, 
  {value: 'GHS', display_value: 'GHS', name: 'Ghana Cedi', display: false, standard_precision: 2, order: 0 }, 
  {value: 'GIP', display_value: 'GIP', name: 'Gibraltar Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'GTQ', display_value: 'GTQ', name: 'Quetzal', display: false, standard_precision: 2, order: 0 }, 
  {value: 'GNF', display_value: 'GNF', name: 'Guinea Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'GYD', display_value: 'GYD', name: 'Guyana Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'HTG', display_value: 'HTG', name: 'Gourde', display: false, standard_precision: 2, order: 0 }, 
  {value: 'HNL', display_value: 'HNL', name: 'Lempira', display: false, standard_precision: 2, order: 0 }, 
  {value: 'HUF', display_value: 'HUF', name: 'Forint', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ISK', display_value: 'ISK', name: 'Iceland Krona', display: false, standard_precision: 0, order: 0 }, 
  {value: 'IDR', display_value: 'IDR', name: 'Indonesia Rupiah', display: false, standard_precision: 2, order: 0 }, 
  {value: 'IRR', display_value: 'IRR', name: 'Iranian Rial', display: false, standard_precision: 2, order: 0 }, 
  {value: 'IQD', display_value: 'IQD', name: 'Iraqi Dinar', display: false, standard_precision: 3, order: 0 }, 
  {value: 'ILS', display_value: 'ILS', name: 'New Israeli Sheqel', display: false, standard_precision: 2, order: 0 }, 
  {value: 'JMD', display_value: 'JMD', name: 'Jamaican Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'JOD', display_value: 'JOD', name: 'Jordanian Dinar', display: false, standard_precision: 3, order: 0 }, 
  {value: 'KZT', display_value: 'KZT', name: 'Tenge', display: false, standard_precision: 2, order: 0 }, 
  {value: 'KPW', display_value: 'KPW', name: 'North Korean Won', display: false, standard_precision: 2, order: 0 }, 
  {value: 'KWD', display_value: 'KWD', name: 'Kuwaiti Dinar', display: false, standard_precision: 3, order: 0 }, 
  {value: 'KGS', display_value: 'KGS', name: 'Som', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LAK', display_value: 'LAK', name: 'Kip', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LVL', display_value: 'LVL', name: 'Latvian Lats', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LBP', display_value: 'LBP', name: 'Lebanese Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LSL', display_value: 'LSL', name: 'Loti', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ZAR', display_value: 'ZAR', name: 'Rand', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LRD', display_value: 'LRD', name: 'Liberian Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LYD', display_value: 'LYD', name: 'Libyan Dinar', display: false, standard_precision: 3, order: 0 }, 
  {value: 'LTL', display_value: 'LTL', name: 'Lithuanian Litas', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MOP', display_value: 'MOP', name: 'Pataca', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MKD', display_value: 'MKD', name: 'Denar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MGA', display_value: 'MGA', name: 'Malagasy Ariary', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MWK', display_value: 'MWK', name: 'Kwacha', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MYR', display_value: 'MYR', name: 'Malaysian Ringgit', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MVR', display_value: 'MVR', name: 'Rufiyaa', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MRO', display_value: 'MRO', name: 'Ouguiya', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MUR', display_value: 'MUR', name: 'Mauritius Rupee', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MXV', display_value: 'MXV', name: 'Mexican Unidad de Inversion (UDI)', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MDL', display_value: 'MDL', name: 'Moldovan Leu', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MNT', display_value: 'MNT', name: 'Tugrik', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MAD', display_value: 'MAD', name: 'Moroccan Dirham', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MZN', display_value: 'MZN', name: 'Mozambique Metical', display: false, standard_precision: 2, order: 0 }, 
  {value: 'MMK', display_value: 'MMK', name: 'Kyat', display: false, standard_precision: 2, order: 0 }, 
  {value: 'NAD', display_value: 'NAD', name: 'Namibia Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'NPR', display_value: 'NPR', name: 'Nepalese Rupee', display: false, standard_precision: 2, order: 0 }, 
  {value: 'NIO', display_value: 'NIO', name: 'Cordoba Oro', display: false, standard_precision: 2, order: 0 }, 
  {value: 'NGN', display_value: 'NGN', name: 'Naira', display: false, standard_precision: 2, order: 0 }, 
  {value: 'OMR', display_value: 'OMR', name: 'Rial Omani', display: false, standard_precision: 3, order: 0 }, 
  {value: 'PKR', display_value: 'PKR', name: 'Pakistan Rupee', display: false, standard_precision: 2, order: 0 }, 
  {value: 'PAB', display_value: 'PAB', name: 'Balboa', display: false, standard_precision: 2, order: 0 }, 
  {value: 'PGK', display_value: 'PGK', name: 'Kina', display: false, standard_precision: 2, order: 0 }, 
  {value: 'PYG', display_value: 'PYG', name: 'Guarani', display: false, standard_precision: 0, order: 0 }, 
  {value: 'PEN', display_value: 'PEN', name: 'Nuevo Sol', display: false, standard_precision: 2, order: 0 }, 
  {value: 'PHP', display_value: 'PHP', name: 'Philippine Peso', display: false, standard_precision: 2, order: 0 }, 
  {value: 'QAR', display_value: 'QAR', name: 'Qatari Rial', display: false, standard_precision: 2, order: 0 }, 
  {value: 'RWF', display_value: 'RWF', name: 'Rwanda Franc', display: false, standard_precision: 0, order: 0 }, 
  {value: 'SHP', display_value: 'SHP', name: 'Saint Helena Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'WST', display_value: 'WST', name: 'Tala', display: false, standard_precision: 2, order: 0 }, 
  {value: 'STD', display_value: 'STD', name: 'Dobra', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SAR', display_value: 'SAR', name: 'Saudi Riyal', display: false, standard_precision: 2, order: 0 }, 
  {value: 'RSD', display_value: 'RSD', name: 'Serbian Dinar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SCR', display_value: 'SCR', name: 'Seychelles Rupee', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SLL', display_value: 'SLL', name: 'Leone', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SGD', display_value: 'SGD', name: 'Singapore Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SBD', display_value: 'SBD', name: 'Solomon Islands Dollar', display: false, standard_precision: 2, order: 0 },
  {value: 'SOS', display_value: 'SOS', name: 'Somali Shilling', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SSP', display_value: 'SSP', name: 'South Sudanese Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'LKR', display_value: 'LKR', name: 'Sri Lanka Rupee', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SDG', display_value: 'SDG', name: 'Sudanese Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SRD', display_value: 'SRD', name: 'Surinam Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SZL', display_value: 'SZL', name: 'Lilangeni', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CHE', display_value: 'CHE', name: 'WIR Euro', display: false, standard_precision: 2, order: 0 }, 
  {value: 'CHW', display_value: 'CHW', name: 'WIR Franc', display: false, standard_precision: 2, order: 0 }, 
  {value: 'SYP', display_value: 'SYP', name: 'Syrian Pound', display: false, standard_precision: 2, order: 0 }, 
  {value: 'TJS', display_value: 'TJS', name: 'Somoni', display: false, standard_precision: 2, order: 0 }, 
  {value: 'TZS', display_value: 'TZS', name: 'Tanzanian Shilling', display: false, standard_precision: 2, order: 0 }, 
  {value: 'THB', display_value: 'THB', name: 'Thai Baht', display: false, standard_precision: 2, order: 0 }, 
  {value: 'TOP', display_value: 'TOP', name: 'Pa’anga', display: false, standard_precision: 2, order: 0 }, 
  {value: 'TTD', display_value: 'TTD', name: 'Trinidad and Tobago Dollar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'TND', display_value: 'TND', name: 'Tunisian Dinar', display: false, standard_precision: 3, order: 0 }, 
  {value: 'TMT', display_value: 'TMT', name: 'Turkmenistan New Manat', display: false, standard_precision: 2, order: 0 }, 
  {value: 'UGX', display_value: 'UGX', name: 'Uganda Shilling', display: false, standard_precision: 0, order: 0 }, 
  {value: 'UAH', display_value: 'UAH', name: 'Hryvnia', display: false, standard_precision: 2, order: 0 }, 
  {value: 'AED', display_value: 'AED', name: 'UAE Dirham', display: false, standard_precision: 2, order: 0 }, 
  {value: 'USN', display_value: 'USN', name: 'US Dollar (Next day)', display: false, standard_precision: 2, order: 0 }, 
  {value: 'USS', display_value: 'USS', name: 'US Dollar (Same day)', display: false, standard_precision: 2, order: 0 }, 
  {value: 'UYI', display_value: 'UYI', name: 'Uruguay Peso en Unidades Indexadas (URUIURUI)', display: false, standard_precision: 0, order: 0 }, 
  {value: 'UYU', display_value: 'UYU', name: 'Peso Uruguayo', display: false, standard_precision: 2, order: 0 }, 
  {value: 'UZS', display_value: 'UZS', name: 'Uzbekistan Sum', display: false, standard_precision: 2, order: 0 }, 
  {value: 'VUV', display_value: 'VUV', name: 'Vatu', display: false, standard_precision: 0, order: 0 }, 
  {value: 'VEF', display_value: 'VEF', name: 'Bolivar', display: false, standard_precision: 2, order: 0 }, 
  {value: 'VND', display_value: 'VND', name: 'Dong', display: false, standard_precision: 0, order: 0 }, 
  {value: 'YER', display_value: 'YER', name: 'Yemeni Rial', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ZMK', display_value: 'ZMK', name: 'Zambian Kwacha', display: false, standard_precision: 2, order: 0 }, 
  {value: 'ZWL', display_value: 'ZWL', name: 'Zimbabwean Dollar', display: false, standard_precision: 2, order: 0 },

  // Precious Metals
  {value: 'XAU', display_value: 'XAU', name: 'Gold', display: true, standard_precision: 2, order: 0},
  {value: 'XAU (-0.5%pa)', display_value: 'XAU (GBI)', name: 'Gold', display: true, standard_precision: 2, order: 0},
  {value: 'XAG', display_value: 'XAG', name: 'Silver', display: false, standard_precision: 2, order: 0},
  {value: 'XPT', display_value: 'XPT', name: 'Platinum', display: false, standard_precision: 2, order: 0},

  // Cryptocurrencies
  {value: 'BTC', display_value: 'BTC', name: 'Bitcoin', display: true, standard_precision: 4, order: 2},
  {value: 'LTC', display_value: 'LTC', name: 'Litecoin', display: true, standard_precision: 4, order: 1}
];
