import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface TitleProps {
  title: string
  Date: string
  Location: string
}

export default function TitleInfo (props: TitleProps): JSX.Element {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const DateStirng = new Date(props.Date).toLocaleDateString(options)
  const liked = false
  return (
        <div className="flex flex-col w-4/5 mx-auto min-h-40 justify-center border-b-2 border-blue-200 my-2">
            <Typography variant="h6" className='text-red-500 opacity-70 py-2'>
                {DateStirng}
            </Typography>
            <Typography variant="h4" className="">
                {props.title}
            </Typography>
            <Typography variant="body2" className='py-2 justify-between flex'>
                {props.Location}
                <Button variant={liked?"contained":"outlined"} color="primary" className="w-1/5">
                        {liked?"already liked!":"like this event"}</Button>
            </Typography>
        </div>
  )
}
