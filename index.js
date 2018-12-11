// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes(list) {
  return list.map(function(driver) {
    const fName = driver.split(' ')[0];
    const lName = driver.split(' ')[1];
    return new Object({firstName: fName, lastName: lName});
  });
};

function attributesToPhrase(list) {
  return list.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
};
