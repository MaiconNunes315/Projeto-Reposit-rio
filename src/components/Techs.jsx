export function Techs(){
    const techs = [
        "HTML","CSS","JAVASCRIPT","REACTJS","NODEJS","GIT","GITHUB",
        "TAILWINDCSS","NEXTJS","TYPESCRIPT","EXPRESS"
    ];

    return(
        <div className="w-[22rem] space-x-5 space-y-3 h-52 card m-10 drop-shadow-xl rounded-3xl ">
            <div className="ml-5 pt-4">
                <h2 className="text-xl font-bold">Tecnologias</h2>
            </div>
            {techs.map((techs,index)=>(

                
                <div key={index} className="justify-center content-center inline-flex w-[90px] techs rounded-lg ">
                    <span className="text-black font-bold text-xs m-1" translate="no">
                        {techs}
                    </span>
                </div>
                
            ))}
            
        </div>
    )

}