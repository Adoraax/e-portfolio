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
          I&apos;m a final-year Software Engineering student at the University
          of Technology Sydney, with a minor in Cybersecurity. First and
          foremost I think of myself as a broad software engineer: I enjoy
          working across the whole stack, from low-level C++ systems through to
          full-stack web applications and the cloud infrastructure that runs
          them. What draws me to a problem is the chance to take it from a first
          idea all the way to a finished, working product.
        </p>
        <p>
          Most recently I completed a software developer internship at Forte
          Information Solutions (RhinoCRM), rebuilding the company&apos;s public
          marketing website from the ground up — migrating a legacy static site
          to a modern SvelteKit application, building a full design system with
          dark mode and accessibility, and setting up the AWS pipeline that
          deploys it. Alongside it I designed and built a self-hosted VPN on AWS
          as a proof of concept for the team.
        </p>
        <p>
          Outside of set work I build my own projects to keep learning: a 2D
          game and physics engine in C++, a headless e-commerce platform, a set
          of STL-compliant container iterators. That&apos;s where I get to go
          deep and understand how things really work underneath.
        </p>
        <p>
          I&apos;d describe my approach as independent, driven and
          growth-minded, and I&apos;m thorough by nature — I&apos;d rather take
          the time to build something correctly than rush it and cut corners.
          I&apos;m looking for a graduate role where I can keep building real,
          meaningful software alongside people I can learn from.
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
