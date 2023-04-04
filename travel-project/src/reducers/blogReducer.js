
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
                    comments: state.comments.filter(comment => comment._id !== action.payload)
                   
                }  
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
                        },
                        
                    ],
                }  
                // case 'RECOMMENDATION_DELETE':
                //     return {
                //         ...state,
                //         recommendations: state.recommendations.filter(recommendation => recommendation._id !== action.payload)
                       
                //     }            
        default:
            return state;
    }
};