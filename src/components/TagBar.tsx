import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function TagBar ({callback}:{callback:Function}): JSX.Element {


  return (
        <div className="w-3/5 p-5">
        <Autocomplete
            multiple
            id="tags-standard"
            options={tags}
            onChange={(event, value) => callback(value)}
            getOptionLabel={(option) => option.title}
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

const tags = [
  { title: 'Music' },
  { title: 'Art' },
  { title: 'Sports' },
  { title: 'Food' },
  { title: 'Culture' },
  { title: 'Education' },
  { title: 'Health' },
  { title: 'Science' },
  { title: 'Technology' },
  { title: 'Business' },
  { title: 'Politics' }
]
