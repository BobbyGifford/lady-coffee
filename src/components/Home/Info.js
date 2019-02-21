import React from 'react'
import Title from '../Globals/Title'
export default function Info({ children }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted">{children}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
