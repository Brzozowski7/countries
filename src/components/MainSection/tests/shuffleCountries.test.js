import { shuffleCountries } from "../MainSection.utils";

describe("Shuffle array function", () => {
  test("Should return array in different order", () => {
    const input = [
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Germany", population: 1000, area: 100, region: "Europe" },
      { name: "France", population: 100, area: 3000, region: "Europe" },
      { name: "China", population: 3000, area: 1000, region: "Asia" },
      { name: "Brasil", population: 2000, area: 500, region: "Americas" },
    ];
    expect(shuffleCountries(input)).not.toBe(input);
  });
});
