import Chip from '@material-ui/core/Chip'
import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import {Box} from '@material-ui/core'
const defaultProps = {
  bgcolor: 'background.paper',
  border: 1,
  borderColor: 'grey.300'
}

export default function Sidebar() {
  const [tags, setTags] = useState([])
  const {
    get,
    response
  } = useFetch('https://reach-network.herokuapp.com/api/v1/tag?limit=50', {  })

  useEffect(() => {
    loadInitialTags()
  }, [])

  async function loadInitialTags() {
    const initialTags = await get('')
    console.log(initialTags)
    console.log(Object.values(initialTags)[0])

    const initialTagsValues = Object.values(initialTags)[0].map(tag => tag.title)

    if (response.ok) setTags(initialTagsValues)
  }
  return (
    <div
      style={{
        position: 'sticky',
        top: '5.6rem'
      }}
    >
      <Box borderRadius="borderRadius" {...defaultProps}>
        <div style={{ margin: '20px' }}>
          <h2>Tags</h2>
          {tags.map((tag) => {
            return (
              <Link to={`/tag/${tag}`} key={tag}>
                <Chip
                  clickable={true}
                  style={{ margin: '5px 5px 0 0' }}
                  key={tag}
                  label={tag}
                  
                />
              </Link>
            )
          })}
        </div>
      </Box>
    </div>
  )
}
