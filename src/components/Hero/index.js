import React from 'react'
import { motion } from 'framer-motion';


function Hero() {

  
  return (
    <div className=' relative overflow-hidden'>
      <motion.div 
      className='absolute top-20 left-0 w-full flex '
      animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 30, // Длительность одного цикла анимации
          ease: 'linear',
          repeat: Infinity, // Анимация будет повторяться бесконечно
        }}
      
      >
        <img className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
        <img className='w-full h-full object-cover' src="/images/clouds.png" alt="" />
      </motion.div>
      <div  className='absolute  w-full  h-[30%] -top-12 translate-y-full max-xl:translate-y-[90%] max-lg:translate-y-[95%] max-md:translate-y-[14%] max-[442px]:translate-y-6 z-10 '>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-1.png" alt="" />
      </div>
      <div className='absolute w-full h-[40%] -top-20 translate-y-3/4 max-xl:translate-y-[60%] max-lg:translate-y-[65%] max-md:translate-y-[3%] max-[442px]:-translate-y-16 z-20'>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-2.png" alt="" />
      </div>
      <div className='absolute  w-full h-[50%] -top-96 translate-y-full max-xl:translate-y-[85%] max-lg:translate-y-[90%] max-md:translate-y-[20%] max-[442px]:translate-y-40 z-30'>
        <img className='w-full h-full object-contain xl:object-cover overflow-visible' src="/images/bg-3.png" alt="" />
      </div>
      <div className='absolute top-[23%] translate-y-1/2 left-64 max-xl:left-52 max-lg:left-40 max-md:top-[10%] max-md:left-12 max-[442px]:top-52'>
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
          <div className='relative z-50 max-md:mt-12'>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className='bg-form bg-no-repeat bg-contain bg-center  w-540 h-427 relative px-12 z-50 max-md:hidden'>
            <div className='flex justify-center -mt-4 max-lg:mt-12'>
              <img src="/images/form-title.png" alt="" />
            </div>
            <div className='mt-4 max-lg:mt-0'>
              <div className='bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5'>
                <input className='w-full h-full font-lilitaOneRegular text-input placeholder:text-input text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="text" placeholder='ENTER FULL NAME'/>
              </div>
              <div className='bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5 mt-3 max-lg:mt-0'>
                <input className='w-full h-full font-lilitaOneRegular text-input placeholder:text-input text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="email" placeholder='ENTER EMAIL'/>
              </div>
            </div>
            <div className='flex justify-center mt-4 max-lg:mt-0'>
              <button>
                <img src="/images/button.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-benefits max-md:bg-ground bg-no-repeat bg-cover bg-top w-full h-full relative mt-36 max-xl:mt-0  max-md:mt-24 pb-72 max-lg:pb-36 z-50'>
          <div className='container mx-auto max-md:w-11/12 px-8 max-md:px-0 flex flex-col items-center'>
          <div className='bg-form bg-no-repeat flex flex-col justify-center items-center bg-contain py-0  bg-center w-540 max-md:w-full h-427 max-md:min-h-[427px] relative px-12  max-md:px-8 z-50 md:hidden  max-md:-mt-6'>
            <div className='flex justify-center -mt-4 max-lg:mt-12 max-md:-mt-28 max-[592px]:-mt-6 '>
              <img src="/images/form-title.png" alt="" />
            </div>
            <div className='mt-4 max-lg:mt-0 max-md:mt-0'>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5'>
                <input className='w-full h-full font-lilitaOneRegular text-input placeholder:text-input text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="text" placeholder='ENTER FULL NAME'/>
              </div>
              <div className='w-full bg-input-field bg-contain bg-center bg-no-repeat py-1 ps-8 pe-5 mt-3 max-lg:mt-0 max-md:mt-0'>
                <input className='w-full h-full font-lilitaOneRegular text-input placeholder:text-input text-xl py-5 bg-transparent border-none outline-none focus:border-none ' type="email" placeholder='ENTER EMAIL'/>
              </div>
            </div>
            <div className='flex justify-center mt-4 max-lg:mt-0'>
              <button>
                <img src="/images/button.png" alt="" />
              </button>
            </div>
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
            <div className='w-full flex max-md:flex-col justify-center gap-2 mt-14'>
              <div className='flex-1 flex flex-col items-center'>
                <div>
                  <img src="/images/benefit-1.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px] text-center text-nowrap max-xl:text-wrap'>Unlock a special skin <br className='max-xl:hidden'/> that's only available to <br className='max-xl:hidden'/> our waiting list <br className='max-xl:hidden'/> members!</p>
              </div>
              <div className='flex-1 flex flex-col items-center'>
                <div>
                  <img src="/images/benefit-2.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px] text-center text-nowrap max-xl:text-wrap'>Enjoy exclusive in-game <br className='max-xl:hidden'/> items and perks just for <br className='max-xl:hidden'/> subscribers.</p>
              </div>
              <div className='flex-1 flex flex-col items-center'>
                <div>
                  <img src="/images/benefit-3.png" alt="" />
                </div>
                <p className='font-lilitaOneRegular text-[#C0ED62] text-[28px] text-center text-nowrap max-xl:text-wrap'>Get early access to the <br className='max-xl:hidden'/> freshest gameplay <br className='max-xl:hidden' /> before anyone else!</p>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 w-full'>
            <img className='w-full h-full object-cover' src="/images/foreground.png" alt="" />
          </div>
      </div>
      
      

    </div>
  )
}

export default Hero


