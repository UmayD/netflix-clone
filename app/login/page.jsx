import React from 'react'

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/1756a9bc-0731-4094-a4a0-fca5d0934d47/TR-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto  bg-black/70 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-semibold">Sign In</h1>

              <form className="flex flex-col py-5 w-full">
                <input className="p-4 my-2 rounded bg-inputbg" type="email" placeholder="Email" />
                <input className="p-4 my-2 rounded bg-inputbg" type="password" placeholder="Password"/>

                <button className="bg-red-600 py-3 mt-6 rounded">Sign In</button>
                
                <div className="flex justify-between mt-3 items-center text-sm text-gray-600">
                  <p><input className="mr-2 items-center" type="checkbox" />Remember me</p>
                  <p>Need help?</p>
                </div>
              </form>

              <div className="w-full">
                <p className="pt-6"><span className="text-gray-600">New to Netflix?</span></p>
                <p className='pt-2'><span className='text-gray-600 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login