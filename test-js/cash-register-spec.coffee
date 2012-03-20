describe "Dish", ->
  
  beforeEach ->
    @dish = new Dish "Sirloin Steak $18.99 - main course"
        
  it "extracts title", ->
    expect(@dish.title).toEqual "Sirloin Steak"
