import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/19686451/pexels-photo-19686451/free-photo-of-a-woman-in-white-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Jeet</span>
          <p>hello</p>
        </div>      
      </div>
    </div>
  )
}
export default Search
