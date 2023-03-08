import { Link } from "react-router-dom";
import Switcher from "./Switcher";

export function Menu({ menuState }) {
    return (
        <nav className={` flex flex-col h-96 w-64 px-4 py-5 fixed backdrop-blur z-40 bg-gray-400/10 dark:bg-gray-700/50 top-[54px]  ${menuState ? 'right-0 ' : '-right-64 '} transition-all rounded-b-lg`}>
            <ul className="flex  flex-col gap-5 font-semibold dark:text-slate-200 text-lg ">
                <li>
                    <Switcher />
                </li>
                <Link to='/create'>Create Flashcard</Link>
                <Link to='/all'>See all Flashcards</Link>
                <Link to='/practice'>Practice</Link>
            </ul>
        </nav>
    )
}