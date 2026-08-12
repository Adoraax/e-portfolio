import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faJava,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import usePageTitle from '../../hooks/usePageTitle'

const FACES = [
  { icon: faAws, label: 'AWS', className: 'face1' },
  { icon: faPython, label: 'Python', className: 'face2' },
  { icon: faC, label: 'C++', className: 'face3' },
  { icon: faReact, label: 'React', className: 'face4' },
  { icon: faJsSquare, label: 'JavaScript', className: 'face5' },
  { icon: faJava, label: 'Java', className: 'face6' },
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  usePageTitle('About')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1800)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'About me']}
            idx={15}
          />
        </h1>
        <p>
          I&apos;m a Software Engineering student at the University of
          Technology Sydney, graduating in 2026 with a minor in Cybersecurity. I
          like working across the whole stack — from low-level C++ where every
          frame budget counts, up to cloud infrastructure and the interface
          someone actually touches.
        </p>
        <p>
          What I enjoy most is taking something tangled and making it simple:
          replacing a hand-maintained website with a design system, turning a
          manual deployment into a pipeline, or getting a physics loop to hold
          60&nbsp;FPS with a hundred entities on screen. Accessibility and
          performance aren&apos;t polish to me — they&apos;re part of the
          definition of done.
        </p>
        <p>
          Outside of coursework I build my own games and the engine underneath
          them. I&apos;m currently open to graduate software engineering roles.
        </p>
        <p className="about-links">
          <Link to="/resume" className="btn">
            See my résumé
          </Link>
        </p>
      </div>

      <div className="stage-cube-cont" aria-hidden="true">
        <div className="cubespinner">
          {FACES.map(({ icon, label, className }) => (
            <div className={className} key={label} title={label}>
              <FontAwesomeIcon icon={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
