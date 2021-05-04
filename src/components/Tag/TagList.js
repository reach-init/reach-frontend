import { Chip } from '@material-ui/core'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './TagList.css'

export default function TagList({ post }) {
  const [readMore, setReadMore] = useState(false)

  const [isOverflow, setIsOverflow] = useState(false)
  const [tagsHeight, setTagsHeight] = useState('40px')

  const allTags = (
    <div className="all-tags">
      <div
        className="t"
        style={{
          overflow: isOverflow ? 'visible' : 'hidden',
          height: tagsHeight
        }}
      >
        {post.tags.map((tag) => {
          if (tag) {
            return (
              <div>
                <Link to={`/tag/${tag}`} key={tag}>
                  <Chip
                    // size="small"
                    variant="outlined"
                    clickable={true}
                    style={{ margin: '5px' }}
                    key={tag}
                    label={tag}
                  />
                </Link>
              </div>
            )
          } else return null
        })}
      </div>
    </div>
  )

  const linkName = readMore ? 'Hide tags << ' : 'Show more tags >> '

  return (
    <div>
      {allTags}
      {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}> */}
      {!isOverflow && (
        <a
          className="read-more-link"
          onClick={() => {
            setIsOverflow(true)
            setTagsHeight('70px')
          }}
        >
          <h6>{linkName}</h6>
        </a>
      )}
      {isOverflow && (
        <div style={{ height: '5px' }}>
          <a className="read-more-link">
            <h6></h6>
          </a>
        </div>
      )}
    </div>
  )
}
