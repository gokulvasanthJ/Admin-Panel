import React from 'react'
import './LogIn.css'

const LogIn = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center   w-100 vh-100">

        <div className="row w-100 d-flex justify-content-center align-items-center " style={{ height: '100%'}}>
            
            <div className="col-12 col-md-4  d-flex justify-content-end " >

                <div className="login-sideform d-flex justify-content-center flex-column align-items-center w-100">
                    <h3>Create an account!</h3>
                <p>To keep connected with us please login <br/>with your personal info</p>
                <button className='butten-log '>SignUp</button>
                </div>

            </div>
            
            <div className="login-form col-12 col-md-6 d-flex justify-content-center justify-content-evenly align-items-center flex-column">
                
            <div className="formhead-imge d-flex justify-content-center w-100 ">
                <hr style={{width:'50%'}}/>
                <i class="fa-solid fa-basket-shopping" style={{color: "#ff6c2f"}}></i>
                <h3 className='login-head'>LogIn</h3>
                <hr style={{width:'50%'}}/>
                
                </div>
                <form className='d-flex bg-transparent justify-content-center justify-content-between align-items-center flex-column w-100 gap-3' >
                    <div className="col-auto">
                    <input type='email' placeholder='Email' className="form-control"/>
                    </div>
                    <div className="col-auto">
                    <input type="text" placeholder='Password' className="form-control" />
                    </div>
                    
                    <button className='butten-log align-self-start  ms-5'>LogIn</button>
                    <a   href='#' className='align-self-start  ms-5'>Forgot Password?</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn