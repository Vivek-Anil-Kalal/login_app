import React , { useState} from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../assets'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'

const Register = () => {

  const [file , setFile] = useState()
  
  const formik = useFormik({
    initialValues: {
      email: 'demo@gmail.com',
      username : 'demo123',
      password: 'admin@123'
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values , { profile : file || ''})
      console.log(values);
    }
  })


  /*** formik doesn't support the file upload so we need to create this handler */

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64);
  }

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder="false"></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width : "45%" , paddingTop: "3em"}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Happy to join you.
            </span>
          </div>

          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
            
              <label htmlFor="profile">
                <img src={ file || profile} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" name='profile' id="profile" />
            
            </div>

            <div className="textbox flex flex-col items-center gap-3">
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" name="email" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" name="username" placeholder='Username*' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" name="password" placeholder='Password*' />
              <button className={`${styles.btn} bg-green-600 drop-shadow-xl`} type="submit">Register</button>
            </div>

            <div className="text-center py-4">
              {/* Link is better than using a (anchor tag) because anchor tag reloads the browser when the request made */}
              <span>Already a User? <Link to="/" className="text-red-500">Login Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register