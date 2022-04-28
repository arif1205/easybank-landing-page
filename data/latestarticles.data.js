import money from "../images/image-currency.jpg";
import food from "../images/image-restaurant.jpg";
import travel from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";
import shortid from "shortid";

export const latestArticlesData = [
	{
		id: shortid.generate(),
		image: money,
		author: "Clarie Robinson",
		title: "Receive money in any currency with no fees",
		description:
			"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
	},
	{
		id: shortid.generate(),
		image: food,
		author: "Wilson Hultton",
		title: "Treat yourself without worrying about money",
		description:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits for each month. That means you...",
	},
	{
		id: shortid.generate(),
		image: travel,
		author: "Wilson Hultton",
		title: "Take your Easybank card whenever you go",
		description:
			"We want to enjoy your travels. This is way we don't charge any fees on purchases while you're abroad. We will even show you...",
	},
	{
		id: shortid.generate(),
		image: confetti,
		author: "Clarie Robinson",
		title: "Our invite-only Beta accounts are now live!",
		description:
			"After a lot of hard work by the whole team, we're excited to launch our first closed beta. It's easy to request an invite through the site...",
	},
];
