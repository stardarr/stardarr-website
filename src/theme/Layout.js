import React from "react"
import OriginalLayout from "@theme-original/Layout"
import { Analytics } from "@vercel/analytics/react"

function Layout(props) {
  return (
    <>
      <Analytics />
      <OriginalLayout {...props} />
    </>
  )
}

export default Layout
