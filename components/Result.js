import { Checkbox } from '@mui/material'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiCheckboxBlankLine } from 'react-icons/ri'
import { 
  MdKeyboardArrowDown } from 'react-icons//md'
function Information() {
  return (
    <section className='pt-6 bg-[#FFFFFF] flex'>

        {/* Form */}

     <div className='px-4 w-64'>
     <div className=''>
   <h1 className='font-bold text-[13px] sm:text-md text-[#0F1111]'>Kindle unlimited</h1>
   <p className='flex sm:items-center text-[10px] pt-4  sm:text-sm  sm:pt-1'><RiCheckboxBlankLine
    className='sm:cursor-pointer  
   sm:text-gray-500 h-5 w-5  sm:h-5  sm:rounded-md  sm:w-5  sm:pt-0 '/>
   <span className='hover:text-red-900 '> Kindle Unlimited Eligible</span></p>
   <h1 className='font-bold text-[10px] sm:text-[15px] text-[#0F1111] sm:pt-3'>Climate Pledge Friendly</h1>
   <p className='flex items-center text-[10px] sm:text-sm pt-2 sm:pt-0'><RiCheckboxBlankLine className='cursor-pointer  
   text-gray-500 h-5 rounded-md  w-5 '/>Climate Pledge Friendly</p>
     </div>
  <div className='pt-3'>
  <h1 className='text-md font-semibold'>Department</h1>
    <ul className='text-[18px] sm:text-[15px] pt-1'>
      
      <li className='hover:text-red-900 cursor-pointer'>Books</li>
      <li className='pl-2 hover:text-red-900 cursor-pointer'>Crafts,Hobbies & Home</li>
      <li className='hover:text-red-900 cursor-pointer'>Kindle Store</li>
      <li className='pl-2 hover:text-red-900 cursor-pointer'>Kindle eBooks</li>
      <li className='pl-2 hover:text-red-900 cursor-pointer'>Kindle Short Reads</li>
      <li className='hover:text-red-900 cursor-pointer '>Movies & TV</li>
      <li className='pl-2 hover:text-red-900 cursor-pointer'>Prime Video</li>
      <li className='pl-2 hover:text-red-900 cursor-pointer'>Movies & Films</li>
      <li className='hover:text-red-900 cursor-pointer'>Office & School Supplies</li>
      <li className='hover:text-red-900 cursor-pointer'>Office Electronics Products</li>
      <li className='flex items-center'><MdKeyboardArrowDown/>
      <li className='text-[13px] text-[#007185] hover:text-red-900 cursor-pointer'>See All 15 Department</li>
</li>
    </ul>
  </div>
  <div className=''>
    <h1 className='text-md font-bold'>Customers Reviews</h1>
    <div className='flex'>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
    <AiOutlineStar className='sm:h-5 sm:w-5 text-red-400'/>
    <span className='text-[12px] sm:text-sm '>& Up</span>
    </div>
  <div className='flex'>
  <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
    <AiOutlineStar className='sm:h-5 sm:w-5 text-red-400'/>
    <span className='text-[12px] sm:text-sm '>& Up</span>
  </div>
  <div className='flex'>
  <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
    <AiOutlineStar className='sm:h-5 sm:w-5 text-red-400'/>
    <span className='text-[12px] sm:text-sm '>& Up</span>
  </div>
  <div className='flex'>
  <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
      <AiFillStar className='sm:h-6 sm:w-6 text-yellow-500'/>
    <AiOutlineStar className='sm:h-[23px] sm:w-[23px] text-red-400'/>
    <span className='text-[12px] sm:text-sm '>& Up</span>
  </div>
  </div>
  <div>
    <h1 className='text-sm  pt-2 font-bold'>BookSeries</h1>
    <p className='flex items-center'><RiCheckboxBlankLine className='h-5 w-5 '/> Better Homes, and Cooking</p>
    <h1 className='text-[10px] sm:text-sm  pt-2'>Deals and Discount</h1>
   <p className='text-[10px] sm:text-[16px] '>All Discount</p>
   <p className='font-bold text-[10px] sm:text-sm pt-2'>Today's Deals</p>
   <h1 className='pt-2'>Prime Reading</h1>
   <p className='flex items-center'><RiCheckboxBlankLine className='h-5 w-5'/>Prime Reading Eligible</p>
  </div>
     </div>



<div className='flex flex-col pl-9'>
  
<h1 className='text-3xl sm:text-xl '>RESULTS
     
     <p className='text-xl sm:text-[16px] text-black sm:text-gray-600'>Price and other details may vary based on product size and color.</p>
     </h1>
     <div className='sm:flex'>

      <div className='flex justify-between'>



           {/* Websites Page */}
           <div>
            <div className=''>
           <div className='bg-gray-100 pl-11  w-64'>
           <img 
            className=' h-60 w-40  '  src='https://m.media-amazon.com/images/I/81Xg8qmk50S._AC_UL320_.jpg'
              alt='' />
               </div>
              <h1 className='text-[17px] hover:text-red-900'>The Website Homepage<br/> Blueprint: Write a 
                homepage<br/> that wows prospects, proves your <br/>credibility and converts visitors...</h1>

          
           <p className='text-blue-900 hover:text-red-900'>Part of: Digital Marketing 
           Success (2 <br/> Books)</p>
            </div>
           
           <div className='flex '>
            <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
      <span className='text-[#007185]'>47</span>
            </div>
            <div className='space-y-1'>
              <h1 className='text-md font-bold text-[#007185]'>Kindle</h1>
              <p className='text-md'><span className='text-sm '>$</span>0<span className='text-sm'>oo
              </span><span className='text-[#E67A00]'> Kindle</span>Unlimited</p>
              <p className='text-[12px] font-semibold text-gray-600'>Free with Kindle
               Unlimited membership <span className='text-[#007185]'> Join<br/>Now</span></p>
              <p>Available Instaintly</p>
              <p className='text-gray-600'>Or $2.99 to buy</p>
              <p>Other format: <span>Paperback</span></p>
            </div>
           
        </div>
     
     
     








       {/* Home Page */}
      <div className='flex space-x-20 sm:space-x-2'>
      <div className='ml-16 sm:ml-0'>
            <div className='pl-2 '>
           <div className='bg-gray-100 pl-11 sm:pl-11 w-64'>
           <img 
            className='h-60 w-40  '
              src='https://m.media-amazon.com/images/I/815af-SOQHL._AC_UL320_.jpg'
              alt='' />
               </div>
              <h1 className='text-lg  sm:text-[17px] hover:text-red-900'>How to Write Your Irresistible 
              <br/>Home Page in 7 Simple Steps:<br/> Your Blueprint to Website Home <br/>Page 
              Content that Converts</h1>

          
           <p className='text-blue-900 hover:text-red-900'>by Tammi Metzler</p>
            </div>
           
           <div className='flex '>
            <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
      <span className='text-[#007185]'>41</span>
            </div>
            <div className='space-y-1'>
              <h1 className='text-md font-bold text-[#007185]'>Kindle</h1>
              <p className='text-md'><span className='text-sm '>$</span>0<span className='text-sm'>oo
              </span><span className='text-[#E67A00]'> Kindle</span> Unlimited</p>
              <p className='text-[12px] font-semibold text-gray-600'>Free with Kindle
               Unlimited membership <span className='text-[#007185]'> Join<br/>Now</span></p>
              <p>Available Instaintly</p>
              <p className='text-gray-600'>Or $2.99 to buy</p>
            
            </div>
           
        </div>
     
     
       {/* Concho Valley */}
       <div>
            <div className=''>
           <div className='bg-gray-100 pl-11  w-64'>
           <img 
            className=' h-60 w-40  '  src='https://m.media-amazon.com/images/I/811ZsYD6uvL._AC_UL320_.jpg'
              alt='' />
               </div>
              <h1 className='text-[17px] hover:text-red-900'>Home Page<br/> <span className='text-md text-gray-700'>1998</span></h1>

         
            </div>
           
           <div className='flex '>
            <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
      <span className='text-[#007185]'>47</span>
            </div>
            <div className='space-y-1'>
              <h1 className='text-md font-bold text-[#007185]'>Prime Video</h1>
           
           
              <p>$4<span className='text-[10px]'>99</span><span>to rent</span></p>
            </div>
           
        </div>
        <div>
            <div className=''>
           <div className='bg-gray-100 pl-1  w-[280px] sm:w-60'>
           <img 
            className='h-60 w-60 '  
            src='https://m.media-amazon.com/images/I/71DaOdYi7LL._AC_UL320_.png'
              alt='' />
               </div>
              <h1 className='text-[17px] hover:text-red-900'>Concho Valley Homepage</h1>

          
           <p className='text-blue-900 hover:text-red-900'>June 10, 2017</p>
            </div>
           
           <div className='flex '>
            <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <AiFillStar className='h-5 w-5 text-yellow-500'/>
      <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
      <span className='text-[#007185]'>2</span>
            </div>
            <div className='space-y-1'>
              <h1 className='text-md font-bold text-[#007185]'>App</h1>
            
              <p className='text-[12px] font-semibold text-gray-600'>Free Download 
             </p>
             <p className='text-sm'>Available instantly on compatible devices.</p>
            </div>
           
        </div>
</div>
      </div>  
      </div>
      </div>
    </section>
  )
}

export default Information