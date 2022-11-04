import perfil from '../assets/perfil.png'

export function Profile(){
    return(
        <div className="w-[22rem] h-[19rem] card rounded-3xl m-10 flex flex-col items-center justify-center gap-2 drop-shadow-xl shadow-black">
            <div className='rounded-full border-2 overflow-hidden w-32 h-32 border-[#00FF00]'>
                <img className='w-screen
            ' src={perfil} alt=""/>
            </div>
            
            <div className='mt-3 text-center'>
                <h1 className='font-bold antialiased text-2xl'>Maicon da Silva Nunes</h1>
                <span className='text-xs font-normal antialiased'>Full Stack Developer</span>
            </div>
            
        </div>
    )
}