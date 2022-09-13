import { find } from "../MainSection.utils";

describe("Searching function (ignoring case sensivity)", () => {
  const input = [
    {
      name: "Jim",
      age: 21,
      friends: [
        {
          name: "Sara",
          age: 23,
          friends: [
            {
              name: "Bob",
              age: 45,
              friends: [{ name: "mark", age: 34 }],
            },
          ],
        },
        {
          name: "George",
          age: 22,
          friends: [],
        },
      ],
    },
  ];
  test("checking if object contains(22)", () => {
    expect(find(input, "22")).toBeTruthy();
  });
  test("checking if object contains(Mark)", () => {
    expect(find(input, "Mark")).toBeTruthy();
  });
  test("checking if object contains(Poland)", () => {
    expect(find(input, "Poland")).toBeFalsy();
  });
});
