import React from 'react'
import "./footer.css"

export const Footer = () => {
  let footerStyle = {
    // position: "relative",
    // top: "10vh",
    // width: "100%",
  }
  return (
    <footer>
      <div className='bg-dark text-light' style={footerStyle}>
        <p className='text-center my-0 py-3'>Copyright &copy; MyTodosList.com</p>

      </div>
    </footer>
  )
}
