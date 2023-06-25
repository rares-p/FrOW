

function Card(indexCard)
{
    return `
        <div class = "backCard">
            <div class = "card">
                <img class = "card_face card_face--back" src="src/media/BackCard.png" style="opacity:1">
                <img class = "card_face card_face--front" src="src/media/FaceCard${indexCard}.png" style="opacity:1">
                <img class = "card_face" src="src/media/EmptyCard.png" style="opacity:0;">
            </div>
        </div>
    `;
}

export default Card;