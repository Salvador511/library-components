import React from 'react'
import './UserCard.css'

interface UserCardProps {
  user: 'doctor' | 'pacient',
  name: string,
  specialty: string | undefined,
  ssn: string | undefined,
}

const UserCard = (props: UserCardProps)  => {
  return (
    <div className='card'>
      <div className={`content-${props.user}`}>
        <img src='src/stories/assets/brayan.jpeg'/>
        <p className='name'>{props.name}</p>
        <p className='extra-info'>{props?.specialty ?? props?.ssn}</p>
      </div>
    </div>
  )
}

export default UserCard
export { UserCardProps }