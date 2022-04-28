import React from "react";
import { whyeasybankdata } from "../../data/whyeasybank.data";
import Whyeasybankcard from "../../utilities/whyeasybankcard";

const Whyeasybank = () => {
	return (
		<div className='whyeasybank-container w-full bg-light-greyish-blue'>
			<div className='w-3/4 mx-auto py-28'>
				<div className='section-header mb-20'>
					<h1 className='text-section-title text-dark-blue mb-4 text-center md:text-left'>
						Why choose Easybank?
					</h1>
					<p className='text-grayish-blue text-center md:text-left w-full md:w-3/4 lg:w-1/2'>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
				<div className='easy-bank-card-container grid justify-between items-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{whyeasybankdata.map((item) => (
						<Whyeasybankcard
							key={item.id}
							Icon={item.icon}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Whyeasybank;
