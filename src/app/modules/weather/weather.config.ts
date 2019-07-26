export const MIN_SEACH_LENGTH = 2;
export const DAYS_AMOUNT = 40; // max 40 records free version
export const SAVE_ENABLE = true; // enable loading city after refresh

export const enum SEARCH_INPUT_CASES {
  City = 'city',
  Coords = 'coords'
}

export const enum SEARCH_ERROR_CASES {
  MinLength = 'minLength',
  NothingFound = 'nothingFound'
}
