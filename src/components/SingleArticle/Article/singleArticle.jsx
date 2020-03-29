import React from 'react';
import { Link } from 'react-router-dom'



const SingleArticle = ({ singleArticle })=> {

   const handleAuthorArticles = () => {
        const author = singleArticle.author;

        console.log(author);
    }

    return(
    <div>    
        <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/uploads/${singleArticle.image_url})`}} data-overlay={8}>
        
            <div className="container text-center">
    
                <div className="row h-full">
                    <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
            
                        <p className="opacity-70">{singleArticle.category}</p>
                        <br />
                            <h1 className="display-4 hidden-sm-down">{singleArticle.title}!</h1>
                            <h1 className="hidden-md-up">{singleArticle.title}!</h1>
                        <br />
                        <br />
                        <p>
                            <span className="opacity-70 mr-8">By</span>
                            <Link onClick={handleAuthorArticles} to="/user/articles" className="text-white" >{singleArticle.author}</Link>
                        </p>
                        <p>
                            <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
                        </p>
                
                        </div>
                
                        <div className="col-12 align-self-end text-center">
                        <a className="scroll-down-1 scroll-down-inverse" href="#" data-scrollto="section-content">
                            <span ></span>
                        </a>
                    </div>
                </div>
        
            </div>
    
      </header>
    
        <main className="main-content">
            <div className="section" id="section-content">
                <div className="container">
                
                    <div className="row">
                         <div className="col-12 col-lg-8 offset-lg-2">       
                            <p className="lead">
                                {singleArticle.content}
                            </p>
                        </div>
                           
                    </div>


                </div>

                <div className="section bt-1 bg-grey">
                    <div className="container">
                        <div className="row text-center">
                            <div className="text-center p-5">
                                COMMENTS HERE.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>

    );
}

export default SingleArticle;
