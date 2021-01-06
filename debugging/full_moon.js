// Full Moon

// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// Since newSpecies is declared with var it has function scope meaning that is hoisted to the top of the program during the creation phase. As a result, when array element for which isTransformable returns false is iterated over, newSpecies will still hold the value form the previous element for which isTransformable returned true. As a result, the final if statement will evaluate to true and output the previous transformable creature again.

// To fix this, newSpecies should be a let variable so that it has block scope.
