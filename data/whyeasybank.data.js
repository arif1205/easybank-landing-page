import banking from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";
import shortid from "shortid";

export const whyeasybankdata = [
	{
		id: shortid.generate(),
		icon: banking,
		title: "Online Banking",
		description:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		id: shortid.generate(),
		icon: budgeting,
		title: "Simple Budgeting",
		description:
			"See exactly where your money goes each month, Receive notifications when you're close to hitting your limits.",
	},
	{
		id: shortid.generate(),
		icon: onboarding,
		title: "Fast Onboarding",
		description:
			"We won't do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		id: shortid.generate(),
		icon: api,
		title: "Open API",
		description:
			"Managing your savings, investments, pensions, and much more from one account. Tracking your money has never been easier.",
	},
];
