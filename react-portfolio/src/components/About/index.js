import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faJava,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders' // Import the Loader component

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
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
            I’m a driven Software Engineering student dedicated to creating
            efficient and innovative programs. With a strong foundation in
            programming languages like C++, Java, and Python, I thrive on
            tackling complex problems and turning ideas into reality.
          </p>
          <p>
            Throughout my academic journey, I’ve honed my skills through
            hands-on projects, including designing and implementing data
            structures and algorithms to develop sustainable engineering design
            systems, and building interactive applications with an array of
            frameworks. In the meantime, I love to work on making my own video
            games, developing my own 2D game engine with crisp physics
            simulations!
          </p>
          <p>
            I’m particularly excited about opportunities where I can contribute
            to impactful projects, improve systems, and grow as a developer.
            Whether it's designing robust algorithms, optimizing existing
            codebases, or crafting intuitive user experiences, I’m committed to
            delivering excellence and innovation.
          </p>
          <p>
            Beyond coding, I’m a young man, optimistic about the future of
            technology. I hope my name will hold weight in the ceaseless march
            of progress as I contribute to the era of digital transformation.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} />
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
      <Loader type="pacman" /> {}
    </>
  )
}

export default About
