import React from 'react'
import "../product-details/ProductDetails.css"

const ProductDetails = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-md-1 row-cols-md-2 g-3">
        <div className="col-md-6">
          <div className="col d-flex rounded-pill">
            <div className="card text-center shadow p-2 mb-5 rounded">
              <div className="card-body">
                <p className="card-text d-flex">
                    <span className="p-3 rounded mt-4" style={{backgroundColor:"pink",height:"60px",width:"60px"}}>
                     <i className="fa-solid fa-basket-shopping fs-3 " style={{color: "#ff6c2f",backgroundColor:"pink"}}></i>
                    </span>
                    <p className="mt-4 ms-3"> <span className="text-muted">Total Orders</span> <br /> <span className="fs-4 fw-normal"> 13, 647 </span></p>
                </p>
               
              </div>
              <div className="footer"><i className="fa-solid fa-caret-up text-success fs-4"></i> 2.3% Last Week
             <br />  View More</div>
            </div>
            <div className="card text-center shadow p-2 mb-5 ms-3 rounded" >
              <div className="card-body">
                <p className="card-text d-flex">
                    <span className="p-3 rounded mt-4" style={{backgroundColor:"pink",height:"60px",width:"60px"}}>
                      <i className="fa-solid fa-award fs-3" style={{color: "#ff6c2f",backgroundColor:"pink"}}></i>
                    </span>
                    <p className="mt-4 ms-3"> <span className="text-muted">New Leads</span> <br /> <span className="fs-4 fw-normal">9, 526</span></p>
                </p>
               
              </div>
              <div className="footer"><i className="fa-solid fa-caret-up text-success fs-4"></i> 8.1% Last Month
             <br /> View More</div>
            </div>
          </div>
          <div className="col d-flex mt-4">
          <div className="card text-center shadow p-2 mb-5 rounded" >
              <div className="card-body">
                <p className="card-text d-flex">
                    <span className="p-3 rounded mt-4" style={{backgroundColor:"pink",height:"60px",width:"60px"}}>
                     <i className="fa-solid fa-clipboard-list fs-3"style={{color: "#ff6c2f",backgroundColor:"pink"}}></i>
                    </span>
                    <p className="mt-4 ms-3"> <span className="text-muted">Deals</span> <br /> <span className="fs-4 fw-normal">976</span></p>
                </p>
               
              </div>
              <div className="footer"><i className="fa-solid fa-caret-down text-danger fs-4"></i> 0.3% Last Month
             <br /> View More </div>
            </div>
            <div className="card text-center shadow p-2 ms-3 mb-5 rounded" >
              <div className="card-body">
                <p className="card-text d-flex">
                    <span className="p-3 rounded mt-4" style={{backgroundColor:"pink",height:"60px",width:"60px"}}>
                     <i class="fa-solid fa-circle-dollar-to-slot fs-3"style={{color: "#ff6c2f",backgroundColor:"pink"}}></i>
                    </span>
                    <p className="mt-4 ms-3"> <span className="text-muted">Booked Reven</span> <br /> <span className="fs-4 fw-normal">$123.6k</span></p>
                </p>
               
              </div>
              <div className="footer"><i className="fa-solid fa-caret-down text-danger fs-4"></i> 10.6% Last Month
             <br />  View More </div>
            </div>
          </div>
        </div>
        <div className="col-md-7"></div>
      </div>
    </div>
  );
}

export default ProductDetails