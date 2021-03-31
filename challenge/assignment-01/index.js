"use strict";

class ObjectUtilities {
  static mergeObjects(...objs) {
    return objs.reduce((previous, current) => {
      return { ...previous, ...current };
    });
  }

  static removePassword(obj) {
    const { password, ...cleanedObj } = obj;
    return cleanedObj;
  }

  static freezeObj(obj) {
    const { ...freezedObj } = obj;
    return Object.freeze(freezedObj);
  }

  static getOnlyValues(obj) {
    return Object.values(obj);
  }

  static getOnlyProperties(obj) {
    return Object.getOwnPropertyNames(obj);
  }
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
