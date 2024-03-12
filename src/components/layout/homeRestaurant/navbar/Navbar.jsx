import React from 'react'
import { styles } from '../../../../util/style'

const Navbar = () => {
  return (
    <>
      <section className='w-full bg-black'>
        <header className={`${styles.container} py-8 flex justify-around`}>
          <h1 className='text-white text-3xl'>HFfinder</h1>
          <nav className='w-full'>
            <ul className='flex '>
              <li></li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  )
}

export default Navbar