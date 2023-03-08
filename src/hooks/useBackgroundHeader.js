import React, { useEffect, useState } from "react";

export function useBackgroundHeader() {
    const [chageBackground, setChageBackground] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newChageBackground = window.scrollY > 10;
            chageBackground !== newChageBackground && setChageBackground(newChageBackground)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [chageBackground])

    return { chageBackground }

}