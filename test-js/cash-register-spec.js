(function() {
  describe("Dish", function() {
    beforeEach(function() {
      return this.dish = new Dish("Sirloin Steak $18.99 - main course");
    });
    return it("extracts title", function() {
      return expect(this.dish.title).toEqual("Sirloin Steak");
    });
  });
}).call(this);
