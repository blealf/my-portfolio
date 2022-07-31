import React from 'react'
import SkillItem from './SkillItem'
const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills">
        <div className="skills__items">
          {skills.map(skill => (
            <SkillItem
              key={skill.name}
              skill={skill.name}
              targetValue={skill.target}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const skills = [
  {
    name: 'HTML & CSS',
    target: 91,
  },
  {
    name: 'JavaScript',
    target: 90,
  },
  {
    name: 'React',
    target: 85,
  },
  {
    name: 'Vue',
    target: 89,
  },

]

export default Skills