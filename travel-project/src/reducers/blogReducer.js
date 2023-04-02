

export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'BLOG_FETCH':
            // return Object.assign({}, action.payload);
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                        }
                    }
                ],
            };
        case 'COMMENT_DELETE':
                return {
                    ...state,
                    comments: [
                        ...state.comments,
                        {
                            ...action.payload,
                            author: {
                                email: action.userEmail,
                            }
                        }
                    ],
                }; 
        case 'RECOMMENDATION_ADD':
            return {
                ...state,
                    recommendations: [
                    ...state.recommendations,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                        },
                        recommendation: {
                            recommendationId: action._ownerId
                        }
                    }
                ],
            };
            case 'RECOMMENDATION_DELETE':
                return {
                    ...state,
                        recommendations: [
                        ...state.recommendations,
                        {
                            ...action.payload,
                            // author: {
                            //     email: action.userEmail,
                            // }
                        },
                        state
                    ],
                }            
        default:
            return state;
    }
};