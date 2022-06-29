let msg: string = 'hello world';
// console.log(msg);

enum UserStatus {
	Administrator = 1,
	Author = 2,
	Contributor = 3,
	Editor = 4,
	Subscriber = 5,
}

const EDIT_ROLES = [
	UserStatus.Administrator,
	UserStatus.Author,
	UserStatus.Editor,
];

interface User {
	firstName: string;
	lastName: string;
	status: UserStatus;
}

function isEditActionAvailable(user: User): boolean {
	// return user.status === UserStatus.Administrator || user.status === UserStatus.Author || user.status === UserStatus.Editor;
	return EDIT_ROLES.includes(user.status);
}

const dayz: User = {
	firstName: 'new',
	lastName: 'dayz',
	status: UserStatus.Administrator,
};

console.log(isEditActionAvailable(dayz));
