import toast from "react-hot-toast";

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({} , values)

    return errors ;
}

/* validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({} , values)

    return errors ;
}

/* validate password */
function passwordVerify(errors = {} , values ){
    const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if( !values.password ){
        errors.password = toast.error("Passsword is Required...!")
    }else if( values.password.includes(" ")){
        errors.password = toast.error("Wrong Passoword...!")
    }else if( values.password.length < 4 ){
        errors.password = toast.error("Password must be more than 4 characters...!")
    }else if( !specialChar.test(values.password) ){
        errors.password = toast.error("Passsword must have special characters...!")
    }

    return errors ;
}

// validate username
function usernameVerify(error = {} , values){
    if(!values.username){
        error.username = toast.error('Username Required...!')
    }else if( values.username.includes(" ")){
        error.username = toast.error('Invalid User...!')
    }

    return error ;
}