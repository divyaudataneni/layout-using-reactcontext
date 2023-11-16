// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const ToggleShowContent = () => {
        onToggleShowContent()
      }
      const ToggleLeftNavBar = () => {
        onToggleShowLeftNavbar()
      }
      const ToggleRightNavBar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-bg">
          <h1>Layout</h1>
          <div className="input">
            <input
              type="checkbox"
              id="content"
              className="user-input"
              checked={showContent}
              onClick={ToggleShowContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input">
            <input
              type="checkbox"
              className="user-input"
              id="left"
              checked={showLeftNavbar}
              onClick={ToggleLeftNavBar}
            />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div className="input">
            <input
              type="checkbox"
              className="user-input"
              id="right"
              checked={showRightNavbar}
              onClick={ToggleRightNavBar}
            />
            <label htmlFor="right">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
