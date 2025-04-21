import { useEffect, useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleBackToTop);
    window.addEventListener('load', toggleBackToTop);

    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
      window.removeEventListener('load', toggleBackToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
    <a href='#'
      onClick={scrollToTop}
      className={`back-to-top d-flex align-items-center justify-content-center  text-white ${visible ? 'active' : ''}`}
    >
      Move to top <FaArrowUpLong />
    </a>
    </div>
  );
};

export default BackToTop;
