/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from './userGateway'

const User = () => {
  const [userData, setUserData] = useState(null)
  const { userId } = useParams()

  const fetchUser = () => {
    getUser(userId).then(body => {
      setUserData(body)
    })
  }

  useEffect(() => {
    fetchUser(userId)
  }, [userId])

  if (!userData) {
    return null
  }

  const { avatar_url, location, name } = userData

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  )
}

export default User
