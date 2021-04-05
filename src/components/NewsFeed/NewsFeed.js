import React, { useState } from 'react'
import InfiniteScroll  from 'react-infinite-scroller'
import UserService from '../../services/UserService';

import './NewsFeed.css'
import Post from '../Post/Post';

export default function NewsFeed() {

  const [userList, setUserList] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadUserList = (page) => {
    setTimeout(() => {
      UserService.getList(page)
      .then((res) => {
        const newList = userList.concat(res.data);

        setUserList(newList);

        if(res.data.length===0) {
          setHasMoreItems(false);
        } else {
          setHasMoreItems(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>{
      })
    
    }, 1500)
  }
  
  return (
    <div>
      
      <div className="section">

        <InfiniteScroll
          threshold={0}
          pageStart={0}
          loadMore={loadUserList}
          hasMore={hasMoreItems}
          loader={<div className="text-center">loading data ...</div>}>

            { userList.map((user, index) => 
              ( 
              <Post key={index} user={user} />
              )
            )}

        </InfiniteScroll>
      </div>

      {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div> }    
      
    </div>
  )
}