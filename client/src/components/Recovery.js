import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../assets'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../helper/validate'

const Password = () => {

  const formik = useFormik({
    initialValues : {
      password : 'admin@123'
    },
    validate : passwordValidate ,
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
            <h4 className="text-5xl font-bold text-white">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Explore More by connecting with us.
            </span>
          </div>

          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={profile} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-3">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" name="password" placeholder='Password' />
              <button className={`${styles.btn} bg-green-600 drop-shadow-xl`} type="submit">Let's Go</button>
            </div>

            <div className="text-center py-4">
              {/* Link is better than using a (anchor tag) because anchor tag reloads the browser when the request made */}
              <span className='text-white'>Forgort Password <Link to="/recovery" className="text-red-500">Recover Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password