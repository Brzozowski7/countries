import { renderHook } from "@testing-library/react-hooks";
import useFetchData from "./useFetchData";

const fakeCountries = [
  { name: "Cameroon", population: 1000, area: 100, region: "Africa" },
  { name: "Hong Kong", population: 100, area: 3000, region: "Asia" },
  { name: "Afghanistan", population: 3000, area: 1000, region: "Asia" },
  { name: "Barbados", population: 2000, area: 500, region: "Americas" },
  { name: "Germany", population: 1000, area: 100, region: "Europe" },
  { name: "France", population: 100, area: 3000, region: "Europe" },
  { name: "China", population: 3000, area: 1000, region: "Asia" },
  { name: "Brasil", population: 2000, area: 500, region: "Americas" },
];

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("useFetchData", () => {
  test("should return data after fetch", async () => {
    //given
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(fakeCountries),
      });
    });
    //when
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("lorem")
    );

    await waitForNextUpdate();
    //then
    expect(result.current).toMatchObject({
      data: fakeCountries,
      loading: false,
    });
  });
  test("should not return any data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.reject("oopss"),
      });
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("lorem")
    );

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: undefined,
      loading: false,
    });
  });
});
