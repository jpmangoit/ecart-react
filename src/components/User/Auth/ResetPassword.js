
import React, { Fragment, useState, useEffect } from 'react'
import Loader from "../layout/Loader"
import { useDispatch, useSelector } from 'react-redux';
import { updatePasswordUser } from "../../../action/AuthAction"
import { useAlert } from 'react-alert';
import { UPDATE_PASSWORD_RESET } from '../../../constant/AuthConstant';
import { useNavigate } from 'react-router-dom';
import "./Registration.css"

const ResetPassword = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, loading, isUpdated } = useSelector((state) => state.updatePassword)

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
  
    const handlePasswordChange = (event) => {
      setNewPassword(event.target.value);
      setPasswordMatch(event.target.value === confirmPassword);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
      setPasswordMatch(event.target.value === newPassword);
    };

    const [formErrors, setFormErrors] = useState({ newPassword: "", confirmPassword: "" });


    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!newPassword?.trim()) {
            errors.newPassword = "Password is required";
            isValid = false;
        } else if (newPassword?.trim().length < 8) {
            errors.newPassword = "Password must be at least 8 characters long";
            isValid = false;
        }

        if (!confirmPassword?.trim()) {
            errors.confirmPassword = "Confirm password is required";
            isValid = false;
        }
        setFormErrors(errors);
        return isValid;
    };

    const resetPasswordSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(updatePasswordUser(newPassword))
        }
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
        }

        if(isUpdated){
            alert.success("Password reset successfully")

            navigate('/home')

            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, error, alert, isUpdated])

    return (
        <Fragment>
        {loading ? <Loader /> : <Fragment>
  
          <div className='register'>
            <h3 className='main-heading'>RESET PASSWORD</h3>
  
            <form onSubmit={resetPasswordSubmit}>
             
              <div className="form-group">
                  <label htmlFor="password">New Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={newPassword}
                    onChange={handlePasswordChange} />
                  {formErrors.newPassword && <div style={{ color: 'red' }}>{formErrors.newPassword}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange} />
                  {/* {formErrors.confirmPassword && <div style={{ color: 'red' }}>{formErrors.confirmPassword}</div>} */}
                </div>
                <div>
                  {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}
                </div>
                <div className="form-group">
              <button
                type="submit"
                value="Login"
              >SUBMIT</button>
            </div>
            </form>
  
          </div>
  
        </Fragment>
        }
      </Fragment>
    )
}

export default ResetPassword