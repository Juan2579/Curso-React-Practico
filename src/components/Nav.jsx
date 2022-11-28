import React, { useRef, useState, useEffect, createRef, useContext } from 'react'
import logo from "@images/logo.svg"
import { ProfileDropdown } from './ProfileDropdown'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export const Nav = () => {
  // const containerRef = useRef(null)
  // const [dropdownProfile, setDropdownProfile] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [entry] = entries
  //   if(!entry.isIntersecting){
  //     setDropdownProfile(false)
  //   }
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.1
  // }
  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options)

  //   if(containerRef.current) observer.observe(containerRef.current)

  //   return () => {
  //     if(containerRef.current) observer.unobserve(containerRef.current)
  //   }
  // }, [containerRef, options])
  // const toggleProfile = () => {
  //   setDropdownProfile((prevState) => !prevState)
  // }
  const history = useHistory()

  const goToProfile =  () => {
    history.push("/profile")
  }

  const goToCart = () => {
    history.push("/cart")
  }

  const { state } = useContext(AppContext)
  return (
    <nav className="flex justify-between items-center list-none px-4 py-4">
      <ul className="flex justify-center items-center gap-3 pt-2">
        <li>
          <button>
            <svg className="w-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M4,17 L20,17 C20.5522847,17 21,17.4477153 21,18 C21,18.5522847 20.5522847,19 20,19 L4,19 C3.44771525,19 3,18.5522847 3,18 C3,17.4477153 3.44771525,17 4,17 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5522847 20.5522847,13 20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4477153 3.44771525,11 4,11 Z"/>
            </svg>
          </button>
        </li>
        <li>
          <img className="w-32 pb-2" src={logo} alt="" />
        </li>
      </ul>

      <ul className="flex justify-center items-center gap-5 pt-1.5">
        <li>
          <button onClick={goToCart} className='relative'>
            <svg className="w-7" viewBox="0 0 299.915 299.915" >
              <g>
                <path d="M293.494,53.616H55.701c-0.463,0-0.88,0.174-1.318,0.27l-9.672-32.115c-0.109-0.347-0.341-0.604-0.495-0.925
                  c-0.264-3.303-2.956-5.919-6.324-5.919c-0.006,0-0.019,0-0.026,0L6.401,15.061C2.847,15.081-0.013,17.973,0,21.52
                  c0.013,3.541,2.886,6.401,6.427,6.401c0.006,0,0.019,0,0.026,0l26.652-0.116l61.524,204.187
                  c-6.112,5.585-10.013,13.541-10.013,22.468c0,16.858,13.663,30.527,30.527,30.527c16.858,0,30.527-13.67,30.527-30.527
                  c0-4.396-0.964-8.548-2.635-12.32h88.819c-1.671,3.773-2.635,7.924-2.635,12.32c0,16.858,13.663,30.527,30.527,30.527
                  c16.858,0,30.527-13.67,30.527-30.527s-13.67-30.527-30.527-30.527c-6.401,0-12.333,1.986-17.243,5.354H132.38
                  c-4.91-3.368-10.836-5.354-17.237-5.354c-3.181,0-6.189,0.623-9.075,1.523l-9.178-30.45l161.918-0.129
                  c2.834,0,5.167-1.87,6.016-4.422c0.219-0.405,0.456-0.797,0.585-1.26l34.274-126.39c0.219-0.803,0.244-1.607,0.154-2.384
                  c0.006-0.135,0.077-0.244,0.077-0.373C299.921,56.495,297.042,53.616,293.494,53.616z M259.753,236.781
                  c9.749,0,17.674,7.924,17.674,17.674c0,9.749-7.924,17.674-17.674,17.674c-9.75,0-17.674-7.924-17.674-17.674
                  C242.08,244.705,250.004,236.781,259.753,236.781z M115.15,236.781c9.75,0,17.674,7.924,17.674,17.674
                  c0,9.749-7.924,17.674-17.674,17.674s-17.674-7.924-17.674-17.674C97.476,244.705,105.4,236.781,115.15,236.781z M254.04,182.03
                  l-161.011,0.129L58.176,66.476h227.201L254.04,182.03z"/>
              </g>
            </svg>
            {(state.cart.length > 0) && 
              <span className="min-w-[19px] max-w-[20px] h-5 absolute top-[-15px] right-[-10px] flex justify-center items-center bg-mainOrange text-white rounded-full text-xs font-bold"
              >
                {state.cart.length > 9 ? "9+" : state.cart.length}
              </span>
            }
          </button>
        </li>
        <li>
          <button onClick={goToProfile}>
            <svg className="w-7" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Z"/>
              <path d="M25,25.41a13,13,0,0,0-13,13,1,1,0,0,0,2,0,11,11,0,1,1,22,0,1,1,0,0,0,2,0A13,13,0,0,0,25,25.41Z"/>
              <path d="M25,23.71a7,7,0,0,0,6.81-7.2A7,7,0,0,0,25,9.3a7,7,0,0,0-6.81,7.21A7,7,0,0,0,25,23.71ZM25,11.3a5,5,0,0,1,4.81,5.21A5,5,0,0,1,25,21.71a5,5,0,0,1-4.81-5.2A5,5,0,0,1,25,11.3Z"/>
            </svg>  
          </button>
          {/* {dropdownProfile && 
            <ProfileDropdown reference={containerRef} />
          } */}
        </li>
      </ul>
    </nav>
  )
}
