import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import usePageTitle from '../../hooks/usePageTitle'

const RESUME_URL = `${import.meta.env.BASE_URL}Daniel_Sorouni_Resume.pdf`

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'D', 'a', 'n', 'i', 'e', 'l', '.']
  const jobArray = [...'Software engineer.']

  usePageTitle()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1800)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={18}
          />
        </h1>
        <h2>Software Engineering @ UTS &nbsp;·&nbsp; Full-Stack · Cloud · Cybersecurity</h2>

        <div className="home-actions">
          <Link to="/portfolio" className="btn">
            View my work
          </Link>
          <a
            className="btn btn--ghost"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
          >
            Résumé (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
