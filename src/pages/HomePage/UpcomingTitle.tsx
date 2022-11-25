interface TitleProps {
  title: string
}

export default function Title (props: TitleProps): JSX.Element {
  return (
        <div className='flex-col w-4/5 mx-auto text-cyan-800 min-h-[8vh] my-10'>
            <div>
                <h1 className='text-4xl font-bold'>{props.title}</h1>
            </div>
        </div>
  )
}
