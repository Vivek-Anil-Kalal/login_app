import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../assets'
import styles from '../styles/Username.module.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { profileValidation } from '../helper/validate'
import convertToBase64 from '../helper/convert'
import extend from '../styles/Profile.module.css'

const Profile = () => {

  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      firstName : '' ,
      lastName : '' ,
      email: 'demo@gmail.com',
      mobile: '',
      address: ''
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' })
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
        <div className={`${styles.glass} ${extend.glass} `} style={{ width: "45%", paddingTop: "3em" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              You Can Update the Details.
            </span>
          </div>

          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">

              <label htmlFor="profile">
                <img src={file || profile} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" name='profile' id="profile" />

            </div>

            <div className="textbox flex flex-col items-center gap-3">

              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text" name="fName" placeholder='First Name' />
                <input {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text" name="lName" placeholder='Last Name' />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="number" name="mobile" placeholder='Mobile No.' />
                <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="email" name="email" placeholder='Email*' />
              </div>

              <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" name="address" placeholder='Address' />
              <button className={`${styles.btn} drop-shadow-xl`} type="submit">Register</button>

            </div>

            <div className="text-center py-4">
              {/* Link is better than using a (anchor tag) because anchor tag reloads the browser when the request made */}
              <span className=''>Come Back Later? <Link to="/" className="text-red-500">Logout</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile