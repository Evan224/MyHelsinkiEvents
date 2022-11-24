import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import useFetch from '@/utils/hooks/useFetch'
import {getAllTags} from '@/utils/http/otherRequest'


interface Itag{
  name?: string,
  id?: number,
}

export default function TagBar ({callback}:{callback:Function}): JSX.Element {
  // const [tags, setTags] = useState<Itag[]>([{}])
  const [tags]=useFetch(getAllTags,{},'')

  if(!tags?.data){
    return <div></div>
  }

  return (
        <div className="w-3/5 p-5">
        <Autocomplete
            multiple
            id="tags-standard"
            options={tags.data}
            onChange={(event, value) => callback(value)}
            getOptionLabel={(option:Itag) => option?.name||""}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label="Tags"
                placeholder="Favorites"
            />
            )}
        />
        </div>
  )
}
