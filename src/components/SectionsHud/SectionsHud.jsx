import './SectionsHud.css'
import Section from './../Section/Section'
import { useState } from 'react'
import SectionList from '../../assets/sections.json'

function SectionsHud() {
  const [sections, setSections] = useState([...SectionList])

  return (
    <div className="hud">
      {sections.map(section => {
        return <Section key={section.id} id={section.id} title={section.title} subtitle={section.subtitle}/>
      })}
    </div>
  )
}

export default SectionsHud