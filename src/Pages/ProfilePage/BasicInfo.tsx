import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import ImageUploader from '@/components/CreateEventForm/ImageUploader'

import messageService from '@/components/Message'
import { editProfile } from '@/utils/http/meRequest'
import SimpleBackdrop from '@/components/SimpleBackdrop'
import { imageUpload } from '@/utils/http/meRequest'


export default function BasicInfo (props): JSX.Element {

  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState(props.firstName||"")
  const [lastName, setLastName] = useState(props.lastName||"")
  const [introduction, setIntroduction] = useState(props.shortIntroduction||"")
  const [email, setEmail] = useState(props.email||"")
  // const [phone, setPhone] = useState(props.phone)
  const [description, setDescription] = useState(props.introduction||"")
  const [formData, setFormData] = useState("")

  const handleSubmit=async (event)=>{
    event.preventDefault()
    if(edit){
     
      setLoading(true)

      const responseUrl=await imageUpload(formData);

      const profile={
        firstName,
        lastName,
        introduction:description,
        shortIntroduction:introduction,
        email,
        avatarUrl:responseUrl
      }

      const response = await editProfile(profile)
      if(response){
        messageService.success({
          content:"Edit profile successfully",
          duration:2000
        })
      }else{
        messageService.error({
          content:"Edit profile failed!",
          duration:2000
        })
      }
      setLoading(false)
      window.location.reload()
    }
    setEdit(!edit)
  }

  const handleImageChange=(file)=>{
    setFormData(file)
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
        onSubmit={handleSubmit}
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
          name="firstname"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          disabled={!edit}
         />
          <TextField id="outlined-read-only-input"
          label="second Name"
          name="lastname"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          disabled={!edit}
          />
       
        </div>
        <div>
          <TextField id="outlined-read-only-input2"
            label="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            disabled={!edit} />
          </div>
        <TextField id="outlined-read-only-input3"
            label="shortIntroduction"
            name="introduction"
            value={introduction}
            onChange={(e)=>setIntroduction(e.target.value)}
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
            name="description"
            value={description||""}
            onChange={(e)=>setDescription(e.target.value)}
            className="w-4/5"
            disabled={!edit}/>
            {edit&&<ImageUploader callback={handleImageChange}/>}
            <Button variant="contained" color="primary" 
            className='self-end' type="submit">{edit?"save":"edit"}</Button>
      </Box>
  )
}


