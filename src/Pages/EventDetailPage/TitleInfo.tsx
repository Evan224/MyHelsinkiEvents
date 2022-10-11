import Typography from '@mui/material/Typography'

interface TitleProps {
  title: string
  Date: string
  Location: string
}

export default function TitleInfo (props: TitleProps): JSX.Element {
  console.log(props)
  const DateStirng = new Date(props.Date).toUTCString()
  return (
        <div className="flex flex-col w-4/5 mx-auto min-h-40 justify-center border-b-2 border-blue-200 my-2">
            <Typography variant="h6" className='text-red-500 opacity-70 py-2'>
                {DateStirng}
            </Typography>
            <Typography variant="h4" className="">
                {props.title}
            </Typography>
            <Typography variant="body2" className='py-2'>
                {props.Location}
            </Typography>
        </div>
  )
}
