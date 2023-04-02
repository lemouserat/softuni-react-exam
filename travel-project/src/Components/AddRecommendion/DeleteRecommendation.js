import { useForm } from "../../hooks/useForm";

export const DeleteRecommendation = ({
    onRecommendationDelete,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        recommendation: ''
    }, onRecommendationDelete);

    return (
        <>


<section>

    <div className="section-content">
        <form onSubmit={onSubmit}>
            <div className="row">

                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="btn">Remove Recommendation</button>
                  </fieldset>
                </div>
            </div>
        </form>
    </div>
</section>

        </>
    );
};

