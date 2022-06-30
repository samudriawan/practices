"use strict";
let msg = 'hello world';
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Administrator"] = 1] = "Administrator";
    UserStatus[UserStatus["Author"] = 2] = "Author";
    UserStatus[UserStatus["Contributor"] = 3] = "Contributor";
    UserStatus[UserStatus["Editor"] = 4] = "Editor";
    UserStatus[UserStatus["Subscriber"] = 5] = "Subscriber";
})(UserStatus || (UserStatus = {}));
const EDIT_ROLES = [
    UserStatus.Administrator,
    UserStatus.Author,
    UserStatus.Editor,
];
function isEditActionAvailable(user) {
    return EDIT_ROLES.includes(user.status);
}
const dayz = {
    firstName: 'new',
    lastName: 'dayz',
    status: UserStatus.Administrator,
};
console.log(isEditActionAvailable(dayz));
//# sourceMappingURL=app.js.map