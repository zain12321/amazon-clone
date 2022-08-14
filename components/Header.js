import React from 'react'
import { 
  HiOutlineLocationMarker } from 'react-icons/hi'
  import { IoMdArrowDropdown } from 'react-icons/io'
  import {BsSearch } from 'react-icons/bs'
  import {MdOutlineAddShoppingCart } from 'react-icons/md'
  import {
    CgMenu} from 'react-icons/cg'
    import  { MdKeyboardArrowDown
    } from 'react-icons/md'
function Header() {
  return (
    <>
    <div className='flex flex-col fixed z-20'> 
    <header className='bg-[#131A22] flex w-[1561px] items-center sm:w-[1349px] space-x-6
     sm:flex sm:items-center sm:space-x-1 p-1 '> 
         <div className='px-4 pt-3'>
      <img className='h-10 w-28 sm:h-9 sm:w-[100px]'
   src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_okCuIQWmhTzJbN9BSSedDvKkSnpwjgLSQlj34z6I1MLn1vr&s'
       alt='' />
         </div>
         <div className='flex items-center justify-center  '>
            <div >
              <HiOutlineLocationMarker className='text-white h-5 mt-3 w-5 mr-1'/>
            </div>
            <div className=''>
                <p className='text-[12px] text-[#CCCCCC]'>Delivery to</p>
                <h1 className='text-sm font-semibold text-[#FFFFFF]'>Pakistan</h1>
            </div> 
         </div>


        <div className=''>
        <div className='flex mx-2 items-center rounded-md  bg-white text-black w-[730px] h-[40px] ' >
              <div className=' flex items-center justify-center p-2 border-r bg-gray-100 rounded-md'>
                <h1 className='text-[13px] text-gray-500 '>All</h1>
                <IoMdArrowDropdown className='px-1 h-6 w-6 text-gray-600'/>
              </div>
            <div>
            <input name="search" id="search" 
 placeholder='home page'
 required className='p-2 placeholder:text-black outline-none' />
              </div>    

              <div className=''>
                <BsSearch className=' ml-[470px] border-l p-3 bg-[#ecb56c]
                 rounded-tr-md rounded-br-md  h-[40px] w-12'/>
                </div>  
                 </div>
        </div>

                 <div className='flex pt-2 pl-9'>
                  
                  <img
                   className='h-5 w-7 '
             src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                   alt="" />
                  
                  
                  <IoMdArrowDropdown className='text-white pt-2 h-6  w-6'/>
                  
                 </div>

      <div className='flex space-x-10 sm:space-x-3 text-white'>
        <div className='flex items-center justify-center'>
        <div>
        <h2 className='text-[11px]'>Hello, Sign in</h2>
        <h1 className='text-[13px] font-bold'>Account & Lists</h1>
       
        </div>  
        <div className='pt-5'>
        <IoMdArrowDropdown/>
        </div>
        </div>
        <div className=''>
          <p className='text-[11px]'>Returns</p>
          <h1 className='text-[14px] font-bold'> & Orders</h1>
        </div>
        <div className='flex '>
          <MdOutlineAddShoppingCart className='h-9 w-9'/>
          <p className='pt-3 font-bold'>Cart</p>
        </div>

      </div>
    </header>

                  {/* NavBar */}
 
     <navbar className="flex w-[1561px] bg-[#232F3e] space-x-6 pl-14 md:w-[1349px] sm:space-x-1 sm:p-2 sm:pl-6 
      items-center h-9  sm:h-9 sm:w-[1366px] text-white">
                   <div className='flex items-center space-x-2'>
            <p> <CgMenu className='h-6 w-6'/></p>
             <h1>All</h1>
                   </div>
                   <div className='flex pl-6'>
                     <ul className='flex space-x-4'>
                       <li>Today's Deals</li>
                       <li>Customer Service</li>
                       <li>Register</li>
                       <li>Gift Cards</li>
                       <li>Sell</li>
                     </ul>
                   </div>
    </navbar>
    </div>
    



    <div className='flex items-center justify-between w-[1500px] sm:w-[1349px] px-3 border-b border-gray-300 shadow-sm 
     py-1'>
      <div>
      <h1 className='text-[20px] sm:text-[15px] '>1-48 of over 100,000 results for
       <span className='text-[#C45500]'>"home page"</span></h1>
     </div>
     <div className='flex text-sm shadow-md my-1 text-gray-600 items-center 
      space-x-3  sm:space-x-1 border-2 px-4  sm:px-2  rounded-lg bg-gray-100'>
     <p className='text-[13px]'> Sort by:  Featured</p>
     <MdKeyboardArrowDown
     className='h-6 w-6'
/>
     </div>
    </div>
    </>
  )
}

export default Header