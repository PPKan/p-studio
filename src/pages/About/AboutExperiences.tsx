import React from 'react'
import AboutExperiencesCard from './AboutExperiencesCard';
import { AboutExperienceData } from './AboutExperiencesData';

type Props = {}

export default function AboutExperiences({}: Props) {
  return (
    <section>
      <h2>經過</h2>
      {AboutExperienceData.map(item => {
        
      })}
      <AboutExperiencesCard />
    </section>
  )
}