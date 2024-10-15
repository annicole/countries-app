export interface CountryType {
    capital: Array<string>;
    currencies: Currencies;
    name: CountryName;
    languages: Languages;
    population: number;
}

interface Languages {
    [key: string]: string
}

interface Currencies {
    [key: string]: Currency
}

export interface Currency {
    name: string;
    symbol: string
}

interface NativeName {
    official: string;
    common: string;
}

interface NativeNameRecord {
    [key: string]: NativeName
}

interface CountryName {
    common: string;
    nativeName: NativeNameRecord;
    official: string;
}


export interface CountryProps {
    name: string;
    capital: string;
    currencies: Currencies;
    languages: Languages;
    population: number;
}