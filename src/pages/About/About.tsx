import React from 'react'
import Navbar from '../../components/Navbar'
import "../../css/spacer.scss"
import AboutMe from './AboutMe'
import RoutesTitle from '../RoutesTitle'
import AboutExperiences from './AboutExperiences'
import "../../css/About/About.scss"

type Props = {}

export default function About({}: Props) {
  return (
    <>
    {/* <div className="spacer--16vh"></div>
    <Navbar /> */}
    {/* <RoutesTitle /> */}
    {/* <AboutMe /> */}
    <AboutExperiences />
    </>
  )
}