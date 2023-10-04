import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Authenticator/AuthPro";
import Loading from "../Loading/Loading";


function ProtectedRoute(){
  const auth = useAuth();
    
  return (auth.isAuthenticated && auth.isRoot) ? <Outlet/> : <Navigate to="/"></Navigate>

}

export default ProtectedRoute;
