/* 
Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. 
He also might have added some of the ingredients already, but something is missing. Can you help him to find out, 
what he has to add to the mixture?

Requirements:

Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.

*/

interface Ingredients {
  [ingredient: string]: number;
}
function getMissingIngredients(
  recipe: Ingredients,
  added: Ingredients,
): Ingredients {
  const needed: Ingredients = {};
  let numCakes = 1;

  for (const ing in recipe) {
    if (ing in added) {
      const cakesPossible = Math.ceil(added[ing] / recipe[ing]);
      numCakes = Math.max(numCakes, cakesPossible);
    }
  }

  for (const ing in recipe) {
    const totalRequired = recipe[ing] * numCakes;
    const currentAmount = added[ing] || 0;
    const deficit = totalRequired - currentAmount;

    if (deficit > 0) {
      needed[ing] = deficit;
    }
  }

  return needed;
}
