import React from 'react'
import '../conversion/conversion.css'
import RadialBarChart from './RadialBarChart'

const Conversion = () => {
  return<>
  
  <div className="container">
    <div className="row  d-flex gap-4">

    <div className="col-md-3 conversion-container d-flex justify-content-center justify-content-around flex-column" style={{height:'488.99px'}}>
        <h5 style={{fontSize:'16px'}}>Conversion</h5>
        <p className='progress-chart'><RadialBarChart/></p>
        <div className="week-track bg-white d-flex justify-content-around">
          <div className="last-week bg-white">
            <p>Last Week</p>
            <h4>23.5k</h4>
          </div>
            <div className="this-week bg-white">
            <p>This Week</p>
            <h4>41.05k
            </h4>
            </div>
        </div>
        <button className='conversion-button '>View Details</button>
    </div>

    <div className="col-md-3 session-container  d-flex justify-content-center justify-content-around flex-column" style={{height:'488.99px'}}>
    <h5 style={{fontSize:'16px'}}>Sessions by Country
    </h5>
        <p className='conversion-chart align-self-center' style={{width:'284px',height:'316px'}}>map area</p>
        <div className="week-track bg-white d-flex justify-content-around">
          <div className="last-week bg-white">
            <p>Last Week</p>
            <h4>23.5k</h4>
          </div>
            <div className="this-week bg-white">
            <p>This Week</p>
            <h4>41.05k
            </h4>
            </div>
        </div>
    </div>
    
    <div className="col-md-3 toppage-container bg-white  d-flex justify-content-center flex-column" style={{height:'488.99px'}}>
        <div className="toppage-head bg-white d-flex  justify-content-between">
        <h5 style={{fontSize:'14px',backgroundColor:'white'}}>Top Pages</h5>
            <button className='toppage-butten'>View All</button>
        </div>
        <table className="table table-hover w-100">
  <thead>
    <tr>
      <th scope="col" className='tablehead1'>Page Path</th>
      <th scope="col" className='tablehead2'>Page Views</th>
      <th scope="col" className='tablehead3'>Exit Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>larkon/ecommerce.html	</td>
      <td>465</td>
      <td><p className='exit-td1'>4.4%</p></td>
    </tr>
    

    <tr>
      <td>larkon/dashboard.html	</td>
      <td>426</td>
      <td><p className='exit-td2'>20.4%</p></td>
    </tr>

<tr>
      <td>larkon/chat.html	</td>
      <td>	254</td>
      <td> <p className='exit-td3'>12.25%</p></td>
    </tr>

    <tr>
      <td>larkon/auth-login.html	</td>
      <td>3369</td>
      <td><p className='exit-td4'>5.2%</p></td>
    </tr>

    <tr>
      <td>larkon/email.html</td>
      <td>985</td>
      <td><p className='exit-td5'>64.2%</p></td>
    </tr>

    <tr>
      <td>larkon/social.html	</td>
      <td>653</td>
      <td><p className='exit-td6'>2.4%</p></td>
    </tr>

    <tr>
      <td>larkon/blog.html	</td>
      <td>478</td>
      <td><p className='exit-td7'>1.4%</p></td>
    </tr>
    
  </tbody>
</table>
    </div>
    </div>
  </div>

  </>
}

export default Conversion