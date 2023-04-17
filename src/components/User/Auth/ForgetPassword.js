
import React, { Fragment, useState, useEffect } from 'react'
import Loader from "../layout/Loader"
import { useDispatch, useSelector } from 'react-redux';
import { forgetPasswordUser} from "../../../action/AuthAction"
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import "./Registration.css"

const ForgetPassword = () => {

  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, loading, message } = useSelector((state) => state.forgetPassword)

  const [email, setEmail] = useState()

  const [formErrors, setFormErrors] = useState({email: "" });


  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email?.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const forgetSubmit = (e) => {
    e.preventDefault();
   if (validateForm()) {
    dispatch(forgetPasswordUser(email))
   }
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
    }

    if(message){
      alert.success(message)
    }

  }, [dispatch, error, alert, message])

  return (
    <Fragment>
      {loading ? <Loader /> : <Fragment>

        <div className='register'>
          <h3 className='main-heading'>FORGET PASSWORD</h3>

          <form onSubmit={forgetSubmit}>
            <h4>Please enter your registered email address</h4>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder='Enter Email'
                name="email"
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
             
            </div>
            {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
            <br />
            <div className="form-group">
              <button
                type="submit"
                value="SUBMIT"
              >SUBMIT</button>
            </div>
          </form>

        </div>

      </Fragment>
      }
    </Fragment>
  )
}

export default ForgetPassword