import { ContainerPages } from "../containers/ContainerPages";
import { ContainerWithBalls } from "../containers/ContainerWithBalls";
import { FlashCards } from "../containers/FlashCards";
import { useGetFlashCards } from "../hooks/useGetFlashCards";
import { Flashcard } from "./FlashCard";
import { HighlightFlashCard } from "./HighlightFlashCard";

export function Main() {
    const { cards } = useGetFlashCards()
    const lastCard = cards[cards?.length - 1]

    return (
        <ContainerPages>
            <h1 className=" font-bold text-center text-3xl mb-10"> User, Welcome to your Favorite Flashcards Page. </h1>
            <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, aliquam hic amet veritatis sint porro molestiae sed optio. Adipisci rem voluptates velit laborum nobis est maiores, sequi fugiat unde laboriosam.</p>
            <p className="text-left pb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, aliquam hic amet veritatis sint porro molestiae sed optio. Adipisci rem voluptates velit laborum nobis est maiores, sequi fugiat unde laboriosam.</p>
            <HighlightFlashCard card={lastCard} />
        </ContainerPages>

    )
}