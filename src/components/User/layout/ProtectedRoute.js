
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({component: Component, ...rest}) => {

//  const { userLogin, isAuthenticated, loading } = useSelector((state) => state.userLogin)
//   return (
//     <Fragment>
//       {loading === false &&(
//         <Route {...rest} 
//         render= {props =>{
//           if(isAuthenticated === false){
//             return  <Navigate to="/login"></Navigate>
//           }
//           return <Component {...props} />
//         } }
//         />

//        )} 
//     </Fragment>
//   )
// }

const ProtectedRoute = (props) => {
  const { Component } = props
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  })

  return (
    <div>
        <Component /> 
    </div>
  )
};

export default ProtectedRoute