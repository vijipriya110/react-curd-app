import React from 'react'
// import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const Base = ({ title, description, children }) => {
  const history = useHistory();
  return (
    <div className="App">
      <div className="App-container">
        <div className="lay-out">
          <div className="head">
            <button><i class="fa fa-long-arrow-left fa-1x" aria-hidden="true"></i>Overview Page</button>
            <div>
              <button className="g"><i class="fa fa-github-square fa-1x" aria-hidden="true"></i></button>
              <button><i class="fa fa-download fa-1x" aria-hidden="true"></i>Free Download</button>
            </div>
          </div>
          <hr></hr>
          <div className="lay-container">
            <div className="nav">
              <div><button className="sb" onClick={() => history.push("/")}>DashBoard</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/students")}>Student list</button></div>
              <hr></hr>
              <div><button className="sb" onClick={() => history.push("/add")}>Add-Student list</button></div>
              <hr></hr>
              



            </div>
            <div className="dis">
              
              <div className="top1">
                <h1 className="title">{title}</h1>
              </div>
              <div>
                <h3>{description}</h3>
              </div>
              <div>
                {children}
              </div>


            </div>


          </div>

          <div>
            <p className="foot"> Copyright <i class="fa fa-copyright fa-1x" aria-hidden="true"></i> your website 2023</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Base