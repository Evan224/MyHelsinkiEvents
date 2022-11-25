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
    text: 'Our group is very dynamic and we are always looking for new members to join us.'
  },
  {
    value: 'Great teammates',
    text: 'Our team is very friendly and we are always caring about each other.'
  },
  {
    value: 'Open communication',
    text: 'We are open to new ideas and we are always ready to listen to our teammates.'
  },
  {
    value: 'Autonomy and attitude',
    text: 'We are a team of highly motivated people who love what they do.'
  },
  {
    value: 'Support and win',
    text: 'We are always ready to help each other and we are always ready to win.'
  },
  {
    value: 'Teamwork makes the dream work',
    text: 'We are always ready to work together and we are always ready to achieve our goals.'
  }
]
