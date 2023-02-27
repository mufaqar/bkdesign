import { useEffect, useRef } from 'react';

function MyComponent() {
  const myDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = myDivRef.current.getBoundingClientRect();
      const distanceFromTop = rect.top;
      console.log(distanceFromTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className='my-[800px]'></div>
    <div id="myDiv" ref={myDivRef} className="bg-red-500 p-10">
      {/* Your content here */}
    </div>
    <div className='my-[800px]'></div>

    </>
  );
}

export default MyComponent