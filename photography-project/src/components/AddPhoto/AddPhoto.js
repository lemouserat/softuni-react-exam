

export const AddPhoto = () => {
    return (
        <section id="contact" class="content-section">

        <div id="contact-content">
            <div class="section-heading">
                <h1>Add your<br/><em>photo</em></h1>
                <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p>
                
            </div>
            <div class="section-content">
                <form id="add-photo"  method="post">
                    <div class="row">
                        <div class="col-md-6">
                          <fieldset>
                            <input name="title" type="text" class="form-control" id="title" placeholder="Title..." required=""/>
                          </fieldset>
                        </div>
                         <div class="col-md-6">
                          <fieldset>
                            <input name="genre" type="text" class="form-control" id="genre" placeholder="Genre..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-12">
                          <fieldset>
                            <input name="url" type="text" class="form-control" id="url" placeholder="Photo url..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-6">
                          <fieldset>
                            <input name="camera" type="text" class="form-control" id="camera" placeholder="Camera..." required=""/>
                          </fieldset>
                        </div>
                         <div class="col-md-6">
                          <fieldset>
                            <input name="lens" type="text" class="form-control" id="lens" placeholder="Lens..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-12">
                          <fieldset>
                            <textarea name="exif" rows="3" class="form-control" id="exif" placeholder="Share with us your EXIF information..." ></textarea>
                          </fieldset>
                        </div>
                        <div class="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" class="btn">Add photo</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}