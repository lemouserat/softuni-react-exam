import { useForm } from "../../hooks/useForm";

import styles from './Recommendation.module.css'

export const AddRecommendation = ({
    onRecommendationSubmit,
}) => {
    const { onSubmit } = useForm({
        recommendation: ''
    }, onRecommendationSubmit);

    return (
        <>   
        <form onSubmit={onSubmit}>
                    <button type="submit" id="form-submit" className={styles.recommendButton}>Recommend</button>
        </form>
        </>
    );
};

