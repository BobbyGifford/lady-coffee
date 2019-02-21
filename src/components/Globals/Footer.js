import React from 'react'

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="mx-auto col-md-6 text-center text-capitalize">
            all rights reserved &copy;{new Date().getFullYear().toString()} |
          </div>
        </div>
      </div>
    </footer>
  )
}
