import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useBackgroundHeader } from '../hooks/useBackgroundHeader'

export function Header({ setMenu, menuState }) {
    const { chageBackground } = useBackgroundHeader()



    return (
        <header className={` fixed py-3 px-5  backdrop-blur  z-30  ${chageBackground ? 'dark:bg-gray-700/40 shadow-md bg-gray-400/10' : 'dark:bg-gray-900'} transition-colors left-0 right-0`}>
            <ul className='dark:text-slate-200 flex justify-between '>
                <Link to='/'>
                    <li className='text-xl'>{'<'}Hi, <span className='font-bold'>User</span>{'/>'}</li>
                </Link>
                <li onClick={setMenu} className='cursor-pointer'>
                    {
                        menuState
                            ? <RiCloseLine size={30} className='dark:text-slate-200' />
                            : <RiMenu4Fill size={30} className='dark:text-slate-200' />

                    }
                </li>
            </ul>
        </header>
    )
}