import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function EmptyEventList (): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center w-[100vw] h-[60vh]">
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">oops! </span> 
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">There are no events in this category yet.</p>
            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of events on our homepage.</p>
            <Button variant="contained" color="primary" className="w-1/2 p-4"
            onClick={() => navigate('/')}
            >homepage</Button>
            </div>
            </div>
             </section>
          </div>
    )
  }
  