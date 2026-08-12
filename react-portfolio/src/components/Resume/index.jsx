import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import usePageTitle from '../../hooks/usePageTitle'
import resume from '../../data/resume.json'
import './index.scss'

const RESUME_URL = `${import.meta.env.BASE_URL}Daniel_Sorouni_Resume.pdf`

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  usePageTitle('Résumé')

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 1800)
    return () => clearTimeout(timer)
  }, [])

  const { objective, experience, education, skills, coreSkills } = resume

  return (
    <div className="container resume-page">
      <div className="resume-head">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Résumé']}
            idx={15}
          />
        </h1>
        <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
          <span>Download PDF</span>
        </a>
      </div>

      <p className="resume-objective">{objective}</p>

      <section className="resume-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        {experience.map((job) => (
          <article className="entry" key={job.company}>
            <header className="entry-head">
              <div>
                <h3>{job.role}</h3>
                <p className="entry-org">{job.company}</p>
              </div>
              <p className="entry-period">{job.period}</p>
            </header>
            <ul className="chips" aria-label="Technologies used">
              {job.stack.map((t) => (
                <li className="chip chip--accent" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            <ul className="bullets">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <article className="entry">
          <header className="entry-head">
            <div>
              <h3>{education.degree}</h3>
              <p className="entry-org">
                {education.institution} — {education.detail}
              </p>
            </div>
            <p className="entry-period">
              {education.period}
              <span className="entry-result">{education.result}</span>
            </p>
          </header>
          <p className="courses-label">Relevant coursework</p>
          <ul className="chips">
            {education.courses.map((c) => (
              <li className="chip" key={c}>
                {c}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="resume-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="core-heading">
        <h2 id="core-heading">Core Skills</h2>
        <dl className="core-skills">
          {coreSkills.map((s) => (
            <div className="core-skill" key={s.name}>
              <dt>{s.name}</dt>
              <dd>{s.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}

export default Resume
