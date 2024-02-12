import { useContext } from 'react';
import { SurveyContext } from './context/steps';

function App() {
  const ctx = useContext(SurveyContext);
  if (!ctx) return;
  return (
    <main className='flex justify-center items-center w-full h-[100vh] bg-yellow-200 text-5xl flex-col'>
      <div className='text-lg text-black border border-black bg-gray-100 w-full max-w-md px-3 py-1 rounded-full flex justify-between mb-20'>
        <span>language: {ctx?.language}</span>
        <span>FLoor : {ctx?.etage}</span>
      </div>
      <h1 className='mb-5 '>Choose Floor Number</h1>
      <div className='border flex-col p-1 flex gap-3'>
        <button onClick={() => ctx.setLanguage('AR')}>Arabic</button>
        <button onClick={() => ctx.setLanguage('EN')}>English</button>
        <button onClick={() => ctx.setLanguage('FR')}>French</button>
      </div>
    </main>
  );
}

export default App;

function Etage({ etage }: { etage: number }) {
  return (
    <div className='rounded-full border-blue-500 border-4'>
      <div className='px-10 py-3 flex text-5xl rounded-full  text-white bg-blue-500  m-1'>
        <span>{etage}</span>
        <small className='mr-2'>{etage === 1 ? 'er' : 'eme'}</small>{' '}
        <span>Etage</span>
      </div>
    </div>
  );
}
