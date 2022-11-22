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
            getOptionLabel={(option) => option.name}
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
  { name: 'Music' },
  { name: 'Art' },
  { name: 'Sports' },
  { name: 'Food' },
  { name: 'Culture' },
  { name: 'Education' },
  { name: 'Health' },
  { name: 'Science' },
  { name: 'Technology' },
  { name: 'Business' },
  { name: 'Politics' }
]
