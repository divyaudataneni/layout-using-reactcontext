// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-cont">
          {showLeftNavbar && (
            <div className="left">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1>Content</h1>
              <p>Lorem ipsum dolor sit amet,consectuteur,</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right">
              <h1>Right Navbar</h1>
              <div className="right-inner">
                <h1>Ad 1</h1>
              </div>
              <div className="right-inner">
                <h1>Ad 2</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
