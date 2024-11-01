
import php from '../assets/projects/kisspng-logo-image-computer-icons-php-portable-network-gra-william-davies-meng-mongodb-1713944344684.webp'
export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24 mt-4">
      <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
           text-center  text-4xl tracking-tight text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500  ">
              My Skills
     </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 ms-5">

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
          </div>

         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white" alt="React" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
         </div>
          
          
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
         </div>

         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
         </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img src={php} alt="GitHub" className='w-20 h-8 rounded' />
         </div>
         
        
    
      </div>

    </div>
  )
}
