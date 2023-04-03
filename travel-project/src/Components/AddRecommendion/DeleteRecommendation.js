import { useForm } from "../../hooks/useForm";


import styles from './Recommendation.module.css'

export const DeleteRecommendation = ({
    onRecommendationDelete,
}) => {
    const { onSubmit } = useForm({
        recommendation: ''
    }, onRecommendationDelete);

    return (
        <>
        <form onSubmit={onSubmit}>
                <button type="submit" id="form-submit"  className={styles.removeRecommendButton}>Remove Recommendation</button>
        </form>
        </>
    );
};

