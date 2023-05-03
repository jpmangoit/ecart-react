import React, { Fragment, useState, useEffect } from 'react'
import "./Registration.css"
import { Link } from 'react-router-dom';
import Loader from "../layout/Loader"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../action/AuthAction';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, loading, isAuthenticated, userLogin } = useSelector((state) => state.userLogin)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (loginData) => {

    dispatch(loginUser(loginData))

  }

  useEffect(() => {
    if (error) {
      alert.error(error)
    }

    if (isAuthenticated === true) {
      navigate('/')
    }

  }, [dispatch, error, alert, isAuthenticated])

  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>

        <div className='register'>
          <h2 className='main-heading'>LOGIN</h2>
          <h3>If you do not have an account with us, Please <Link className="link" to='/registration'>Register</Link></h3>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
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

            <div className="form-group">
              <label htmlFor="password">Password:</label>
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

            <div className="form-group">
              <h5><Link className="link" to='/forgot-password'>Forget Password</Link></h5>
            </div>
            <br />
            <div className="form-group">
              <button
                type="submit"
                value="Login"
              >Login</button>
            </div>
          </form>

        </div>

      </Fragment>
      }
    </Fragment>
  )
}

export default Login