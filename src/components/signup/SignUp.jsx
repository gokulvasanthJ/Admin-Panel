import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center   w-100 vh-100">

        <div className="row w-100 d-flex justify-content-center align-items-center " style={{ height: '100%'}}>
                        
            <div className="signup-form col-12 col-md-6 d-flex justify-content-center justify-content-evenly align-items-center flex-column">
                
                <div className="formhead-imge d-flex justify-content-center w-100 ">
                <hr style={{width:'50%'}}/>
                <i class="fa-solid fa-basket-shopping" style={{color: "#ff6c2f"}}></i>
                <h3 className='login-head'>SignUp</h3>
                <hr style={{width:'50%'}}/>

                
                </div>
                <form className='d-flex bg-transparent justify-content-center justify-content-between align-items-center flex-column w-100 gap-3' >
                    <div className="col-auto">
                    <input type='email' placeholder='Email' className="form-control"/>
                    </div>
                    <div className="col-auto">
                    <input type="text" placeholder='Password' className="form-control" />
                    </div>
                    
                    <button className='butten-sign align-self-start ms-5'>SignUp</button>
                    <a   href='#' className='align-self-start ms-5'>Forgot Password?</a>
                </form>
            </div>

            <div className="col-12 col-md-4  d-flex justify-content-end " >

<div className="signup-sideform d-flex justify-content-center flex-column align-items-center w-100">
    <h3>Welcome Back!</h3>
<p>To keep connected with us please login <br/>with your personal info</p>
<button className='butten-log '>LogIn</button>
</div>

</div>
        </div>
    </div>
  )
}

export default SignUp