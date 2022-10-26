
it('should calculate the monthly rate correctly', function () {
  const inputValues = { amount: 5000, years: 5, rate: 2.5 };
  expect(calculateMonthlyPayment(inputValues)).toEqual("88.74")
});


it("should return a result with 2 decimal places", function() {
  const inputValues = { amount: 2000, years: 10, rate: 5.3};
  expect(calculateMonthlyPayment(inputValues).toString()).toMatch(/^\d+\.\d\d$/)
});

it("should handle large loan amounts", function() {
  const inputValues = { amount: 100000, years: 20, rate: 6.7};
  expect(calculateMonthlyPayment(inputValues)).toEqual("757.39")
})

it("should hanlde large rate amounts", function() {
  const inputValues = { amount: 10000, years: 8, rate: 85};
  expect(calculateMonthlyPayment(inputValues)).toEqual("709.33")
});