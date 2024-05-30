import './index.css'

const Password = props => {
  const {itemDetails, onDeleteItem, isActive} = props
  const {id, websiteInput, usernameInput, passwordInput} = itemDetails

  const initial = websiteInput[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  const showPassword = isActive ? (
    <p className="para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  return (
    <li className="list-item-container">
      <div>
        <h1 className="initial-section">{initial}</h1>
      </div>
      <div className="text-cont">
        <p className="heading">{websiteInput}</p>
        <p className="para">{usernameInput}</p>
        {showPassword}
      </div>
      <div className="button-cont">
        <button
          data-testid="delete"
          onClick={onClickDelete}
          className="delete-button"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default Password
