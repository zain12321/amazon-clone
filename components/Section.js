import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiCheckboxBlankLine } from 'react-icons/ri'
import { 
  MdKeyboardArrowDown } from 'react-icons//md'
import { Checkbox } from '@mui/material'
function Section() {
  return (
    <section className='pt-6 bg-[#FFFFFF] flex'>
    {/* Form */}
 <div className='px-4 w-64'>
 <div className=''>
<h1 className='font-bold text-[13px] sm:text-[17px] text-[#0F1111]'>New Releases</h1>
<p className='flex sm:items-center text-[14px] pt-4  sm:text-sm  sm:pt-1'>
<span className='hover:text-red-900 '>Last 30 days<br/> Last 90 days<br/> Coming Soon </span></p>
 </div>
<div className='pt-3'>
<h1 className='text-md font-bold'>Book Format</h1>
<ul className='text-[18px] sm:text-[15px] pt-1'>
  
  <li className='hover:text-red-900 cursor-pointer'>Paperback</li>
  <li className=' hover:text-red-900 cursor-pointer'>Hard Cover</li>
  <li className='hover:text-red-900 cursor-pointer'>Kindle Edition</li>
  <li className='hover:text-red-900 cursor-pointer'>Large Print</li>
  <li className='hover:text-red-900 cursor-pointer'>DOCX</li>
  <li className='hover:text-red-900 cursor-pointer '>Audible Audiobook</li>
  <li className=' hover:text-red-900 cursor-pointer'>Audio CD</li>
  <li className=' hover:text-red-900 cursor-pointer'>PDF</li>
  <li className='hover:text-red-900 cursor-pointer'>Bord Bbook</li>
  <li className='hover:text-red-900 cursor-pointer'>Spiral bound</li>
  <li className='hover:text-red-900 cursor-pointer'>ZIP</li>
  
</ul>
</div>
<div className=''>
<h1 className='text-md font-bold'>Author</h1>
<p>Better Homes and Gardens<br/>
Kristin Hannah</p>
<div className='flex flex-col'>
 
  <h1>Book Language</h1>
  <ul className='flex flex-col'>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>English</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>German</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>French</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>Spanish</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>Chinese (Chinse Traditional)</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>Hebrew</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>Japanese</li>
   <li className='flex items-center '><RiCheckboxBlankLine className='h-[22px] text-gray-500 w-[22px]'/>English</li>
  </ul>
</div>

</div>
 </div>



<div className='flex flex-col pl-9'>


 <div className='sm:flex'>

  <div className='flex justify-between'>



       {/* Websites Page */}
       <div>
        <div className=''>
       <div className='bg-gray-100 pl-11  w-64'>
       <img 
        className=' h-72 pr-4 w-48  pt-9'  src='https://m.media-amazon.com/images/I/91J3zFmB0BL._AC_UL320_.jpg'
          alt='' />
           </div>
          <h1 className='text-[17px] hover:text-red-900'>
            Get Ready for Pre-K Jumbo<br/> Workbook: Scholastic Early<br/> Learners (Jumbo Workbook)
          </h1>

      
       <p className='text-black hover:text-red-900'>by :<span className='text-[#007185]'>Schalogist</span></p>
        </div>
       
       <div className='flex '>
        <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
  <span className='text-[#007185]'>1,265</span>
        </div>
        <div className='space-y-1'>
          <h1 className='text-md font-bold text-[#007185]'>Paperback</h1>
          <p className='text-md'><span className='text-sm '>$</span>5<span className='text-sm'>99

          </span><span className='text-gray-500'> 122.99</span></p>
          <p className='text-[12px] font-semibold text-gray-600'>Ships to Pakistan</p>
          <p>More Buying Choices</p>
          <p className='text-gray-600'>Or $2.99<span>(67 used & new offers)</span></p>
          <p>Ages: 3 - 5 years</p>
        </div>
       
    </div>
 
 
 








   {/* Home Page */}
  <div className='flex space-x-20 sm:space-x-2'>
  <div className='ml-16 sm:ml-0'>
        <div className='pl-2 '>
       <div className='bg-gray-100   w-64'>
         <h1 className='bg-[#E67A00] w-24 px-2 py-1  text-[#FFFFFF] zain text-sm'>Best Seller</h1>
       <img 
        className='h-64 w-52 pt-1  pl-11'
          src='https://m.media-amazon.com/images/I/71KPzvNL7gL._AC_UL320_.jpg'
          alt='' />
           </div>
          <h1 className='text-lg  sm:text-[17px] hover:text-red-900'>Destinations of a Lifetime:
           225<br/> of the World's Most Amazing <br/>Places</h1>
         
      
       <p className='text-black hover:text-red-900'>by <span className='text-[#007185]'>National Geographic</span></p>
        </div>
       
       <div className='flex '>
        <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <AiFillStar className='h-5 w-5 text-yellow-500'/>
  <MdKeyboardArrowDown className='text-[#007185]  h-5 w-5'/>
  <span className='text-[#007185]'>3,848</span>
        </div>
        <div className='space-y-1'>
          <h1 className='text-md font-bold text-[#007185]'>Hardcover</h1>
          <p className='text-md'><span className='text-sm '>$</span>29<span className='text-sm'>oo
          </span><span className='text-[#E67A00]'> $40.00</span></p>
          <p className='text-[12px] font-semibold text-gray-600'>Ships to Pakistan</p>
          <p>More Buying Choices</p>
          <p className='text-gray-600'>Or $2.99 to buy</p>
        <p>$14.88<span className='text-[#007185]'>(74 used & new offers)</span></p>
        </div>
       
    </div>
 
 
      




    <div>
        <div className=''>
       <div className='bg-gray-100 pt-11  w-64'>
       <img 
        className='h-60 w-64' 
         src='https://m.media-amazon.com/images/I/91AD4tdP4QL._AC_UL320_.jpg'
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
       <div className='bg-gray-100 pl-9 pt-8  w-[280px] sm:w-60'>
       <img 
        className='h-64 w-40 '  
        src='https://m.media-amazon.com/images/I/91S4cMIUMsL._AC_UL320_.jpg'
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

export default Section