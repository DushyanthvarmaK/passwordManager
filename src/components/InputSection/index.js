import './index.css'
import {Component} from 'react'

import {v4} from 'uuid'
import Password from '../PasswordManager'

class InputSection extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    itemsList: [],
    searchInput: '',
    isActive: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newItem = {
      id: v4(),
      websiteInput,
      usernameInput,
      passwordInput,
    }

    this.setState(prev => ({
      itemsList: [...prev.itemsList, newItem],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p>No Passwords</p>
    </div>
  )

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    const updatedList = itemsList.filter(each => each.id !== id)

    this.setState({itemsList: updatedList})
  }

  onCheckIsActive = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  render() {
    const {
      itemsList,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isActive,
    } = this.state

    const updatedList = itemsList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = updatedList.length

    return (
      <div className="bg-container">
        <div className="sub-bg">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="input-section">
            <form className="inputs" onSubmit={this.onAddPassword}>
              <h1 className="input-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  value={websiteInput}
                  onChange={this.onChangeWebsite}
                  placeholder="Enter Website"
                  className="input-item"
                  type="text"
                />
              </div>
              <div className="input-container">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  value={usernameInput}
                  onChange={this.onChangeUsername}
                  placeholder="Enter Username"
                  className="input-item"
                  type="text"
                />
              </div>
              <div className="input-container">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  value={passwordInput}
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                  className="input-item"
                  type="password"
                />
              </div>
              <div className="add-button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
          <div className="password-section">
            <div className="search-section">
              <div className="password-count">
                <h1 className="input-heading">Your Passwords </h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-icon">
                <img
                  className="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  placeholder="Search"
                />
                <input
                  onChange={this.onChangeSearch}
                  className="search-input"
                  placeholder="search"
                  type="search"
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                onChange={this.onCheckIsActive}
                type="checkbox"
                id="showPassword"
              />
              <label htmlFor="showPassword">Show passwords</label>
            </div>
            {count < 1 ? (
              this.renderNoPasswordsView()
            ) : (
              <ul className="list-items-container">
                {updatedList.map(each => (
                  <Password
                    key={each.id}
                    itemDetails={each}
                    onDeleteItem={this.onDeleteItem}
                    isActive={isActive}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default InputSection
