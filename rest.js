/* Question 1. */
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

/* Question 2. */
const findMin = (...args) => {
  return Math.min(...args);
};

/* Question 3. */
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
const mergedObject = mergeObjects(object1, object2);

/* Question 4. */
const doubleAndReturnArgs = (arr, ...args) => {
  const doubledArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubledArgs];
};

/* Slice & Dice answers */

/* 1 */
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/* 2 */ 
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/* 3 */
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/* 4 */
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/* 5 */ 
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/* 6 */
const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};



