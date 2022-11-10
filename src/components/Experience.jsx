export function Experience(){
    return(
        <div className="w-[22rem] h-[348px] card drop-shadow-xl rounded-3xl m-10">
            <div className="ml-5 pt-4">
                <h2 className="text-xl font-bold">Experiências</h2>
            </div>

            <div className="">
                <ul className="mx-14 mt-5 ">
                    <li className="list-disc font-bold text-sm ">
                        Academia da Luz Ltda.
                    </li>
                    <p className="font-light leading-3 text-xs">2011 - 2012</p>
                    <p className="font-light leading-3 text-xs"> Promotor de vendas</p>

                    <li className="list-disc font-bold text-sm mt-5">
                        NET Rio (Claro SA)
                    </li>
                    <p className="font-light leading-3 text-xs">2013 - 2016</p>
                    <p className="font-light leading-3 text-xs"> Consultor de vendas</p>

                    <li className="list-disc font-bold text-sm mt-5">
                        Uber
                    </li>
                    <p className="font-light leading-3 text-xs">2017 - 2020</p>
                    <p className="font-light leading-3 text-xs"> Motorista</p>

                    <li className="list-disc font-bold text-sm mt-5" translate="no">
                        Mk details estética automotiva
                    </li>
                    <p className="font-light leading-3 text-xs">2020 - atualmente</p>
                    <p className="font-light leading-3 text-xs">Microempreendedor</p>
                </ul>
                
            </div>
        </div>
    )
}