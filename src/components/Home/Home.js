import React from 'react'
import Tabs from '../Tabs/Tabs'
import NewsFeed from '../NewsFeed/NewsFeed'
import Profile from '../Profile/Profile'

import './Home.css'

export default function Home(props) {

  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "News Feed",
      path: parentPath + "/NewsFeed",
      component: NewsFeed,
      defaultTab: true
    },
    {
      name: "Profile",
      path: parentPath + "/Profile",
      component: Profile
    }
  ]

  return (
    <div>
      <div className="page-container container text-center">
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
        </div>
      </div>

    </div>
  )
}