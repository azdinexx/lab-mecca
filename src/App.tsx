import './App.css';

function App() {
  return (
    <main className='flex flex-col gap-5 '>
      <h1 className='mb-5 max-w-[15ch]'>vous allez ou?</h1>
      {[1, 2, 3, 4].map((etage) => (
        <Etage key={etage} etage={etage} />
      ))}
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
