import { useEffect } from "react";
import { useParams } from "react-router";
import { useBlogContext } from "../../contexts/BlogContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { blogServiceFactory } from "../../services/blogService";

import { countries } from "../common/countriesData";

import styles from "./EditBlog.module.css";

export const EditBlog = () => {
  const { onBlogEditSubmit } = useBlogContext();
  const { blogId } = useParams();
  const blogService = useService(blogServiceFactory);
  const {
    values,
    formErrors,
    changeHandler,
    onSubmit,
    changeValues,
    validateForm,
  } = useForm(
    {
      _id: "",
      title: "",
      country: "",
      city: "",
      blogPhotoUrl: "",
      story: "",
    },
    onBlogEditSubmit
  );

  useEffect(() => {
    blogService.getOneBlog(blogId).then((result) => {
      changeValues(result);
    });
  }, [blogId]);

  const isEnabled = !Object.keys(formErrors).some((x) => formErrors[x]);

  return (
    <section id="contact" className="content-section">
      <div id="contact-content">
        <div className="section-heading">
          <h1>
            Edit your
            <br />
            <em>blog post</em>
          </h1>
          <p>
            Curabitur hendrerit mauris mollis ipsum vulputate rutrum.
            <br />
            Phasellus luctus odio eget dui imperdiet.
          </p>
        </div>
        <div className="section-content">
          <form id="edit-blog" method="post" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    value={values.title}
                    onChange={changeHandler}
                    onBlur={validateForm}
                    required
                  />
                  {formErrors.title && (
                    <p className={styles.formError}>{formErrors.title}</p>
                  )}
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <select
                    name="country"
                    id="country"
                    value={values.country}
                    onChange={changeHandler}
                    required
                    className={styles.countryDropdownWhole}
                  >
                    <option>Select the country</option>

                    {countries.map((c) => (
                      <option key={c.code}>{c.name}</option>
                    ))}
                  </select>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <input
                    name="city"
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City..."
                    value={values.city}
                    onChange={changeHandler}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="blogPhotoUrl"
                    type="text"
                    className="form-control"
                    id="blogPhotoUrl"
                    placeholder="Photo url..."
                    value={values.blogPhotoUrl}
                    onChange={changeHandler}
                    onBlur={validateForm}
                    required
                  />
                  {formErrors.blogPhotoUrl && (
                    <p className={styles.formError}>
                      {formErrors.blogPhotoUrl}
                    </p>
                  )}
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <textarea
                    name="story"
                    rows="3"
                    className="form-control"
                    id="story"
                    placeholder="Share a short story with us..."
                    value={values.story}
                    onChange={changeHandler}
                    onBlur={validateForm}
                    required
                  ></textarea>
                  {formErrors.story && (
                    <p className={styles.formError}>{formErrors.story}</p>
                  )}
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    className="btn"
                    disabled={!isEnabled}
                  >
                    Edit blog post
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
