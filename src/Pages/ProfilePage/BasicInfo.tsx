import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import { useState } from 'react'
import Button from '@mui/material/Button'
import ImageUploader from '@/components/CreateEventForm/ImageUploader'

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
  const [edit, setEdit] = useState(false);

  const handleClick=()=>{
    if(edit){
      // send request to update
    }
    setEdit(!edit)
  }

  return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 }
        }}
        className="flex flex-col w-4/5"
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
          label="First Name"
          defaultValue={props.firstName}
          disabled={!edit}
          InputProps={{
            readOnly: true
          }}/>
          <TextField id="outlined-read-only-input"
          label="second Name"
          defaultValue={props.secondName}
          disabled={!edit}
          InputProps={{
            readOnly: true
          }}/>
       
        </div>
        <div>
          <TextField id="outlined-read-only-input2"
            label="email"
            defaultValue={props.email}
            InputProps={{
              readOnly: true
            }}
            disabled={!edit} />
          </div>
        <TextField id="outlined-read-only-input3"
            label="shortIntroduction"
            defaultValue={props.shortIntroduction}
            InputProps={{
              readOnly: true
            }}
            className='flex w-4/5 justify-between'
            disabled={!edit}/>
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
            disabled={!edit}/>
            {edit&&<ImageUploader />}
            <Button className='self-end' onClick={()=>{handleClick()}}>{edit?"save":"edit"}</Button>
      </Box>
  )
}


