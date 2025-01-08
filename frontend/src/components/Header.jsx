import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Header = () => {

    const groupNameRef = useRef(null);

    useGSAP(() => {

        gsap.fromTo(groupNameRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
        })

        gsap.fromTo(groupNameRef.current, {
            scale: 2,
        }, {
            scale: 1,
            duration: 1,
            ease: 'power3',
        })

        gsap.fromTo(groupNameRef.current, {
            x: '-700px',
            y: '300px',
        }, {
            x: '0px',
            y: '0px',
            duration: 1.4,
            delay: 1,
            ease: "power1.out",
        })



    }, []);


  return (
    <div className='h-[8vh] w-full flex justify-end items-center px-6 font-playwrite'>
        <h1 ref={groupNameRef} className='text-3xl'>Illuminate</h1>
    </div>
  )
}

export default Header
