import { sortCountries } from "../MainSection.utils";
import { sortByList } from "../../../misc/sortByList";

describe("Sort function", () => {
  const input = [
    { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
    { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
    { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
    { name: "Barbados", population: 2000, area: 500, region: "Americas" },
  ];
  test("it should sort array alphabetically", () => {
    const output = [
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.Alphabetically)).toEqual(output);
  });

  test("it should sort array alphabetically(reversed)", () => {
    const output = [
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.AlphabeticallyReversed)).toEqual(
      output
    );
  });
  test("it should sort array by population(increasing)", () => {
    const output = [
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.ByPopulationIncreasing)).toEqual(
      output
    );
  });
  test("it should sort array by population(decreasing)", () => {
    const output = [
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.ByPopulationDecreasing)).toEqual(
      output
    );
  });
  test("it should sort array by area(increasing)", () => {
    const output = [
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.ByAreaIncreasing)).toEqual(output);
  });
  test("it should sort array by area(decreasing)", () => {
    const output = [
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
    ];
    expect(sortCountries(input, sortByList.ByAreaDecreasing)).toEqual(output);
  });
  test("it should sort array by regions", () => {
    const output = [
      { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
      { name: "Barbados", population: 2000, area: 500, region: "Americas" },
      { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
      { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
    ];
    expect(sortCountries(input, sortByList.ByRegions)).toEqual(output);
  });
});
