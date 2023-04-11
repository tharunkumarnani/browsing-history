import './index.css'

const SearchItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onClicked = () => {
    deleteItem(id)
  }

  return (
    <li className="item-cont">
      <p className="time">{timeAccessed}</p>
      <div className="first-side-items">
        <div className="style-flex">
          <img className="logo-style" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button className="delete-icon" onClick={onClicked} type="button">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
