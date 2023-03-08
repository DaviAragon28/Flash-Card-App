import { RiCloseLine } from 'react-icons/ri'
import { useDeleteFlashCards } from '../hooks/useDeleteFlashCard'

export function Flashcard ({ category, word, translate, id }) {
    const { deleteFlashCard } = useDeleteFlashCards()

    const onHandleButton = (id) => {
        deleteFlashCard(id)
    }

    return (
        <article className="h-80 w-72 group  flex flex-col relative justify-between shadow-lg bg-gray-400/10 rounded-md dark:bg-gray-700/50 backdrop-blur-sm px-4 py-2">
            <button onClick={() => onHandleButton(id)} className="absolute opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center w-7 h-7 bg-red-500 rounded-full -right-2 -top-2">
                <RiCloseLine size={20} />
            </button>
            <p className="font-bold text-xs">Category: <span className="font-normal">{category}</span></p>
            <h2 className="text-4xl text-center font-serif">{word}</h2>
            <p className="font-bold text-sm text-center pb-10">Translation: <span className="font-normal">{translate}</span></p>
        </article>
    )
}