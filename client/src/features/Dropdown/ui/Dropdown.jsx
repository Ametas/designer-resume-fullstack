import React from 'react'
import './style.scss'

export const Dropdown = ({ autoCompleteItems, onSelect }) => {
  function DropdownItem({ item }) {
    const handleItemClick = () => { onSelect(item) }

    return (
      <a href="#" 
        className="dropdown-item" 
        onClick={handleItemClick}
      >
        {item}
      </a>
    )
  }

  return (
    <div className='dropdown'>
      {autoCompleteItems.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </div>
  )
}
