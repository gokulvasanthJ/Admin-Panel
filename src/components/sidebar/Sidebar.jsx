import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div
    className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 position-fixed"
    style={{ width: "280px" }}
  >
    <span className="fs-4 text-warning">Admin Dashboard 🕸</span>

    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to={"dashboard"} className="nav-link text-white">
          <h6>  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOJJREFUSEvtV9ERwjAIfd1EJ6lu0k3qJh1FnUQ3sX2euatIBMxHc16460/ghfAChHbYSLqN/KIqxzsA/KRcxELOTiNRYtWIHxn67wD2K13OToNL7IfjA4Dzl3s/AuDpLTtti4R96uQdWxs2x5FqbFS/sVVtcrGOWZPWAbW7T1i1nLh4Wmq5V5DXly6pcnaaU4mtq1dHSuRnW+118lIYod6kOpI068Y/AJiM8IsaiNw7MUaWxuZYMNCoDvXq/0suTo43Zzvi7MWEoXjq33wkvGNrZNx1jbfOgMvMqvqTKAvFiZ4BaGBNH73w67wAAAAASUVORK5CYII="style={{color:"orange",backgroundColor:"orange"}}/>Dashboard </h6>
        </Link>
      </li>
      <li>
        <Link to={"salary"} className="nav-link text-white">
         <h6> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARZJREFUSEvtlmEOgjAMRstJ1JOoN9GTqCdRT6KeRL2JPLKaAhvbgIQ/IyEk0PV139rSSha6qoW4kgNeuyA/gWB37v0zZTMxMLCDiJycs0v9PAccY3et7QkM+N09veY+MJFzK8wuxOkmAH6LiKqiJhrEq/52s+ssGNgjQSac7d3OMAfGTlXqkAvWHVUFC0ZC3y6HHOEsBrTr/0c1BZwgTs+kgBtJcs94NqnJTkqCi6ShDleujsdAKJ9vXSlbk4BUQ9NgunUM3HamKSrYZtP1G22Zc4F7isVaZgHnJNnQD6WccU/JklwluYYUKOXUUifWq3VkzUkqtWWwa02WoSnT55zfGcNcd2xNCSQ0fzdrYztOAYyyWQz8A0smRx8jxxgVAAAAAElFTkSuQmCC" style={{color:"orange",backgroundColor:"orange"}}/> Products </h6>
        </Link>
      </li>
      <li>
        <Link to={"attenDance"} className="nav-link text-white">
          <h6>Category </h6>
        </Link>
      </li>
      {/* <li>
        <Link to={"leave"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6> Leave-Management 📑</h6>
        </Link>
      </li>
      <li>
        <Link to={"addUser"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6>Add User +👨‍💼</h6> 
        </Link>
      </li>
     
      <li>
        <Link to={"logout"} className="nav-link text-info">
          <i class="fa-solid fa-pen-nib" style={{ color: "#FFD43B" }}></i>{" "}
         <h6>Logout 📲</h6> 
        </Link>
      </li> */}
    </ul>
  </div>
  )
}

export default Sidebar