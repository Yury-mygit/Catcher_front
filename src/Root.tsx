import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from './pages/Header';


export default function Root() {


   const navigate = useNavigate();

   useEffect(() => {
      navigate('/home');
   }, [navigate]);

  

  return (
    <>
      {/* all the other elements */}
      <div id="detail">
         <Header />
        <Outlet />
       
      </div>
    </>
  );
}