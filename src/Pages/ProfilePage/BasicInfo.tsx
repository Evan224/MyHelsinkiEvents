import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import { useState } from 'react'

interface UserInfoProps {
  name: string
  email: string
  position: string
  tags: string[]
  description: string
  followers: number
  following: number
  likedEvents: number
}

export default function BasicInfo (props): JSX.Element {

  return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }
        }}
        className="flex flex-col w-3/5"
        noValidate
        autoComplete="off"
      >
        <List sx={{}} className="flex flex-row w-3/5">
            <ListItemText primary="following" secondary={props.totalFollowingUsers} />
            <ListItemText primary="followers" secondary={props.totalFollowedByUsers} />
            <ListItemText primary="Likes" secondary={props.totalLikedEvents} />
            <ListItemText primary="joins" secondary={props.totalJoinedEvents} />

        </List>
        <div className='flex w-4/5 justify-between'>
        <TextField id="outlined-read-only-input"
          label="Name"
          defaultValue={props.firstName}
          InputProps={{
            readOnly: true
          }}/>
        <TextField id="outlined-read-only-input2"
          label="email"
          defaultValue={props.email}
          InputProps={{
            readOnly: true
          }}/>
        </div>
        <TextField id="outlined-read-only-input3"
            label="position"
            defaultValue={props.shortIntroduction}
            InputProps={{
              readOnly: true
            }}
            className='flex w-4/5 justify-between'
            />
        <div className='flex flex-wrap'>
        {/* {props.tags.map((tag) => (
            <Chip label={tag} key={tag} className="p-4 m-4" />
        ))} */}
        </div>
        {/* <TextField id="outlined-read-only-input4"
            label="tags"
            defaultValue={userInfo.tags}
            InputProps={{
              readOnly: true
            }}/> */}
          {/* <TagBar tags={userInfo.tags} /> */}
        <TextField id="outlined-read-only-input5"
                      multiline
                      rows={4}
            label="description"
            defaultValue={props.introduction}
            InputProps={{
              readOnly: true
            }}
            className="w-4/5"
            />

      </Box>
  )
}


