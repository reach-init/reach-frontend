import Chip from '@material-ui/core/Chip'
import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import { headers } from '../../index'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const defaultProps = {
  bgcolor: 'background.paper',
  border: 1,
  borderColor: 'grey.300'
}

export default function Sidebar() {
  const [tags, setTags] = useState([])
  const {
    get,
    post,
    response,
    loading,
    error
  } = useFetch('https://dummyapi.io/data/api/tag?limit=50', { headers })

  useEffect(() => {
    loadInitialTags()
  }, [])

  async function loadInitialTags() {
    const initialTags = await get('')
    console.log(initialTags)
    if (response.ok) setTags(initialTags.data)
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
