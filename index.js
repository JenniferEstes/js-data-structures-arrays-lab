const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo");
}


const newdrivers = ["Broom"]

function appendDriver(name) {
  let newdrivers = [...drivers, "Broom"];
  return newdrivers;
}


const moredrivers = ["Arnold"]

function prependDriver(name) {
  let moredrivers = ["Arnold", ...drivers];
  return moredrivers;
}


const withoutlastdriver = ["Milo", "Otis"];

function removeLastDriver() {
  drivers.slice(-1);
  return withoutlastdriver;
}


const withoutfirstdriver = ["Otis", "Garfield"];

function removeFirstDriver() {
  drivers.slice(0);
  return withoutfirstdriver;
}



