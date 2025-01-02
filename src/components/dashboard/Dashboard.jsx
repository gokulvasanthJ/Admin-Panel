import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <div className="d-flex ">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard