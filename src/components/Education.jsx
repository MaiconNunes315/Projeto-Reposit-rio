export function Education(){
    return(
        <div className="w-[22rem] h-[280px] card drop-shadow-xl rounded-3xl m-10">
            <div className="ml-5 pt-4">
                <h2 className="text-xl font-bold">Educação</h2>
            </div>

            <div className="">
                <ul className="mx-14 mt-5 ">
                    <li className="list-disc font-bold text-sm ">
                    Petroinfo
                    </li>
                    <p className="font-light leading-3 text-xs">2010 - 2011</p>
                    <p className="font-light leading-3 text-xs">Hardware</p>

                    <li className="list-disc font-bold text-sm mt-5">
                        CAFEUDUC
                    </li>
                    <p className="font-light leading-3 text-xs">2007 - 2009</p>
                    <p className="font-light leading-3 text-xs"> Software</p>

                    <li className="list-disc font-bold text-sm mt-5">
                        Programador Br
                    </li>
                    <p className="font-light leading-3 text-xs">2021 - 2022</p>
                    <p className="font-light leading-3 text-xs"> Desenvolvimento web full stack</p>

                </ul>
                
            </div>
        </div>
    )
}