import React from 'react'
import { Flashcard } from "../components/FlashCard";
import { ContainerPages } from '../containers/ContainerPages'
import { ContainerWithBalls } from '../containers/ContainerWithBalls';
import { FlashCards } from '../containers/FlashCards';

export const All = () => {
  return (
    <ContainerPages>
      <h2 className=" font-bold text-center text-3xl mb-10">Here, you will find all of your flashcards.</h2>
      <ContainerWithBalls>
        <FlashCards />
      </ContainerWithBalls>
    </ContainerPages>
  )
}
