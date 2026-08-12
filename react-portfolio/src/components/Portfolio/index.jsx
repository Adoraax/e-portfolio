import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLock } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
import AnimatedLetters from '../AnimatedLetters'
import usePageTitle from '../../hooks/usePageTitle'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  usePageTitle('Portfolio')

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={[...'Portfolio']}
          idx={15}
        />
      </h1>

      <ul className="project-grid">
        {portfolioData.portfolio.map((project) => (
          <li className="project-card" key={project.title}>
            <div className="project-cover">
              <img src={asset(project.cover)} alt="" loading="lazy" />
            </div>
            <div className="project-body">
              <h2>{project.title}</h2>
              <ul className="project-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p>{project.description}</p>
              {project.url ? (
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View source
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">
                    — {project.title} (opens in a new tab)
                  </span>
                </a>
              ) : (
                <p className="project-private">
                  <FontAwesomeIcon icon={faLock} aria-hidden="true" /> Private
                  repository
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio
