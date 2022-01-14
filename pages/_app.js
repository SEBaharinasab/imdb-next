import Nav from '../components/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='relative flex flex-col min-h-screen'>
        <Nav />
        <main className={"flex-1 bg-gray-200 mb-10"}>
          <div className='container mx-auto p-4'>
            <Component {...pageProps} />
          </div>
        </main>
        <footer className='fixed -z-10 inset-x-0 bottom-0 bg-gray-900 text-gray-300 text-center' >
          <div className='relative flex justify-around'>
            <div className='copy py-2'>
              CopyRight
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
