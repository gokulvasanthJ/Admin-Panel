import React from 'react'
import '../recentorders/recentorder.css'

const RecentOrder = () => {
const orders=[
  {
    id: '#RB5625',
    date: '29 April 2024',
    product: 'product-1',
    customerName: 'Anna M. Hines',
    email: 'anna.hines@mail.com',
    phone: '(+1)-555-1564-261',
    address: 'Burr Ridge/Illinois',
    paymentType: 'Credit Card',
    status: 'Completed',
},
{
  id: '#RB9652',
  date: '25 April 2024',
  product: 'product-2',
  customerName: 'Judith H. Fritsche',
  email: 'judith.fritsche.com',
  phone: '(+57)-305-5579-759',
  address: 'SULLIVAN/Kentucky',
  paymentType: 'Credit Card',
  status: 'Completed',
},
{
  id: '#RB5984',
  date: '25 April 2024',
  product: 'product-3',
  customerName: 'Peter T. Smith',
  email: 'peter.smith@mail.com',
  phone: '(+33)-655-5187-93',
  address: 'Yreka/California',
  paymentType: 'Pay Pal',
  status: 'Completed',
},
{
  id: '#RB3625',
  date: '21 April 2024',
  product: 'product-4',
  customerName: 'emmanuel.delicid@mail.com',
  email: 'judith.fritsche.com',
  phone: '(+30)-693-5553-637',
  address: 'Atlanta/Georgia',
  paymentType: 'Pay Pal',
  status: 'Processing',
},
{
}
]

  return (
    <div className='container'>
        <div className="col recentorder-container    d-flex justify-content-center flex-column gap-4  mt-5">
            <div className="recentorder-top d-flex justify-content-between">
                <h5>Recent Orders</h5>
                <button className='recentorder-button'>+&nbsp; &nbsp;Create Order</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Product</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Payment Type</th>
                        <th scope="col">Status
                        </th>



                    </tr>
                </thead>
                <tbody>
                    {orders.map((order,index)=>( 
                      <tr key={index}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.product}</td>
                        <td>{order.customerName}</td>
                        <td>{order.email}</td>
                        <td>{order.phone}</td>
                        <td>{order.address}</td>
                        <td>{order.paymentType}</td>
                        <td>{order.status}</td>


                      
                    
                    </tr>
                    ))}
                </tbody>
              </table>
              <div className="recentorder-bottom d-flex justify-content-between">
                <h5>Recent Orders</h5>
                <button className='recentorder-button'><i class="fa-regular fa-plus"></i>Create Order</button>
            </div>
        </div>
    </div>
  )
}

export default RecentOrder