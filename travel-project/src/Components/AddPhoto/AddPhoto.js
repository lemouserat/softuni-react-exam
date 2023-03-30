

export const AddPhoto = () => {
    return (
        <section id="contact" className="content-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Add your<br/><em>photo</em></h1>
                <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p>
                
            </div>
            <div className="section-content">
                <form id="add-photo"  method="post">
                    <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <input name="title" type="text" className="form-control" id="title" placeholder="Title..." required=""/>
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input name="genre" type="text" className="form-control" id="genre" placeholder="Genre..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input name="url" type="text" className="form-control" id="url" placeholder="Photo url..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input name="camera" type="text" className="form-control" id="camera" placeholder="Camera..." required=""/>
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input name="lens" type="text" className="form-control" id="lens" placeholder="Lens..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea name="exif" rows="3" className="form-control" id="exif" placeholder="Share with us your EXIF information..." ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Add photo</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}