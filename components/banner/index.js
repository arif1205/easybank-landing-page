/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<div className='w-full min-h-screen sm:h-screen sm:min-h-0 bg-light-gray relative banner-bg'>
			{/* desktop mockup bg */}
			<div className='absolute -top-0 -right-40	hidden xl:block'>
				<Image
					src='/image-mockups.png'
					alt='Mobile mockups'
					height={850}
					width={750}
					objectFit='contain'
				/>
			</div>
			{/* banner content  */}
			<div className='banner-content-wrapper'>
				{/* mobile design desktop mockup */}
				<div className='sm:hidden w-10/12 mx-auto'>
					<img
						src='/image-mockups.png'
						alt='Mobile mockups'
						className='w-full'
					/>
				</div>
				{/* banner content  */}
				<div className='w-3/4 mx-auto flex flex-col gap-6 pt-5 pb-20 sm:pb-0'>
					<h1 className='text-4xl sm:text-6xl text-center sm:text-left leading-tight text-dark-blue'>
						Next generation <br />
						digital banking
					</h1>
					<p className='text-grayish-blue text-center sm:text-left text-base sm:text-lg w-full md:w-3/4 lg:w-1/2'>
						Take your financial life online. Your easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing and much
						more.
					</p>
					<button className='btn btn-semi-rounded mx-auto sm:mx-0'>
						Request Invite
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
