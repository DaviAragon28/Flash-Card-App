export function usePostFlashCards() {

    const post = (data) => {
        if (data) {
            console.log(data),
            fetch('https://flashcard-backend-production.up.railway.app/api/card', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),// data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
        }
    }



    return { post }
}