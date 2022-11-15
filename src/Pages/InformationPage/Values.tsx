import { Typography } from '@mui/material'

function ValueItem (Props: { value: string, text: string }): JSX.Element {
  return (
        <div className="flex flex-col  w-1/3 font-thin opacity-50 p-5">
            <Typography variant="h5" component="div" className='pb-2'>
               {Props.value}
            </Typography>
            <Typography variant="body1" component="div" >
                {Props.text}
            </Typography>
        </div>
  )
}

export default function Values (): JSX.Element {
  return (
        <div className='bg-gradient-to-r from-cyan-100 to-blue-500 p-4'>
        <div className='flex flex-wrap w-4/5 mx-auto'>
            {ValueList.map((value, index) => {
              return (
                    <ValueItem key={index} value={value.value} text={value.text} />
              )
            })}
        </div>
        </div>
  )
}

const ValueList = [
  {
    value: 'Dynamic Teams',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    value: 'Great teammates',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    value: 'Open communication',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    value: 'Autonomy and attitude',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    value: 'Support and win',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    value: 'Teamwork makes the dream work',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
]
