import React, { useState } from 'react'
import InfiniteScroll  from 'react-infinite-scroller'
import UserService from '../../services/UserService';
import {Row } from 'react-bootstrap'

import './NewsFeed.css'
import Post from '../Post/Post';
import PostService from '../../services/PostService';

export default function NewsFeed() {

  const [posts, setPosts] = useState([]);

  const [hasMoreItems, setHasMoreItems] = useState(true);

 
  const loadPosts = async (page) => {
      const postsResult = await PostService.getPosts(page)
      const postsWithUserData = await Promise.all(postsResult.map(async (x, index) =>  { 
        return {...x , user: await UserService.getUserById(x.userId)}
      }))
        console.log(postsWithUserData)
        const newPosts = [...posts, ...postsWithUserData ]
        console.log(newPosts)

        setPosts(newPosts);

        if(postsResult.length===0) {
          setHasMoreItems(false);
        } else {
          setHasMoreItems(true);
        }
     
  }

  return (
    <div>
      
      <div className="section">

        <InfiniteScroll
          pageStart={0}
          loadMore={loadPosts}
          hasMore={hasMoreItems}
          loader={<div className="text-center">loading data ...</div>}>

            { posts.map((post, index) => 
              ( 
              <Row> <Post key={index} post={post} /> </Row>
              )
            )}

        </InfiniteScroll>
      </div>

      {hasMoreItems ? "" : <div className="text-center">no data anymore ...</div> }    
      
    </div>
  )
}