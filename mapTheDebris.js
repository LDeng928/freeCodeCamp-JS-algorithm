/* Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;

  let newArr = [];

  const getOrbitPeriod = function (object) {
    const c = Math.pow(earthRadius + object.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbitPeriod = Math.round(a * b);
    // create a new object
    return { name: object.name, orbitalPeriod: orbitPeriod };
  };

  for (let i = 0; i < arr.length; i++) {
    newArr.push(getOrbitPeriod(arr[i]));
  }

  return newArr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
