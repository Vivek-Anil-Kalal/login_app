import React from 'react'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidation } from '../helper/validate'

const Reset = () => {

  const formik = useFormik({
    initialValues : {
      password : 'admin@123' ,
      confirm_pwd : 'admin@123'
    },
    validate : resetPasswordValidation ,
    validateOnBlur: false ,
    validateOnChange : false ,
    onSubmit : async values => {
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset Password</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Enter new Password
            </span>
          </div>

          <form onSubmit={formik.handleSubmit} className="pt-20">
            <div className="profile flex justify-center py-4">
            </div>

            <div className="textbox flex flex-col items-center gap-3">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" name="password" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="text" name="confirm_pwd" placeholder='Confirm Password' />
              <button className={`${styles.btn} bg-green-600 drop-shadow-xl`} type="submit">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset