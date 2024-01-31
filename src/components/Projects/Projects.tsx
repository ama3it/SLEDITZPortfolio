import { useState } from "react";
import "./Project.css";
import Thumbnail from "./Thumbnail";
import Videos from "./Videos";

enum projectcat{
 Videoediting,
 photoediting,
 thumbnail
}

const Projects = () => {

  const [userClick,setUserClick]=useState<projectcat>(projectcat.Videoediting)
  
  const renderProject=(userclickdata:projectcat)=>{
     setUserClick(userclickdata)
  }


  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-6 md:text-2xl text-xl font-medium">My Works</h3>

        <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          illo distinctio beatae perspiciatis et! Rem, enim?
        </p>
      </div>

      <div className="grid grid-cols-1 items-center mt-6 gap-6">
        <div className="filters-group-wrap text-center">
          <div className="filters-group">
            <ul className="mb-0 list-none container-filter space-x-3">

              <li className={`inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500 ${userClick===projectcat.Videoediting?'active':""}`} onClick={()=>renderProject(projectcat.Videoediting)}>
                Video Editing
              </li>
              <li className={`inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500 ${userClick===projectcat.thumbnail?'active':""}`} onClick={()=>renderProject(projectcat.thumbnail)}>
                Thumbnail
              </li>
              
              <li className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500">
                Photography
              </li>

            </ul>
          </div>
        </div>
      </div>
{

(()=>{
  if(userClick===projectcat.Videoediting){
    return <Videos/>
  }
  if(userClick===projectcat.thumbnail){
    return <Thumbnail/>
  }

})()
}
      

  

    </div>
  );
};

export default Projects;
