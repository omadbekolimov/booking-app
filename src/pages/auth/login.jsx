import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen bg-[#F1E8D7] flex justify-center items-center flex-col'>
      <p>Sign in</p>
      <p>Sign into your account to be able to make operations on the system</p>
      <div className=' w-[20%]'>
        <label  class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-3 pl-5 outline-none focus:border-spacing-1 focus:border-[#F1E8D7]   " placeholder="Doe" required />
      </div>

    </div>
  )
}

export default Login
