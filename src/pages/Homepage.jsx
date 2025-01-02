import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import Conversion from '../conversion/Conversion'
import RecentOrder from '../components/recentorders/RecentOrder'
import LogIn from '../components/loginform/LogIn'
import SignUp from '../components/signup/SignUp'

const Homepage = () => {
  return (<>
  
  
{/* <Navbar/> */}
<SignUp/>
<LogIn/>
<Conversion/>
<RecentOrder/>



</>
  )
}

export default Homepage