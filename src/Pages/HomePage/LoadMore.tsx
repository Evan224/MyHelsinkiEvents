import Button from '@mui/material/Button'

export default function LoadMore (): JSX.Element {
  return (
          <div className='flex justify-center w-4/5 mx-auto text-cyan-800 h-[10vh] p-6 '>
            <Button size="large" variant="contained" sx={{
              padding: '1rem',
            }}>Load More ...</Button>
          </div>
  )
}
