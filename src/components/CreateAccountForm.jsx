import React from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'

export const CreateAccountForm = () => {
  const history = useHistory()

  const backToLogin = () => {
    history.push("/profile")
  }

  return (
    <form className="w-[90%] h-4/5 z-10 mx-auto flex flex-col justify-center items-center text-left gap-2">
      <button type='button' onClick={backToLogin} className="absolute top-8 left-5">
        <svg className="w-12 fill-current text-white" viewBox="0 0 612 612">
          <g>
            <g id="Left">
              <g>
                <path d="M353.812,172.125c-7.478,0-14.21,2.926-19.335,7.612l-0.058-0.077L219.67,284.848c-5.91,5.451-9.295,13.101-9.295,21.152
                s3.385,15.701,9.295,21.152L334.42,432.34l0.058-0.076c5.125,4.686,11.857,7.611,19.335,7.611
                c15.836,0,28.688-12.852,28.688-28.688c0-8.357-3.634-15.836-9.353-21.076l0.058-0.076L281.52,306l91.685-84.054l-0.058-0.077
                c5.719-5.221,9.353-12.68,9.353-21.057C382.5,184.977,369.648,172.125,353.812,172.125z M306,0C137.012,0,0,137.012,0,306
                s137.012,306,306,306s306-137.012,306-306S474.988,0,306,0z M306,554.625C168.912,554.625,57.375,443.088,57.375,306
                S168.912,57.375,306,57.375S554.625,168.912,554.625,306S443.088,554.625,306,554.625z"/>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <h1 className="w-full font-bold text-4xl">Create Account</h1>
      <div className="w-full flex flex-col gap-5 pt-3 py-2">

        <label htmlFor='name' className="w-full h-14 flex justify-center items-center gap-3 px-5 shadow-2xl bg-gray-50">
          <svg className="w-5" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Z"/>
            <path d="M25,25.41a13,13,0,0,0-13,13,1,1,0,0,0,2,0,11,11,0,1,1,22,0,1,1,0,0,0,2,0A13,13,0,0,0,25,25.41Z"/>
            <path d="M25,23.71a7,7,0,0,0,6.81-7.2A7,7,0,0,0,25,9.3a7,7,0,0,0-6.81,7.21A7,7,0,0,0,25,23.71ZM25,11.3a5,5,0,0,1,4.81,5.21A5,5,0,0,1,25,21.71a5,5,0,0,1-4.81-5.2A5,5,0,0,1,25,11.3Z"/>
          </svg>  
          <input id='name' className="w-full outline-none bg-gray-50 text-sm" placeholder='FULL NAME' type="text" required/>
        </label>

        <label htmlFor='email' className="w-full h-14 flex justify-center items-center gap-3 px-5 shadow-2xl bg-gray-50">
          <svg className="w-5"  viewBox="0 0 512 512" >
            <g>
              <path d="M448,64H64C28.656,64,0,92.656,0,128v256c0,35.344,28.656,64,64,64h384c35.344,0,64-28.656,64-64V128
              C512,92.656,483.344,64,448,64z M342.656,234.781l135.469-116.094c0.938,3,1.875,6,1.875,9.313v256
              c0,2.219-0.844,4.188-1.281,6.281L342.656,234.781z M448,96c2.125,0,4,0.813,6,1.219L256,266.938L58,97.219
              C60,96.813,61.875,96,64,96H448z M33.266,390.25C32.828,388.156,32,386.219,32,384V128c0-3.313,0.953-6.313,1.891-9.313
              L169.313,234.75L33.266,390.25z M64,416c-3.234,0-6.172-0.938-9.125-1.844l138.75-158.563l51.969,44.531
              C248.578,302.719,252.297,304,256,304s7.422-1.281,10.406-3.875l51.969-44.531l138.75,158.563C454.188,415.062,451.25,416,448,416
              H64z"/>
            </g>
          </svg>
          <input id='email' className="w-full outline-none bg-gray-50 text-sm" placeholder='EMAIL' type="email" required/>
        </label>

        <label htmlFor='password' className="w-full h-14 flex justify-center items-center gap-3 px-5 shadow-2xl bg-gray-50">
          <svg className="w-5" viewBox="0 0 766.615 766.615">
            <g>
              <g>
                <path d="M545.308,766.615h-324c-79.406,0-144-64.595-144-144V418.67c0-46.203,22.752-89.527,60.233-116.434
                c-3.62-17.116-5.431-34.19-5.431-50.976C132.11,112.731,244.8,0,383.328,0c138.528,0,251.26,112.731,251.26,251.26
                c0,16.745-1.811,33.819-5.431,50.935c37.439,26.908,60.15,70.272,60.15,116.435v203.945
                C689.308,701.979,624.713,766.615,545.308,766.615z M383.328,41.143c-115.858,0-210.075,94.258-210.075,210.117
                c0,17.979,2.551,36.453,7.57,54.967c2.468,9.093-1.522,18.679-9.71,23.287c-32.503,18.35-52.663,52.499-52.663,89.157v203.945
                c0,56.735,46.121,102.857,102.857,102.857h324c56.736,0,102.857-46.122,102.857-102.857V418.67
                c0-36.617-20.119-70.766-52.54-89.157c-8.188-4.608-12.178-14.194-9.709-23.246c5.019-18.514,7.57-36.987,7.57-54.967
                C593.444,135.401,499.187,41.143,383.328,41.143z M544.032,315.813H221.308c-9.175,0-18.432-6.007-20.983-14.812
                c-5.554-19.337-8.105-35.959-8.105-52.334c0-104.667,85.125-189.792,189.792-189.792c104.708,0,189.874,85.125,189.874,189.792
                c0,16.251-2.551,32.874-8.105,52.251C561.312,309.683,553.207,315.813,544.032,315.813z M382.012,99.978
                c-81.957,0-148.649,66.692-148.649,148.649c0,8.27,0.905,16.787,2.798,26.126l291.744-0.083c1.934-9.38,2.839-17.856,2.839-26.043
                C530.743,166.67,464.01,99.978,382.012,99.978z"/>
                <path d="M455.328,656.105h-144c-6.624,0-12.836-3.168-16.704-8.599c-3.867-5.39-4.896-12.302-2.756-18.556l29.252-86.523
                c-16.004-16.005-25.179-37.77-25.179-60.81c0-47.479,38.633-86.152,86.153-86.152c47.521,0,86.071,38.715,86.071,86.193
                c0,22.094-8.353,42.789-23.328,58.67l29.993,88.622c2.14,6.254,1.069,13.166-2.757,18.556
                C468.165,652.938,461.952,656.105,455.328,656.105z M340.005,614.963h86.605l-25.097-74.346
                c-2.839-8.435,0.041-17.773,7.199-23.122c11.644-8.64,18.309-21.724,18.309-35.877c0-24.85-20.159-45.01-45.01-45.01
                s-45.01,20.16-45.01,45.01c0,14.812,7.364,28.677,19.666,37.07c7.611,5.225,10.862,14.853,7.858,23.574L340.005,614.963z"/>
              </g>
            </g>
          </svg>
          <input id='password' className="w-full outline-none bg-gray-50 text-2xl font-[small-caption] placeholder:text-sm placeholder:font-KumbhSans" placeholder='PASSWORD' type="password" required />
        </label>

      </div>
      <div className='w-full flex justify-end pb-1'>
        <button type='submit' className="w-32 h-10 rounded-3xl flex justify-center items-center gap-3 bg-mainOrange shadow-xl">
          <span className='text-white text-base font-bold'>SIGN UP</span>
          <svg className='w-5 fill-current text-white pt-[2px]' viewBox="0 0 15.698 8.706" >
            <polygon points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/>
          </svg>
        </button>
      </div>
      
      <Link to={`/profile`} className='flex items-center justify-center gap-2 h-10 px-4 bg-gray-50 shadow-lg  text-gray-600 text-base absolute bottom-10 rounded-full'>Already have an account?<span className='text-mainOrange font-bold'>Sign in</span></Link>
    </form>
  )
}
