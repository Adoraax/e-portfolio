import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import usePageTitle from '../../hooks/usePageTitle'
import 'leaflet/dist/leaflet.css'
import './index.scss'

const SERVICE_ID = 'service_j9boa8o'
const TEMPLATE_ID = 'template_paivpr1'
const PUBLIC_KEY = 'VDo48DGBTOjYNYGFz'
const EMAIL = 'dan.sorouni@gmail.com'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const form = useRef()

  usePageTitle('Contact')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1800)
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        form.current.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Contact me']}
            idx={15}
          />
        </h1>
        <p>
          I&apos;m open to graduate software engineering roles, internships and
          interesting projects. Send me a message below, or email me directly at{' '}
          <a className="inline-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} noValidate={false}>
            <ul>
              <li className="half">
                <label className="visually-hidden" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  required
                />
              </li>
              <li className="half">
                <label className="visually-hidden" htmlFor="email">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
              </li>
              <li>
                <label className="visually-hidden" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <label className="visually-hidden" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="6"
                  required
                ></textarea>
              </li>
              <li className="form-footer">
                <button
                  type="submit"
                  className="btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </li>
            </ul>
          </form>

          <p
            className={`form-status form-status--${status}`}
            role="status"
            aria-live="polite"
          >
            {status === 'sent' &&
              'Thanks — your message is on its way. I’ll get back to you soon.'}
            {status === 'error' &&
              `Something went wrong sending that. Please email me directly at ${EMAIL}.`}
          </p>
        </div>
      </div>

      <div className="info-map">
        <strong>Daniel Sorouni</strong>
        <br />
        Sydney, NSW, Australia
        <br />
        <span>{EMAIL}</span>
      </div>

      <div className="map-wrap">
        <MapContainer
          center={[-33.8688, 151.2093]}
          zoom={11}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-33.8688, 151.2093]}>
            <Popup>Based in Sydney, Australia</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
