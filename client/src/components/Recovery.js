import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

const Recovery = () => {

  const formik = useFormik({
    initialValues: {
      password: 'admin@123'
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold text-white">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Enter OTP to recover password.
            </span>
          </div>

          <form onSubmit={formik.handleSubmit} className="pt-20">
            <div className="profile flex justify-center py-4">
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className='py-4 text-sm text-left text-white'>
                  Enter 6 digit OTP sent to your email address.
                </span>

                <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" name="password" placeholder='Password' />
              </div>
              <button className={`${styles.btn} bg-green-600 drop-shadow-xl`} type="submit">Recover</button>
            </div>

            <div className="text-center py-4">
              <span className='text-white'>Can't geet OTP? <button className="text-red-500">Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery