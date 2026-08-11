import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faJava,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m a Software Engineering student at the University of
            Technology Sydney (graduating 2026), minoring in Cybersecurity. I
            love building things end to end — from low-level C++ game engines
            to cloud-deployed web applications.
          </p>
          <p>
            Most recently I worked as a Software Developer Intern at Forte
            Information Solutions (RhinoCRM), where I rebuilt the company&apos;s
            public marketing website as a SvelteKit 2 / Svelte 5 application —
            twelve prerendered routes, a token-driven design system with full
            dark mode, WCAG 2.2 AA accessibility, and an automated CI/CD
            pipeline on AWS with CodeBuild, S3 and CloudFront. I also designed
            and deployed a self-hosted WireGuard VPN on AWS EC2, made
            reproducible with Terraform and an idempotent installer.
          </p>
          <p>
            Outside of work I build my own video games and a 2D game engine in
            C++ with SFML — real-time collision detection, an entity-component
            architecture, and a steady 60 FPS with over 100 entities on screen.
          </p>
          <p>
            I&apos;m looking for opportunities where I can contribute to
            impactful projects across full-stack, cloud and security — and keep
            growing as an engineer.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faC} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
