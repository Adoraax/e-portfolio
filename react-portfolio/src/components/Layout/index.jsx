import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags" aria-hidden="true">
          &lt;body&gt;
        </span>

        <main id="main" tabIndex={-1}>
          <Outlet />
        </main>

        <span className="tags bottom-tags" aria-hidden="true">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
