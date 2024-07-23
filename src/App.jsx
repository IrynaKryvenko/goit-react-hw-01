import { useState } from 'react'
import Profile from './components/profile/Profile.jsx'
import userData from './assets/userData.json'
import './App.css'
import FriendList from './components/FriendList/FriendList.jsx'
import friends from './assets/Friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'
import transactions from './assets/transactions.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile
      name = {userData.username}
tag = {userData.tag}
location = {userData.location}
image = {userData.avatar} 
        stats = {userData.stats}
      />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  )
}

export default App
