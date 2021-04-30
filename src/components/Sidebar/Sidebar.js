import Chip from '@material-ui/core/Chip'
import { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { Link } from 'react-router-dom'
import { headers } from '../../index'

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
    <div className="Tags">
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
  )
}
