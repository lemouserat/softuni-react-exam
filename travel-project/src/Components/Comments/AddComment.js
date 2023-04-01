import { useForm } from "../../hooks/useForm";

import styles from './AddComment.module.css'

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <>
        {/* <div className="section-content">
                <form id="login" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                          <fieldset>
                        <textarea
                            name="comment"
                            placeholder="Type in your comment..."
                            value={values.comment}
                            onChange={changeHandler}
                        >
                        </textarea>
                        <div className="col-md-8">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Login</button>
                          </fieldset>
                        </div>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div> */}


<section className={styles.addCommentSection}>

    <div className="section-content">
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-12">
                  <fieldset>
                    <textarea name="comment" rows="3" className="form-control" id="comment" placeholder="Add a comment about this story..." value={values.comment} onChange={changeHandler} ></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="btn">Add comment</button>
                  </fieldset>
                </div>
            </div>
        </form>
    </div>
</section>

        </>





    );
};

