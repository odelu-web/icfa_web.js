
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const ProtectedRoute = ({ element: Component, }) => {
    const { user } = useAuth();
    console.log('user',user);
    return true ? Component : <Navigate to="/admin" />;

}
export default ProtectedRoute