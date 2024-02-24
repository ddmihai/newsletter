import './App.css'
import SVGDesktop from './assets/illustration-sign-up-desktop.svg'
import SVGMobile from './assets/illustration-sign-up-mobile.svg'
import CheckboxPharagraph from './components/CheckboxPharagraph';
import TextInput from './components/Input';
import Title from './components/Title';
import { useEffect, useState } from 'react';


function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  

  return (
   <main className='bg-charcoalGrey h-screen flex items-start justify-center
      md:items-center 
   '>
      
      <section className='
      bg-white flex flex-wrap-reverse rounded-none
            w-full
            sm:max-w-xl sm:rounded-3xl sm:m-2 
            md:max-w-4xl
          '>

        <aside className='flex-1 basis-[350px] p-8 py-16'>
          <Title>Stay updated!</Title>
          <p className='text-darkSlateGray py-4'>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className='[&>p]:my-4'>
            <CheckboxPharagraph content='Product discovery and building what matters' />
            <CheckboxPharagraph content='Measuring to ensure updates are a success' />
            <CheckboxPharagraph content='And much more!' />
          </div>

          <TextInput />
        </aside>

        {/* right side of the section Image CONTAINER */}
        <aside className='flex-1 basis-[350px] md:p-3'>
          {/* Conditional rendering based on viewport width */}
          {window.innerWidth >= 768 ? (
            <img src={SVGDesktop} alt="Desktop variant of pict" className='w-full' />
          ) : (
            <img src={SVGMobile} alt="Mobile variant of pict" className='w-full' />
          )}
        </aside>
      </section>
   </main>
  )
}

export default App
