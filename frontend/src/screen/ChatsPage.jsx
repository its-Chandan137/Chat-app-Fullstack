import React from 'react'
import {PrettyChatWindow} from 'react-chat-engine-pretty'

export const ChatsPage = (props) => {
    // '9943ca14-d9e9-47d5-85a4-2fd6ed7d73cc'
  return (
    <div style={{height: "100vh"}}>
      <PrettyChatWindow 
      projectId='9943ca14-d9e9-47d5-85a4-2fd6ed7d73cc'
      username={props.user.username}
      secret={props.user.secret}
      style={{height: "100%"}}/>
    </div>
  )
}
