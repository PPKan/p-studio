import React from 'react'
import Navbar from '../../components/Navbar'
import "../../css/spacer.scss"
import AboutMe from './AboutMe'
import RoutesTitle from '../RoutesTitle'
import AboutExperiences from './AboutExperiences'
import "../../css/About/About.scss"
import AboutLearnt from './AboutLearnt'
import Footer from '../../components/Footer'

type Props = {}

export default function About({}: Props) {
  return (
    <>
    <Navbar />
    <RoutesTitle title={"關於"} text={"水清風靜  此人只在此處有"} />
    <div className="spacer--8h"></div>
    <AboutMe />
    <div className="spacer--16h"></div>
    <AboutExperiences />
    <div className="spacer--16h"></div>
    <AboutLearnt />
    <div className="spacer--16h"></div>
    <Footer />
    </>
  )
}