import { useForm } from "../../hooks/useForm";

export const AddRecommendation = ({
    onRecommendationSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        recommendation: ''
    }, onRecommendationSubmit);

    return (
        <>


<section>

    <div className="section-content">
        <form onSubmit={onSubmit}>
            <div className="row">

                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="btn">Recommend</button>
                  </fieldset>
                </div>
            </div>
        </form>
    </div>
</section>

        </>
    );
};

