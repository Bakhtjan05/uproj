import React, {useEffect, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import Image from 'next/image';






function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [recaptchaVisible, setRecaptchaVisible] = useState(false); // Состояние видимости ReCAPTCHA

  const { scrollY } = useScroll();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // Состояние для отображения блоков


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
      const response = await axios.post('/api/send-email', { name, email });
      console.log('Server response:', response.data);
      setStatus('success'); // Успешное добавление
      setName(''); // Очистить поле имени
      setEmail(''); // Очистить поле email
    } catch (error) {
      console.error('Error adding contact:', error);

      if (error.response && error.response.status === 500) {
        setStatus('exists'); // Email уже существует
      } else {
        setStatus('error'); // Общая ошибка
      }
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
  const logoY = useTransform(scrollY, isMobile ? [0, 5000] : [0, 4000], [0, -1000]);
  const formY = useTransform(scrollY, isMobile ? [0, 8000] : [0, 4000], isMobile ? [0, -100] : [0, -800]);
  const benefitsY = useTransform(scrollY, [0, 1000], [0, -300]);

  
  return (
    <div className=' relative overflow-hidden'>
      {status === "success" && (
        <div className='absolute inset-0 w-full h-full bg-[#133400] opacity-80 z-[80]'></div>
      )}
      {status === "exists" && (
        <div className='absolute inset-0 w-full h-full bg-[#133400] opacity-80 z-[80]'></div>
      )}
      {status === "error" && (
        <div className='absolute inset-0 w-full h-full bg-[#133400] opacity-80 z-[80]'></div>
      )}
      <div className='bg-[#19360F] absolute left-0 bottom-0 w-full h-1/3   z-20'>

      </div>
      <motion.div 
      className='absolute top-20 left-0 w-full flex '
      animate={{ x: ['0%', '-79%'] }}
        transition={{
          duration: 30, 
          ease: 'linear',
          repeat: Infinity, 
        }}
      
      >
        <Image width={1100} height={400} className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
        <Image width={1100} height={400} className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg1Y }}  className='absolute  w-full  h-[30%] top-[29%] translate-y-full max-xl:top-[24%] max-lg:translate-y-[95%] max-md:top-[9%] max-[442px]:top-[7%] z-10 '>
        <Image width={1000} height={300} className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-1.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg2Y }} className='absolute w-full h-[40%] top-[24%] translate-y-3/4 max-xl:top-[20%] max-lg:translate-y-[65%] max-md:top-[3%] max-[442px]:top-[3%] z-20'>
        <Image width={1000} height={300} className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-2.png" alt="" />
      </motion.div>
      <motion.div style={{ y: bg3Y }} className='absolute  w-full h-[50%] top-[24%] translate-y-full max-xl:top-[20%] max-lg:translate-y-[90%] max-md:top-[1%] max-[442px]:top-[1%] z-30'>
        <Image width={1000} height={300} className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-3.png" alt="" />
      </motion.div>
      <div className='absolute top-[22%] translate-y-1/2 left-64 max-xl:left-52 max-lg:left-40 max-md:top-[10%] max-md:left-12 max-[442px]:top-52'>
        <div className='relative w-32'>
          <div 
          className='absolute -left-8 top-0 max-[442px]:-left-1 max-[442px]:top-5 z-50'>
            <motion.img 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
             className='w-full h-full object-cover max-[442px]:w-20' src="/images/windmill-top.png" alt="Windmill Top" 
              />
          </div>
          <div className='absolute left-0 top-[50px] z-40'>
            <Image width={70} height={100} src="/images/windmill-bottom.png" alt="Windmill Bottom"/>
          </div>
       </div>
      </div>
      
      <div className='container relative mx-auto max-md:w-11/12 px-16 max-xl:px-4 '>
      {status === "success" && (
          <div className=''>
        <div className=' w-1/2 max-[1300px]:w-3/5 max-lg:4/6 max-md:w-11/12  max-md:h-48  bg-success bg-contain  bg-no-repeat bg-center fixed justify-center items-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[90] font-lilitaOneRegular text-center py-12 px-12 min-[1600px]:px-28  max-xl:py-24 max-xl:px-10 max-lg:py-6 max-sm:py-14 max-sm:px-6 '>
        <div className=' relative py-12 px-12 max-xl:py-10 max-xl:px-16 max-lg:py-9 max-lg:px-24 max-sm:px-6 text-center'>
          <h1 className='text-[42px] max-xl:text-[32px] max-lg:text-[24px] max-sm:text-[18px] text-[#0C360A] -mt-6 max-sm:-mt-12'>Successful</h1>
          <p className='text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-sm:text-[14px] text-[#445930] leading-2'>Congratulations! You have been successfully added to our waiting list. We'll keep you updated with our latest news.</p>
          <button onClick={() => setStatus(null)} className='absolute left-1/2 -translate-x-1/2 -bottom-6 translate-y-1/2 text-[28px] max-xl:text-[22px] max-lg:text-[18px] max-sm:text-[16px] text-[#0C360A] bg-[#E6FFC6] hover:bg-[#bad596] border-[12px] max-lg:border-[8px] border-[#0C360A] py-3 px-16 max-xl:px-12 max-lg:py-2 max-lg:px-9 max-lg:-bottom-0 max-sm:bottom-0 max-sm:px-6 max-sm:border-4 max-sm:py-1'>Thanks</button>
        </div>
      </div>
          </div>
      )}
      {status === "exists" && (
        <div>
          <div className='max-sm:w-11/12 fixed bg-registered bg-contain bg-no-repeat bg-center w-3/5  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] font-lilitaOneRegular text-center py-8 px-12 max-xl:py-5 max-xl:px-6 max-lg:py-12 max-lg:w-3/4'>
        <div className='relative py-8 px-12 max-xl:py-8 max-xl:px-6 max-lg:py-3 max-lg:px-0'>
          <h1 className='text-[42px] max-xl:text-[32px] max-lg:text-[24px] max-sm:text-[20px] text-[#36230A]'>Already Registered</h1>
          <p className='text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-sm:text-[16px] text-[#594A30]'>You are already Registered.</p>
          <button onClick={() => setStatus(null)} className='absolute left-1/2 -translate-x-1/2 bottom-4 translate-y-full text-[28px] max-xl:text-[22px] max-lg:text-[18px] max-sm:text-[18px] text-[#36230A] bg-[#FFF6C6] hover:bg-[#dcd5a9] border-[12px] max-lg:border-[8px] border-[#36230A] py-4 px-16 max-xl:px-20 max-lg:py-2 max-lg:px-9 max-lg:-bottom-7 max-sm:bottom-0 max-sm:px-10 max-sm:border-4 max-sm:py-1 text-nowrap'>Got It</button>
        </div>
      </div>
        </div>
      )}
      {status === "error" && (
        <div>
          <div className=' fixed bg-error bg-contain bg-no-repeat bg-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] font-lilitaOneRegular text-center py-14 px-16 max-xl:py-5 max-xl:px-6 max-lg:py-12 max-lg:w-3/4'>
        <div className='relative py-14 px-16 max-xl:py-8 max-xl:px-6 max-lg:py-3 max-lg:px-0'>
          <h1 className='text-[42px] max-xl:text-[32px] max-lg:text-[24px] max-sm:text-[16px] text-[#0C360A]'>Error</h1>
          <p className='text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-sm:text-[12px] text-[#445930]'>There some problem either try with different name & email or try with different email.</p>
          <button onClick={() => setStatus(null)} className='absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-1/2 text-[28px] max-xl:text-[22px] max-lg:text-[18px] max-sm:text-[14px] text-[#0C360A] bg-[#E6FFC6] hover:bg-[#bad596] border-[12px] max-lg:border-[8px] border-[#0C360A] py-4 px-24 max-xl:px-20 max-lg:py-2 max-lg:px-9 max-lg:-bottom-5 max-sm:px-6 max-sm:border-4 max-sm:py-1'>Okay</button>
        </div>
      </div>
        </div>
      )}
        <div className='mt-10 max-xl:mt-3  max-md:flex max-md:justify-center'>
          <h2 className='text-xl text-white font-interBlack'>MIR STUDIOS</h2>
        </div>
        <div className='flex gap-16 justify-between items-center mt-8 max-lg:mt-0 max-md:flex-col'>
          <motion.div style={{ y: logoY }} className='relative z-50 max-md:mt-12'>
            <Image width={525} height={200} src="/images/logo.png" alt="" />
          </motion.div>
          <motion.div style={{ y: formY }}  className='bg-form  bg-no-repeat bg-contain bg-center  w-540 h-427 relative px-12 z-50 max-md:hidden'>
            <div className='flex justify-center -mt-4 max-lg:mt-12'>
              <Image width={400} height={200} src="/images/form-title.png" alt="" />
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
              <div className="mb-2 mt-2 flex  justify-center items-center ">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
                <div className=" scale-75 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-100">
                  <ReCAPTCHA
                    sitekey="6Lfc2y0qAAAAALN7cgc81jaV-HkbRmWm-0gvdtoN"
                    onChange={onRecaptchaChange}
                  />
                </div>
              </div>
            </div>
              )}
            <div className='flex justify-center mt-4 max-lg:mt-0'>
             
              <div className='submit-btn w-4/5 h-[70px] relative mt-8' type="submit">
                <div className='w-full h-full absolute -top-5 bg-[#C0ED62] rounded-xl'>

                </div>
                <div className='btn-top-border w-full h-[80%] bg-[#3C650E] mt-1  rounded-xl border-[5px] border-[#1B4006]  flex justify-center absolute'>  
               </div>
                <button className='btn-text w-full h-full absolute -top-1 text-[32px] font-lilitaOneRegular text-white rounded-xl border-[5px] border-[#1B4006] -mt-4'>JOIN WISHLIST</button>   
              </div>

            </div>
            </form>
            
          </motion.div>
        </div>
      </div>
      <motion.div style={{ y: benefitsY}} className='max-md:-mb-36 bg-benefits max-md:bg-ground bg-no-repeat bg-cover overflow-hidden bg-top w-full h-full relative mt-36 max-xl:mt-0  max-md:mt-24  z-30 max-md:z-[70]'>
          <div className='container mx-auto max-md:w-11/12 px-8 max-md:px-0 flex flex-col items-center overflow-visible '>
          <motion.div style={{ y: formY }} className='bg-form overflow-visible bg-no-repeat flex flex-col justify-center items-center bg-contain py-0  bg-center w-540 max-md:w-full h-427 max-md:min-h-[427px] relative  px-12  max-md:px-8 z-50 md:hidden  max-md:-mt-6'>
            <div className='flex justify-center -mt-4 max-lg:mt-12 max-md:-mt-28 max-[592px]:-mt-6 overflow-visible'>
              <Image width={300} height={200} src="/images/form-title.png" alt="" />
            </div>
            <form onSubmit={handleSubmit} className=' w-11/12 mt-4 max-lg:mt-0 max-md:mt-0 px-8 max-sm:px-0'>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-0 ps-8 pe-5 mt-3'>
                <input value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                   className='w-full h-full  font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="text" placeholder='ENTER FULL NAME'/>
              </div>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-0 ps-8 pe-5 mt-3 max-lg:mt-0'>
                <input value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                   className='w-full h-full font-lilitaOneRegular text-input placeholder:text-place-holder focus:placeholder-transparent text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="email" placeholder='ENTER EMAIL'/>
              </div>
              {recaptchaVisible && (
              <div className="mb-0 flex  justify-center items-center ">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
                <div className=" scale-75 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-100">
                  <ReCAPTCHA
                    sitekey="6Lfc2y0qAAAAALN7cgc81jaV-HkbRmWm-0gvdtoN"
                    onChange={onRecaptchaChange}
                  />
                </div>
              </div>
            </div>
            
              )}
            <div className='flex justify-center mt-4 max-lg:mt-0'>
            <div className='submit-btn w-4/6 h-16 max-md:h-14 relative mt-6' type="submit">
              <div className='w-full h-full absolute -top-3 bg-[#C0ED62] rounded-xl'> </div>
              <div className='btn-top-border w-full h-[80%] bg-[#3C650E] mt-1  rounded-xl border-[3.5px] border-[#1B4006]  flex justify-center absolute'>  
                </div>
                <button className='btn-text w-full h-full absolute top-0 text-3xl max-md:text-xl font-lilitaOneRegular text-white rounded-xl border-[3.5px] border-[#1B4006] -mt-3'>JOIN WISHLIST</button> 
              </div>
            </div>
            </form>
          </motion.div>
            <div className='w-full flex justify-between items-end relative max-xl:mt-28 max-md:-mt-8'>
              <div className='flex-1 max-lg:flex-auto max-md:flex-1 max-md:-ms-4'>
                <Image width={300} height={200} className=' ' src="/gif/cabbie.gif" alt="" />
              </div>
              <div className='flex-2 max-md:hidden'>
              <Image width={750} height={200}  src="/images/benefits-text.png" alt="" />
              </div>
              <div className='flex-2 md:hidden'>
              <Image width={190} height={200}  src="/images/benefits-text-md.png" alt="" />
              </div>
              <div className='flex-1 max-lg:flex-auto max-md:flex-1 max-md:-me-4'>
                <Image width={400} height={200} className='' src="/gif/brook.gif" alt="" />
              </div>
            </div>
            <div className='w-full flex max-md:flex-col justify-center gap-2 max-lg:gap-10 mt-28 mb-16 max-lg:mb-0 max-lg:mt-16'>
              <div
               className='flex-1 flex flex-col items-center px-8'
               
               >
                <div className='max-sm:w-1/2'>
                  <Image width={200} height={200} src="/images/benefit-1.png" alt="" />
                </div>
                <p className='relative z-50 font-lilitaOneRegular text-[#C0ED62] text-[28px] max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Unlock a special skin <br className='max-xl:hidden'/> that's only available to <br className='max-xl:hidden'/> our waiting list <br className='max-xl:hidden'/> members!</p>
              </div>
              <div 
              className='flex-1 flex flex-col items-center px-8'
              
              >
                <div className='max-sm:w-1/2'>
                  <Image width={200} height={200} src="/images/benefit-2.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px]  max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Enjoy exclusive in-game <br className='max-xl:hidden'/> items and perks just for <br className='max-xl:hidden'/> subscribers.</p>
              </div>
              <div
               className='flex-1 flex flex-col items-center px-8'

               >
                <div className='max-sm:w-1/2'>
                  <Image width={200} height={200} src="/images/benefit-3.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px]  max-sm:text-base text-center text-nowrap max-xl:text-wrap'>Get early access to the <br className='max-xl:hidden'/> freshest gameplay <br className='max-xl:hidden' /> before anyone else!</p>
              </div>
            </div>
          </div>
          
      </motion.div>
      
      <div className='absolute bottom-0 overflow-visible w-full z-50'>
          <Image width={1200} height={200} className='w-full h-full object-cover' src="/images/foreground.png" alt="" />
      </div>

    </div>
  )
}

export default Hero


