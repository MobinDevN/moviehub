import React from 'react'

function Footer() {
  return (
    <>

        {/* Mobile Footer */}
        <div className='grid grid-cols-4 fixed bottom-0 inset-x-4 bg-[#151925] p-2 rounded-t-xl md:hidden'>
            <div className='flex flex-col justify-center items-center text-sm text-[#F8FAFC]'>
                <i className="fa-regular fa-house text-xl"></i>
                Home
            </div>

            <div className='flex flex-col justify-center items-center text-sm text-[#F8FAFC]'>
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
                Search
            </div>

            <div className='flex flex-col justify-center items-center text-sm text-[#F8FAFC]'>
                <i className="fa-regular fa-heart text-xl"></i>
                Favorites
            </div>

            <div className='flex flex-col justify-center items-center text-sm text-[#F8FAFC]'>
                <i className="fa-regular fa-user text-xl"></i>
                Account
            </div>
        </div>
    </>
  )
}

export default Footer