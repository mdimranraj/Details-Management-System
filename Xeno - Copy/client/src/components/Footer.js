import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <footer id="sticky-footer" className={`flex-shrink-0 py-4 bg-dark text-white-50 ${styles.footer}`}>
    <div class="container text-center">
      <small>Copyright &copy;2023- Md Imran Raj</small> 
    </div>
  </footer>
  )
}

export default Footer