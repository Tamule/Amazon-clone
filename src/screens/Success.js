// src/screens/Success.js
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success(' Your order has been placed successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });

    const timer = setTimeout(() => {
      navigate('/');
    }, 3500); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return null; 
}

export default Success;
