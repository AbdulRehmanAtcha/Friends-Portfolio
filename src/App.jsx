import './App.css'
import { useEffect, useState, lazy, Suspense } from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Packet = lazy(() => import('./components/Packet'));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Suspense fallback={<div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#915eff"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>}>
        <Packet />
      </Suspense>
    </>
  )
}

export default App
