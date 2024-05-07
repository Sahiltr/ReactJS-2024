// eslint-disable-next-line no-unused-vars
import React from 'react'

function Card() {
  return (
    <div>
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, laudantium sint expedita corrupti quos 
       reprehenderit delectus nesciunt aperiam explicabo modi ratione at fugiat temporibus. Minus ipsum 
       consequuntur perspiciatis? Explicabo, est.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
    
  )
}

export default Card