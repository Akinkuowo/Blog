import React from 'react';



const CreateArticleForm = ({ handleFormSubmit, handleImageChange, handleTitleChange, handleContentChange, handleCategoryChange, categories, errors })=> {
    
    return(
       <div>
            <header className="header header-inverse bg-fixed" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}} data-overlay={8}>
                    <div className="container text-center">

                    <div className="row">
                        <div className="col-12 col-lg-8 offset-lg-2">
                            <h1>Write an Article</h1>
                        </div>
                    </div>
                    
                </div>
            </header>

            <main className="main-content">

            <section className="section">
                <div className="container">
                    <div className="row">
                         <div className="col-12 col-lg-12">

                            <form onSubmit={handleFormSubmit} className="p-30 bg-gray rounded" >
                                        
                            <div className="row">
                                <div className="form-group col-md-12 my-5">
                                    <input onChange={handleImageChange} name="image" type="file"  className="form-control" />
                                    {
                                        errors['image'] &&
                                        <small className="text-danger">{errors['image']}</small>
                                    }
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <input onChange={handleTitleChange} className="form-control form-control-lg" type="text" name="title" placeholder="Title" />
                                    {
                                        errors['title'] &&
                                        <small className="text-danger">{errors['title']}</small>
                                    }
                                </div>
                                <div className="form-group col-12 col-md-6">
                                <select onChange={handleCategoryChange} name="category" id="" className="form-control form-control-lg">
                                    <option value="">Select category</option>
                                    {categories.map(categories => <option key={categories.id} value={categories.categories}>{categories.categories}</option>)}
                                    
                                </select>
                                {
                                    errors['category'] &&
                                    <small className="text-danger">{errors['category']}</small>
                                }
                                </div>
                            </div>


                        <div className="form-group">
                            <textarea onChange={handleContentChange} name="Content" className="form-control form-control-lg" rows="4" placeholder="Content" ></textarea>

                            {
                                errors['content'] &&
                                <small className="text-danger">{errors['content']}</small>
                            }
                        </div>

                        <div className="text-center">
                            <button  className="btn btn-lg btn-primary" type="submit">Create Article</button>
                        </div>
                    </form>

                    </div>
                </div>

                </div>
            </section>

        </main>
        </div>
    );
}

export default CreateArticleForm;