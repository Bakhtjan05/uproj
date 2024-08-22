import React, {useEffect, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';






function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [recaptchaVisible, setRecaptchaVisible] = useState(false); // Состояние видимости ReCAPTCHA

  const { scrollY } = useScroll();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setRecaptchaVisible(true); 
  };

  const onRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaVisible(false); // Скрыть ReCAPTCHA после прохождения
    addContactToList(); // Вызвать функцию отправки email после прохождения ReCAPTCHA
  };

  const addContactToList = async () => {
    try {
      const response = await axios.post('/api/send-email', {
        listIds: [9],
        name: name,
        email: email,
      });
      console.log('Server response:', response.data);
      alert('Contact added to list successfully!');
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('Failed to add contact to list');
    }
  };
  

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Проверяем при монтировании

    window.addEventListener('resize', checkScreenSize); // Слушаем изменения размера экрана

    return () => window.removeEventListener('resize', checkScreenSize); // Убираем слушателя при размонтировании
  }, []);

  
  const bg1Y = useTransform(scrollY, isMobile ? [0, 3000] : [0, 3000], [0, -550]);
  const bg2Y = useTransform(scrollY, isMobile ? [0, 3000] : [0, 3000], [0, -750]);
  const bg3Y = useTransform(scrollY, isMobile ? [0, 3000] : [0, 3000], [0, -1000]);
  const benefitsY = useTransform(scrollY, [0, 1000], [0, -300]);

  

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({ scale: [0.96, 0.76, 0.88, 0.784, 0.816, 0.8], opacity: 1 });
    } else {
      controls1.start({ scale: 0, opacity: 0 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ scale: [0.96, 0.76, 0.88, 0.784, 0.816, 0.8], opacity: 1 });
    } else {
      controls2.start({ scale: 0, opacity: 0 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ scale: [0.96, 0.76, 0.88, 0.784, 0.816, 0.8], opacity: 1 });
    } else {
      controls3.start({ scale: 0, opacity: 0 });
    }
  }, [controls3, inView3]);


  
  return (
    <div className=' relative overflow-hidden'>
      <div className='bg-[#19360F] absolute left-0 bottom-0 w-full h-1/3   z-20'>

      </div>
      <motion.div 
      className='absolute top-20 left-0 w-full flex '
      animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 30, 
          ease: 'linear',
          repeat: Infinity, 
        }}
      
      >
        <img className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
        <img className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg1Y }}  className='absolute  w-full  h-[30%] top-[29%] translate-y-full max-xl:top-[24%] max-lg:translate-y-[95%] max-md:top-[9%] max-[442px]:top-[8%] z-10 '>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-1.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg2Y }} className='absolute w-full h-[40%] top-[24%] translate-y-3/4 max-xl:top-[20%] max-lg:translate-y-[65%] max-md:top-[3%] max-[442px]:top-[3%] z-20'>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-2.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg3Y }} className='absolute  w-full h-[50%] top-[24%] translate-y-full max-xl:top-[20%] max-lg:translate-y-[90%] max-md:top-[1%] max-[442px]:top-[1%] z-30'>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-3.png" alt="" />
      </motion.div>
      <div className='absolute top-[22%] translate-y-1/2 left-64 max-xl:left-52 max-lg:left-40 max-md:top-[10%] max-md:left-12 max-[442px]:top-52'>
        <div className='relative w-32'>
          <div className='absolute -left-8 top-0 max-[442px]:-left-1 max-[442px]:top-5 z-50'>
            <motion.img className='w-full h-full object-cover max-[442px]:w-20' src="/images/windmill-top.png" alt="Windmill Top" 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}/>
          </div>
          <div className='absolute left-0 top-[50px] z-40'>
            <img src="/images/windmill-bottom.png" alt="Windmill Bottom"/>
          </div>
       </div>
      </div>
      
      <div className='container mx-auto max-md:w-11/12 px-16 max-xl:px-4'>
        <div className='mt-10 max-xl:mt-3  max-md:flex max-md:justify-center'>
          <h2 className='text-xl text-white font-interBlack'>MIR STUDIOS</h2>
        </div>
        <div className='flex gap-16 justify-between items-center mt-8 max-lg:mt-0 max-md:flex-col'>
          <motion.div  className='relative z-50 max-md:mt-12'>
            <img src="/images/logo.png" alt="" />
          </motion.div>
          <motion.div  className='bg-form  bg-no-repeat bg-contain bg-center  w-540 h-427 relative px-12 z-50 max-md:hidden'>
            <div className='flex justify-center -mt-4 max-lg:mt-12'>
              <img src="/images/form-title.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className='mt-4 max-lg:mt-0'>
              <div className='bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5'>
                <input
                  className='w-full h-full font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="text" placeholder='ENTER FULL NAME'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  />
              </div>
              <div className='bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5 mt-3 max-lg:mt-0'>
                <input 
                className='w-full h-full font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="email" placeholder='ENTER EMAIL'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
              </div>
              {recaptchaVisible && (
              <div className='mt-2 ps-3'>
                <ReCAPTCHA
                sitekey="6Le1NCwqAAAAAHD2Rm-4cOCQbs86Mi46J8mBd7Z6"
               onChange={onRecaptchaChange}
                   />
                </div>
              )}
            <div className='flex justify-center mt-4 max-lg:mt-0'>
              <button type="submit">
                <img src="/images/button.png" alt="" />
              </button>
            </div>
            </form>
            
          </motion.div>
        </div>
      </div>
      <motion.div style={{ y: benefitsY}} className='max-md:-mb-36  bg-benefits max-md:bg-ground bg-no-repeat bg-cover overflow-hidden bg-top w-full h-full relative mt-36 max-xl:mt-0  max-md:mt-24  z-50'>
          <div className='container mx-auto max-md:w-11/12 px-8 max-md:px-0 flex flex-col items-center '>
          <div className='bg-form overflow-visible bg-no-repeat flex flex-col justify-center items-center bg-contain py-0  bg-center w-540 max-md:w-full h-427 max-md:min-h-[427px] relative px-12  max-md:px-8 z-50 md:hidden  max-md:-mt-6'>
            <div className='flex justify-center -mt-4 max-lg:mt-12 max-md:-mt-28 max-[592px]:-mt-6 overflow-visible'>
              <img src="/images/form-title.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className=' w-11/12 mt-4 max-lg:mt-0 max-md:mt-0 px-8 max-sm:px-0'>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5 '>
                <input value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                   className='w-full h-full  font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="text" placeholder='ENTER FULL NAME'/>
              </div>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5 mt-3 max-lg:mt-0 max-md:mt-0'>
                <input value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                   className='w-full h-full font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="email" placeholder='ENTER EMAIL'/>
              </div>
              {recaptchaVisible && (
              <div className='mb-2 ps-3 max-md:ps-0 overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
              <div className='w-full flex justify-center'>
                <div className='w-full max-w-xs scale-75 md:scale-100'>
                  <ReCAPTCHA
                    sitekey="6Le1NCwqAAAAAHD2Rm-4cOCQbs86Mi46J8mBd7Z6"
                    onChange={onRecaptchaChange}
                  />
                </div>
              </div>
            </div>
              )}
            <div className='flex justify-center mt-4 max-lg:mt-0'>
              <button type="submit" className='max-sm:w-3/4'>
                <img className='w-full h-full object-cover' src="/images/button.png" alt="" />
              </button>
            </div>
            </form>
          </div>
            <div className='w-full flex justify-between items-end relative max-xl:mt-28 max-md:-mt-8'>
              <div className='flex-1 max-lg:flex-auto max-md:flex-1 max-md:-ms-4'>
                <img className=' ' src="/gif/cabbie.gif" alt="" />
              </div>
              <div className='flex-2 max-md:hidden'>
              <img  src="/images/benefits-text.png" alt="" />
              </div>
              <div className='flex-2 md:hidden'>
              <img  src="/images/benefits-text-md.png" alt="" />
              </div>
              <div className='flex-1 max-lg:flex-auto max-md:flex-1 max-md:-me-4'>
                <img className='' src="/gif/brook.gif" alt="" />
              </div>
            </div>
            <div className='w-full flex max-md:flex-col justify-center gap-2 max-sm:gap-0 mt-14'>
              <motion.div
               className='flex-1 flex flex-col items-center px-8'
               ref={ref1}
              initial={{ scale: 0, opacity: 0 }}
              animate={controls1}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
               >
                <div className='max-sm:w-1/2'>
                  <img className='w-full h-full object-cover' src="/images/benefit-1.png" alt="" />
                </div>
                <p className='relative z-50 font-lilitaOneRegular text-[#C0ED62] text-[28px] max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Unlock a special skin <br className='max-xl:hidden'/> that's only available to <br className='max-xl:hidden'/> our waiting list <br className='max-xl:hidden'/> members!</p>
              </motion.div>
              <motion.div 
              className='flex-1 flex flex-col items-center px-8'
              ref={ref2}
              initial={{ scale: 0, opacity: 0 }}
              animate={controls2}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <div className='max-sm:w-1/2'>
                  <img src="/images/benefit-2.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px]  max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Enjoy exclusive in-game <br className='max-xl:hidden'/> items and perks just for <br className='max-xl:hidden'/> subscribers.</p>
              </motion.div>
              <motion.div
               className='flex-1 flex flex-col items-center px-8'
               ref={ref3}
              initial={{ scale: 0, opacity: 0 }}
              animate={controls3}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
               >
                <div className='max-sm:w-1/2'>
                  <img src="/images/benefit-3.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px]  max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Get early access to the <br className='max-xl:hidden'/> freshest gameplay <br className='max-xl:hidden' /> before anyone else!</p>
              </motion.div>
            </div>
          </div>
          
      </motion.div>
      
      <div className='absolute bottom-0 overflow-visible w-full z-50'>
          <img className='w-full h-full object-cover' src="/images/foreground.png" alt="" />
      </div>

    </div>
  )
}

export default Hero


