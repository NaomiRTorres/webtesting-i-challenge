module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  console.log(item);
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log(item);
  const newItem = {...item, durability: 100};
  return newItem; 
}

function get(item) {
  return { ...item };
}

// standard
// ? 
// TODO: 
// !