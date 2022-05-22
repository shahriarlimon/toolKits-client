import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const useUser = () => {
    let user = true
    let location = useLocation();
  
    if (!user) {
    
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return Children;
};

export default useUser;