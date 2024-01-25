class User {
	username: string;
	firstName: string;
	lastName: string;

	constructor(username: string, firstName: string, lastName: string) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const employeesByType = {
	Manual: {
		Hourly: {
			Biweekly: new User(
				'Hourly-Biweekly_Manual',
				'Hourly-Biweekly',
				'Manual',
			),
			Monthly: new User(
				'Hourly-Monthly_Manual',
				'Hourly-Monthly',
				'Manual',
			),
			SemiMonthly: new User(
				'Hourly-SemiMonthly_Manual',
				'Hourly-SemiMonthly',
				'Manual',
			),
			Weekly: new User('Hourly-Weekly_Manual', 'Hourly-Weekly', 'Manual'),
		},
		SalaryNonExempt: {
			Biweekly: new User(
				'SalaryNonExempt-Biweekly_Manual',
				'SalaryNonExempt-Biweekly',
				'Manual',
			),
			Monthly: new User(
				'SalaryNonExempt-Monthly_Manual',
				'SalaryNonExempt-Monthly',
				'Manual',
			),
			SemiMonthly: new User(
				'SalaryNonExempt-SemiMonthly_Manual',
				'SalaryNonExempt-SemiMonthly',
				'Manual',
			),
			Weekly: new User(
				'SalaryNonExempt-Weekly_Manual',
				'SalaryNonExempt-Weekly',
				'Manual',
			),
		},
		Salary: {
			Biweekly: new User(
				'Salary-Biweekly_Manual',
				'Salary-Biweekly',
				'Manual',
			),
			Monthly: new User(
				'Salary-Monthly_Manual',
				'Salary-Monthly',
				'Manual',
			),
			SemiMonthly: new User(
				'Salary-SemiMonthly_Manual',
				'Salary-SemiMonthly',
				'Manual',
			),
			Weekly: new User('Salary-Weekly_Manual', 'Salary-Weekly', 'Manual'),
		},
	},
	TimePunch: {
		Hourly: {
			Biweekly: new User(
				'Hourly-Biweekly_TimePunch',
				'Hourly-Biweekly',
				'TimePunch',
			),
			Monthly: new User(
				'Hourly-Monthly_TimePunch',
				'Hourly-Monthly',
				'TimePunch',
			),
			SemiMonthly: new User(
				'Hourly-SemiMonthly_TimePunch',
				'Hourly-SemiMonthly',
				'TimePunch',
			),
			Weekly: new User(
				'Hourly-Weekly_TimePunch',
				'Hourly-Weekly',
				'TimePunch',
			),
		},
		SalaryNonExempt: {
			Biweekly: new User(
				'SalaryNonExempt-Biweekly_TimePunch',
				'SalaryNonExempt-Biweekly',
				'TimePunch',
			),
			Monthly: new User(
				'SalaryNonExempt-Monthly_TimePunch',
				'SalaryNonExempt-Monthly',
				'TimePunch',
			),
			SemiMonthly: new User(
				'SalaryNonExempt-SemiMonthly_TimePunch',
				'SalaryNonExempt-SemiMonthly',
				'TimePunch',
			),
			Weekly: new User(
				'SalaryNonExempt-Weekly_TimePunch',
				'SalaryNonExempt-Weekly',
				'TimePunch',
			),
		},
		Salary: {
			Biweekly: new User(
				'Salary-Biweekly_TimePunch',
				'Salary-Biweekly',
				'TimePunch',
			),
			Monthly: new User(
				'Salary-Monthly_TimePunch',
				'Salary-Monthly',
				'TimePunch',
			),
			SemiMonthly: new User(
				'Salary-SemiMonthly_TimePunch',
				'Salary-SemiMonthly',
				'TimePunch',
			),
			Weekly: new User(
				'Salary-Weekly_TimePunch',
				'Salary-Weekly',
				'TimePunch',
			),
		},
	},
	CloneTimeCard: {
		Biweekly: new User(
			'Salary-Biweekly_Manual',
			'Salary-Biweekly',
			'Manual',
		),
		Weekly: new User('Salary-Weekly_Manual', 'Salary-Weekly', 'Manual'),
	},
};

const allEmployees = [
	employeesByType.Manual.Hourly.Biweekly,
	employeesByType.Manual.Hourly.Monthly,
	employeesByType.Manual.Hourly.SemiMonthly,
	employeesByType.Manual.Hourly.Weekly,
	employeesByType.Manual.SalaryNonExempt.Biweekly,
	employeesByType.Manual.SalaryNonExempt.Monthly,
	employeesByType.Manual.SalaryNonExempt.SemiMonthly,
	employeesByType.Manual.SalaryNonExempt.Weekly,
	employeesByType.Manual.Salary.Biweekly,
	employeesByType.Manual.Salary.Monthly,
	employeesByType.Manual.Salary.SemiMonthly,
	employeesByType.Manual.Salary.Weekly,
	employeesByType.TimePunch.Hourly.Biweekly,
	employeesByType.TimePunch.Hourly.Monthly,
	employeesByType.TimePunch.Hourly.SemiMonthly,
	employeesByType.TimePunch.Hourly.Weekly,
	employeesByType.TimePunch.SalaryNonExempt.Biweekly,
	employeesByType.TimePunch.SalaryNonExempt.Monthly,
	employeesByType.TimePunch.SalaryNonExempt.SemiMonthly,
	employeesByType.TimePunch.SalaryNonExempt.Weekly,
	employeesByType.TimePunch.Salary.Biweekly,
	employeesByType.TimePunch.Salary.Monthly,
	employeesByType.TimePunch.Salary.SemiMonthly,
	employeesByType.TimePunch.Salary.Weekly,
];

export { User, allEmployees, employeesByType };
