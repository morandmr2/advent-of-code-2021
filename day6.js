function getLanternAmount(previousGenerationsArray, maxGenerationNumber, generationNumber = 1) {
  if (generationNumber > maxGenerationNumber) {
    return previousGenerationsArray.reduce((p, n) => p + n, 0);
  }

  const newGeneration = [];
  for (let i = 0 ; i < previousGenerationsArray.length ; i++) {
    if (i === previousGenerationsArray.length - 1) {
      newGeneration[i] = previousGenerationsArray[0];
    }
    else if (i === 6) {
      newGeneration[i] = previousGenerationsArray[i+1] + previousGenerationsArray[0];
    }
    else {
      newGeneration[i] = previousGenerationsArray[i+1];
    }
  }

  return getLanternAmount(newGeneration, maxGenerationNumber, generationNumber + 1);
}

let initialLanterns = [3,5,1,5,3,2,1,3,4,2,5,1,3,3,2,5,1,3,1,5,5,1,1,1,2,4,1,4,5,2,1,2,4,3,1,2,3,4,3,4,4,5,1,1,1,1,5,5,3,4,4,4,5,3,4,1,4,3,3,2,1,1,3,3,3,2,1,3,5,2,3,4,2,5,4,5,4,4,2,2,3,3,3,3,5,4,2,3,1,2,1,1,2,2,5,1,1,4,1,5,3,2,1,4,1,5,1,4,5,2,1,1,1,4,5,4,2,4,5,4,2,4,4,1,1,2,2,1,1,2,3,3,2,5,2,1,1,2,1,1,1,3,2,3,1,5,4,5,3,3,2,1,1,1,3,5,1,1,4,4,5,4,3,3,3,3,2,4,5,2,1,1,1,4,2,4,2,2,5,5,5,4,1,1,5,1,5,2,1,3,3,2,5,2,1,2,4,3,3,1,5,4,1,1,1,4,2,5,5,4,4,3,4,3,1,5,5,2,5,4,2,3,4,1,1,4,4,3,4,1,3,4,1,1,4,3,2,2,5,3,1,4,4,4,1,3,4,3,1,5,3,3,5,5,4,4,1,2,4,2,2,3,1,1,4,5,3,1,1,1,1,3,5,4,1,1,2,1,1,2,1,2,3,1,1,3,2,2,5,5,1,5,5,1,4,4,3,5,4,4];
const generations = [0, 0, 0, 0, 0, 0, 0, 0, 0];
initialLanterns.forEach(lantern => {
  generations[lantern]++;
});

console.log('result 1 :', getLanternAmount(generations, 80));
console.log('result 2 :', getLanternAmount(generations, 256));