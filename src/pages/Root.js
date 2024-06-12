import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <section>
      <Outlet/>
    </section>
  )
}

export default Root
