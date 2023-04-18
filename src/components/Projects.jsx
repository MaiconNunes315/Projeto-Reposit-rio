import {ArrowDown, CaretDown, Folder, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";



export function Projects(){

    const [repositories, setRepositories] = useState([])
    const [display, setDisplay] = useState("block")
    const [repositoriesLenght, setRepositoreisLenght] = useState(10)
    const [disable, setdisable] = useState(false)
    
    let instance = axios.create({
        baseURL: "https://api.github.com"
    })
    
    useEffect(()=>{
      
        (async()=>{

            const urlRepo = instance.get(`users/maiconnunes315/repos?per_page=${repositoriesLenght}&page=${1}`, {
               
        })
            
        const res = await urlRepo
        const data = res.data
        setRepositories(data)        
       })()
        
    }, [])
    
    
    
    
    function handleDisable() {
        setRepositoreisLenght(repositoriesLenght + 10)

    if (repositoriesLenght >= repositories.length) {
        setdisable(true) 
}
    }
    
    return (
        <div className="text-center">
        <div className="sm:w-[90%] w-[22rem] drop-shadow-xl  m-10 flex flex-wrap gap-2 justify-center ">

        <div className="h-20 card rounded-3xl w-full">
            <div className="mx-5 pt-[25px] flex justify-between">
                <h2 className="font-bold text-xl">Meus projetos</h2>
                <CaretDown onClick={()=>{
                    if(display === "block"){
                        setDisplay("hidden")
                       }else{
                        setDisplay("block")
                    }
                    
                }} className="cursor-pointer" size={32} />
            </div>
        </div>

        {repositories.map(repo=>(

        <div key={repo.id} className={`w-[22rem] ${display} lg:w-[49%] sm:w-full card mt-10 h-[186px] drop-shadow-xl 
        rounded-3xl flex flex-col lg:gap-10 sm:gap-5 gap-10 overflow-hidden`}>

    <div className="flex ml-5 mt-5 gap-2 items-center   ">
        <Folder className="w-[20px] h-[20px] " />
        <a href={repo.clone_url} target="_blanck" >
            <h2 className="font-bold text-base" translate="no">{repo.name}</h2>
        </a>
        </div>

    <p className="text-sm max-w-[421px] mx-5 h-[50vw]">{repo.description}</p>

    <div className="flex justify-between">
        <div className="flex gap-1 ml-5 items-center">
            <Star className="w-5" />
            <span>{repo.watchers}</span>
        </div>
         
        <div className="flex gap-2 mr-5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e7de79" viewBox="0 0 256 256"><rect width="20" height="20" fill="none"></rect><circle cx="128" cy="128" r="96" opacity="0.9"></circle><circle cx="128" cy="128" r="96" fill="none" stroke="#837E9F"></circle></svg>
                
                        <span>{repo.language}</span>
        </div>
    </div>
</div>


        ))}
           
       
            </div>
            <button disabled={disable} className="mb-5 hover:border-2 rounded-full border-red-600 disabled:opacity-30 " onClick={handleDisable}>
<ArrowDown size={16} color="red" weight="duotone" />
</button>
            </div>
   )
}