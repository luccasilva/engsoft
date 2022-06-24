
 import { ToastContainer, toast } from 'react-toastify';
 import React, { useEffect } from 'react'
 import 'react-toastify/dist/ReactToastify.css';

export default (props) => {
    useEffect(()=>{
        toast.success(props.titulo, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }, [])
    
        return (
          <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
          </div>
        );
      }