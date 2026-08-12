import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoDS from '../../assets/images/logo-ds.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faFileLines,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const LINKS = [
  { to: '/', icon: faHome, label: 'Home', className: 'home-link', end: true },
  { to: '/about', icon: faUser, label: 'About', className: 'about-link' },
  { to: '/resume', icon: faFileLines, label: 'Resume', className: 'resume-link' },
  {
    to: '/portfolio',
    icon: faSuitcase,
    label: 'Portfolio',
    className: 'portfolio-link',
  },
  {
    to: '/contact',
    icon: faEnvelope,
    label: 'Contact',
    className: 'contact-link',
  },
]

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const close = () => setShowNav(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={close} aria-label="Daniel Sorouni — home">
        <img src={LogoDS} alt="" width="30" height="30" />
      </Link>

      <nav
        id="primary-nav"
        className={showNav ? 'mobile-show' : ''}
        aria-label="Primary"
      >
        {LINKS.map(({ to, icon, label, className, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={className}
            onClick={close}
          >
            <FontAwesomeIcon icon={icon} />
            <span className="visually-hidden">{label}</span>
          </NavLink>
        ))}
        <button
          type="button"
          className="close-icon"
          onClick={close}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </nav>

      <ul className="social">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/daniel-sorouni-b10166262/"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Adoraax"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
        aria-label="Open menu"
        aria-expanded={showNav}
        aria-controls="primary-nav"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  )
}

export default Sidebar
