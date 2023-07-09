import React from 'react'
import vid from '../assets/recavid.mp4'
import { Container } from 'react-bootstrap'

function Media() {
  return (
    <section id="reca" classname="med">
        <video src={vid} autoPlay loop muted/>
    </section>
  )
}

export default Media
