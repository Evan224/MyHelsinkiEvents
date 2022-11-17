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

export default function BasicInfo (): JSX.Element {
  const [userInfo, setUserInfo] = useState<UserInfoProps>(mockUserInfo)
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
        <List sx={{}} className="flex flex-row w-2/5">
            <ListItemText primary="following" secondary={userInfo.following} />
            <ListItemText primary="followers" secondary={userInfo.followers} />
            <ListItemText primary="Likes" secondary={userInfo.likedEvents} />
        </List>
        <div className='flex w-4/5 justify-between'>
        <TextField id="outlined-read-only-input"
          label="Name"
          defaultValue={userInfo.name}
          InputProps={{
            readOnly: true
          }}/>
        <TextField id="outlined-read-only-input2"
          label="email"
          defaultValue={userInfo.email}
          InputProps={{
            readOnly: true
          }}/>
        </div>
        <TextField id="outlined-read-only-input3"
            label="position"
            defaultValue={userInfo.position}
            InputProps={{
              readOnly: true
            }}
            className='flex w-4/5 justify-between'
            />
        <div className='flex flex-wrap'>
        {userInfo.tags.map((tag) => (
            <Chip label={tag} key={tag} className="p-4 m-4" />
        ))}
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
            defaultValue={userInfo.description}
            InputProps={{
              readOnly: true
            }}
            className="w-4/5"
            />

      </Box>
  )
}

const mockUserInfo: UserInfoProps = {
  name: 'John Doe',
  email: 'No email',
  position: 'software engineer',
  tags: ['music', 'sports', 'food'],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?',
  followers: 100,
  following: 20,
  likedEvents: 10
}
