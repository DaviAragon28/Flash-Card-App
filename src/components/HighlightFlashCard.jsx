import { Flashcard } from "./FlashCard";

export function HighlightFlashCard({ card }) {
    return (
        <div className="pt-10 flex flex-col gap-4 items-center border-t">
            <h3 className="text-center text-3xl font-bold px-4 mb-10">Below is the last card you created.</h3>
            <Flashcard
                key={card?.id}
                word={card?.word}
                translate={card?.translation}
                category={card?.category}
                id={card?.id}
            />
        </div>
    )
}