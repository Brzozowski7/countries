import { find } from "../MainSection.utils";

describe("Searching for strings function (ignoring case sensivity)", () => {
  const input = {
    name: "Colombia",
    topLevelDomain: [".co"],
    alpha2Code: "CO",
    alpha3Code: "COL",
    callingCodes: ["57"],
    capital: "Bogotá",
    altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
    region: "South America",
    continent: "Americas",
    population: 48759958,
    latlng: [4.0, -72.0],
    demonym: "Colombian",
    area: 1141748.0,
    gini: 55.9,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    nativeName: "Colombia",
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],
    translations: {
      br: "Colômbia",
      pt: "Colômbia",
      nl: "Colombia",
      hr: "Kolumbija",
      fa: "کلمبیا",
      de: "Kolumbien",
      es: "Colombia",
      fr: "Colombie",
      ja: "コロンビア",
      it: "Colombia",
      hu: "Kolumbia",
    },
    flags: [
      "https://restcountries.com/data/col.svg",
      "https://restcountries.com/data/png/col.png",
    ],
    regionalBlocs: [
      {
        acronym: "PA",
        name: "Pacific Alliance",
        otherNames: ["Alianza del Pacífico"],
      },
      {
        acronym: "USAN",
        name: "Union of South American Nations",
        otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
        otherNames: [
          "Unión de Naciones Suramericanas",
          "União de Nações Sul-Americanas",
          "Unie van Zuid-Amerikaanse Naties",
          "South American Union",
        ],
      },
    ],
    cioc: "COL",
    independent: true,
  };
  test.each([
    { wordToLookFor: "South American Nations", expected: true },
    { wordToLookFor: "Español", expected: true },
    { wordToLookFor: "Poland", expected: false },
    { wordToLookFor: "BOGotá", expected: true },
    { wordToLookFor: "コロンビア", expected: true },
    { wordToLookFor: "Wqw21Q", expected: false },
    { wordToLookFor: "BOGooatá", expected: false },
  ])(
    "checking if wordToLookFor exists in input and returns expected",
    ({ wordToLookFor, expected }) => {
      expect(find(input, wordToLookFor)).toBe(expected);
    }
  );
});
