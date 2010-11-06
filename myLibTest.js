test("Adding numbers works", function() {
    expect(3);
    ok(newAddition, "function exists");
    equals(4, newAddition(2, 2), "2 + 2 = 4");
    equals(100, newAddition(100, 0), "zero is zero");
});