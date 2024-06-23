export interface Root {
    categories: Categories
  }
  
  export interface Categories {
    Movies: Movy[]
    "TV Shows": Show[]
    Countries: Country[]
    "Capital Cities": City[]
    Animals: Animal[]
    Sports: Sport[]
  }
  export type Category = Movy | Show | Country | City | Animal | Sport;
  export type CategoryArr = Movy[] | Show[] | Country[] | City[] | Animal[] | Sport[];
  export interface Movy {
    name: string
    selected: boolean
  }
  
  export interface Show {
    name: string
    selected: boolean
  }
  
  export interface Country {
    name: string
    selected: boolean
  }
  
  export interface City {
    name: string
    selected: boolean
  }
  
  export interface Animal {
    name: string
    selected: boolean
  }
  
  export interface Sport {
    name: string
    selected: boolean
  }