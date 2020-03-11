import React from 'react';

import Article from '../../components/Article/article';

import Banner from '../Banner/banner';

const Articles = ({ articles }) => {

    return (
        <div >
            <Banner />
			<main className="main-content bg-gray">
				<div className="row">
					<div className="col-12 col-lg-6 offset-lg-3">
					 {
					 articles && articles.map(article => (
						<div key={article.id}>
							<Article article={article} />
							<hr />
						</div>))
					}
					
						{/* <nav className="flexbox mt-50 mb-50">
							<button className="btn btn-white disabled">
								<i className="ti-arrow-left fs-9 mr-4"></i> Newer
							</button>
							<button className="btn btn-white" >Older
								<i className="ti-arrow-right fs-9 ml-4"></i>
							</button>
						</nav> */}

					</div>
				</div>
			</main>
			
		</div>
    )
}

export default Articles;

