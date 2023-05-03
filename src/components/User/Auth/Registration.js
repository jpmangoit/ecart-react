
import React, { Fragment, useState, useEffect } from 'react'
import "./Registration.css"
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loader from "../layout/Loader"
import { useDispatch, useSelector } from 'react-redux';
import { registrationUser } from '../../../action/AuthAction';
import { useAlert } from 'react-alert';

const RegistrationForm = () => {

  const alert = useAlert()
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated } = useSelector((state) => state.userRegistration)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onChange' });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const passwordMatch = password === confirmPassword;

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = (data) => {
    setRegistrationSuccess(true);
    dispatch(registrationUser(data));
  };

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch()
    }
  }, [dispatch, error, alert, isAuthenticated])


  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>
        {
          !registrationSuccess ? <Fragment>
            <div className='register'>
              <h2 className='main-heading'>REGISTRATION</h2>
              <h3>
                If you have an account with us, Please{' '}
                <Link className='link' to='/login'>
                  Login
                </Link>
              </h3>
              <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                  <label htmlFor='firstName'>First Name:</label>
                  <input
                    type='text'
                    placeholder='First name'
                    {...register('firstName', {
                      required: true,
                      pattern: /^[A-Za-z]{3,29}$/
                    })}
                  />
                  {errors.firstName && errors.firstName.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>First name is required.</p>
                  )}
                  {errors.firstName && errors.firstName.type === "pattern" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Only alphabet is allowed and atleast fill three letter.</p>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='lastName'>Last Name:</label>
                  <input
                    type='text'
                    placeholder='Last name'
                    {...register('lastName', {
                      required: true,
                      pattern: /^[A-Za-z]{3,29}$/
                    })}
                  />
                  {errors.lastName && errors.lastName.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Last Name is required.</p>
                  )}
                  {errors.lastName && errors.lastName.type === "pattern" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Only alphabet is allowed and atleast fill three letter.</p>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input
                    type='text'
                    placeholder='Email'
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Email is not valid.</p>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='mobile'>Mobile No.:</label>
                  <input
                    type='number'
                    placeholder='Mobile number'
                    {...register('mobileNumber', {
                      required: true,
                      pattern: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  {errors.mobileNumber && errors.mobileNumber.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Mobile number is required.</p>
                  )}
                  {errors.mobileNumber && errors.mobileNumber.type === "pattern" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Enter correct contact no..</p>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password:</label>
                  <input
                    type='password'
                    placeholder='Password'
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 12
                    })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Password is required.</p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Password must be at least 6 characters long.</p>
                  )}
                </div>

                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password:</label>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    {...register('confirmPassword', {
                      required: true,
                      minLength: 6,
                      maxLength: 12
                    })}
                  />
                  {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Confirm Password is required.</p>
                  )}
                  {errors.confirmPassword && errors.confirmPassword.type === "minLength" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Password must be at least 6 characters long.</p>
                  )}
                </div>
                <div>
                  {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}
                </div>

                <div>
                  <label htmlFor='gender'>
                    <input type='radio' id='male' value='male'
                      {...register('gender', { required: true })} />
                    Male
                  </label>
                  <br />
                  <label>
                    <input type='radio' id='female' value='female'
                      {...register('gender', { required: true })} />
                    Female
                  </label>
                  {errors.gender && errors.gender.type === "required" && (
                    <p className="errorMsg" style={{ color: 'red' }}>Gender is required.</p>
                  )}
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    value="Submit"

                  >Register</button>
                </div>
              </form>
            </div>
          </Fragment> : <Fragment>
            <div className='success'>

              <h1 className='main-heading'>User Registration successful!</h1>
              <div>
                <p>Verification link has been sent to your email</p>
                <p>You can proceed for login after verification <Link className="link" to='/login'>Login</Link> </p>
              </div>


            </div>
          </Fragment>

        }
      </Fragment>
      }
    </Fragment>

  )
}

export default RegistrationForm