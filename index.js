// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  const firstLast = drivers.map(function(driver) {
    let firstName = driver.split(' ')[0];
    let lastName = driver.split(' ')[1];
    let driverObj = {firstName:firstName, lastName:lastName};
    return driverObj;
  });
  return firstLast;
}

function attributesToPhrase(drivers) {
  const nameTown = drivers.map(function(driver) {
    return `${driver["name"]} is from ${driver["hometown"]}`
  });
  return nameTown
}
