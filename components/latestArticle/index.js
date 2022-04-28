import React from "react";
import { latestArticlesData } from "../../data/latestarticles.data";
import LatestArticleCard from "../../utilities/latestarticlecard";

const LatestArticle = () => {
	return (
		<div className='latest-articles-container w-full bg-light-gray'>
			<div className='w-3/4 mx-auto py-28'>
				<div className='section-header mb-12'>
					<h1 className='text-section-title text-dark-blue mb-4 text-center md:text-left'>
						Latest Articles
					</h1>
				</div>
				<div className='latest-articles-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-6'>
					{latestArticlesData.map((article) => (
						<LatestArticleCard
							key={article.id}
							image={article.image}
							title={article.title}
							author={article.author}
							description={article.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LatestArticle;
