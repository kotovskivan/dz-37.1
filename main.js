"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = exports.Calculator = void 0;
exports.createPerson = createPerson;
console.log('#20. TypeScript homework example file');
function createPerson(name, age, isActive) {
    return {
        name,
        age,
        isActive
    };
}
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        console.log(`Виклик методу "${propertyName}" з аргументами: ${args.join(', ')}`);
        return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
}
class Calculator {
    @LogMethodCalls
    add(a, b) {
        return a + b;
    }
    @LogMethodCalls
    multiply(a, b) {
        return a * b;
    }
}
exports.Calculator = Calculator;
var UserProfile;
(function (UserProfile) {
    function generateId() {
        return Math.random().toString(36).substring(2, 12);
    }
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email
        };
    }
    UserProfile.createProfile = createProfile;
})(UserProfile || (exports.UserProfile = UserProfile = {}));
//# sourceMappingURL=main.js.map