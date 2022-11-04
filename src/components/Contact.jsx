import { MapPinLine, GithubLogo, LinkedinLogo,
    InstagramLogo,Envelope} from 'phosphor-react'


export function Contact(){
    return(
        <div className="w-[22rem] h-auto gap-5 card rounded-3xl m-10 flex flex-col p-2 drop-shadow-xl shadow-black">
            <div className='flex ml-5 items-center gap-4 mt-5'>
                <MapPinLine size={24}/>
                <p className='text-sm antialiased'>Brasil</p>
            </div>
            <div className='flex ml-5 items-center gap-4 '>
                <GithubLogo size={24}/>
                <a className='text-sm antialiased' href='https://github.com/MaiconNunes315'>MaiconNunes315</a>
            </div>
            <div className='flex ml-5 items-center gap-4 '>
                <LinkedinLogo size={24}/>
                <a className='text-sm antialiased' href='https://www.linkedin.com/in/maicon-nunes/'>MaiconNunes</a>
            </div>
            <div className='flex ml-5 items-center gap-4'>
                <InstagramLogo size={24}/>
                <a className='text-sm antialiased' href='https://www.instagram.com/maiconnunesmtb/'>maiconnunesmtb</a>
            </div>
            <div className='flex ml-5 items-center gap-4 mb-5'>
                <Envelope size={24}/>
                <p className='text-sm antialiased'>mnunes315@hotmail.com</p>
            </div>
            
            
        </div>
    )
}