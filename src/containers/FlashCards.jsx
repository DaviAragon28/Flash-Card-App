import { Flashcard } from "../components/FlashCard"
import { useGetFlashCards } from "../hooks/useGetFlashCards"

export function FlashCards() {
    const { cards } = useGetFlashCards()
    // console.log(cards);
    return (
        <>
            {
                cards.map(card => (
                    <Flashcard
                        key={card?.id}
                        word={card?.word}
                        translate={card?.translation}
                        category={card?.category}
                        id={card?.id}
                    />
                ))
            }
        </>
    )
}