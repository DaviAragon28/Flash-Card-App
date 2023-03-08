import { useEffect, useState } from "react";

export function useGetFlashCards() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://flashcard-backend-production.up.railway.app/api/card')
            .then(resp => resp.json())
            .then(data => {
                setCards(data.response);
            })
    }, [])

    return { cards }
}