import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(initialValues)
    }

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setValues(newValues);
    };

    const validateForm = (e) => {

      
        const value = e.target.value
        const errors = {};
        let passwordToCheck = ''

        console.log(values.password)
        console.log(passwordToCheck)
        console.log(value)

     

        if(e.target.name === 'email' && (value.length > 3 || value.length < 20) && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))){
            errors.email = 'Email is not the proper format e.g. user@email-client.com'
        }

        if(e.target.name === 'password' && (value.length < 5)) {
            passwordToCheck = e.target.name === 'password'
            
            errors.password = 'Password should be more than 5 symbols'
        }

        if(e.target.name === 'confirmPassword' && (value !== values.password)) {
            
            errors.confirmPassword = 'Passwords do not match '
        }

        if(e.target.name === 'title' && (value.length < 3 || value.length > 20)) {
            
            errors.title = 'Title should be between 3 and 20 characters'
        } 

        if(e.target.name === 'blogPhotoUrl' && (value.length > 2 || value.length < 200) && (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(value))){
            errors.blogPhotoUrl = 'Blog photo url is not a real URL containing an image.' 
        }

        if(e.target.name === 'story' && (value.length < 10 || value.length > 500)) {
            
            errors.story = 'Story should be between 10 and 500 characters.'
        } 

        setFormErrors(errors)
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
        validateForm,
        formErrors
    }
}