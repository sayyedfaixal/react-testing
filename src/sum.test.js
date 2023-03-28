import sum from "./sum.js";

test("When the input is a number the function must calculate the sum of  a + b ", () => {
  const answer = sum(1, 2);
  expect(answer).toBe(3);
});

test("When the input is a string the function must calculate the sum of  a + b ", () => {
  const answer = sum("1", "2");
  expect(answer).toBe(3);
});
