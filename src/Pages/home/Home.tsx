import { Button } from '@/components/ui/button';
import './Home.css'
import { Link } from 'react-router';
const Home = () => {
    const today = new Date()
    return (
        <div className="myBanner flex justify-center items-center">
            <div className='w-full max-w-3xl p-3 container mx-auto text-center'>
                <p className='font-bold'>{today.toDateString()}</p>
                <h1 className='text-5xl font-black'>Plan Smarter. Achieve More.</h1>
                <p className='text-gray-600 text-xl my-3'>Stay focused, manage your day, <br /> and achieve your goals with ease — all in one app.</p>
                <Link to={'/add'}>
                    <Button  variant="outline" className='bg-green-500 hover:bg-green-600'>Start Planning</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;