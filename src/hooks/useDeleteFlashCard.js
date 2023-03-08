export function useDeleteFlashCards() {

    const deleteFlashCard = (id) => {
        if (id) {
            // console.log(data),
            fetch(`https://flashcard-backend-production.up.railway.app/api/card${id}`, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
        }
    }



    return { deleteFlashCard }
}