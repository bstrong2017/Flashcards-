import React from 'react';
import {useState} from 'react';

function Flashcard({question,answer, imageSrc}){

const [isFlipped, setIsFlipped] = useState(false);
const [count, setCount] = useState(0);

const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
};

    return(
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick = {handleCardFlip}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                     <img src = {imageSrc} alt="Card" />
                     <div className="flashcard-content">
                        <h3>{question}</h3>
                     </div>
                </div>
                <div className="flashcard-back">
                    <div className="flashcard-content">
                        <h3>{answer}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TenFlashcards() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const flashcards = [
        {
            //1
            imageSrc: 'https://cdn.arstechnica.net/wp-content/uploads/2016/04/cryptopic-1-640x360.jpg',
            question: 'What is Cryptography?',
            answer: 'It is the study of secure communications techniques that allow only the sender and the intended recipient of a message to view its contents'
        },
        {
            //2
            imageSrc: 'https://media.licdn.com/dms/image/D5612AQE0XhZvyDdeeQ/article-cover_image-shrink_600_2000/0/1675657882603?e=2147483647&v=beta&t=nQVJ3EBswHUKneHUsCqZGrDAJiH8Gc1w81_tYEAgDZg',
            question: 'What is the CIA triad?',
            answer: 'Confidentiality, Integrity, and Authentication'
        },
        {
            //3
            imageSrc:"https://blog.1password.com/posts/2022/what-is-public-key-cryptography/header.png",
            question:"Cryptography deal with...",
            answer:"Privacy/confidentiality, authentication, key exchange, integrity, and more"
        },
        {
            //4
            imageSrc:"https://c8.alamy.com/comp/GTDJ05/word-decrypt-surrounded-by-digits-on-dark-background-GTDJ05.jpg",
            question:"Cryptology is the art and science of making and breaking what?",
            answer:"secret code"
        },
        {
            //5
            imageSrc:"data:image/jpeg;base64,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",
            question:"What is a cipher?",
            answer:"a system used to encrypt the plaintext"
        },
        {
            //6
            imageSrc:"https://static.euronews.com/articles/stories/07/92/29/48/1440x810_cmsv2_e1138718-a9a4-5c31-afc1-b1551d9e28b9-7922948.jpg",
            question:"What is the result of encryption?",
            answer:"Ciphertext"
        },
        {
            //7
            imageSrc:"https://www.brynmawr.edu/sites/default/files/styles/bulletin_news_horizontal/public/migrated-files/code1.jpg?h=3b970155&itok=Zm6rwSVe",
            question:"How do we recover plaintext?",
            answer:"Decrypt ciphertext"
        },
        {
            //8
            imageSrc:"https://wp.technologyreview.com/wp-content/uploads/2019/07/quantumexplainer3.2-01-10.jpg",
            question:"What do we use to configure a crypto-system?",
            answer:"Key"
        },
        {
            //9
            imageSrc:"data:image/jpeg;base64,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",
            question:"What is a Symmetric-key?",
            answer:"It is a cryptosystem that uses the same key to encrypt as to decrypt"
        },
        {
            //10
            imageSrc:"https://miro.medium.com/v2/resize:fit:1198/1*gPnXuQtP58302SCJ5tTCpg.png",
            question:"What is a Public-key?",
            answer:"It is a cryptosystem that uses a public key to encrypt and a private key to decrypt"
        }
    ];

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const currentCard = flashcards[currentCardIndex];

    return (
        <div className="more-content">
            <Flashcard
                imageSrc={currentCard.imageSrc}
                question={currentCard.question}
                answer={currentCard.answer}
            />
            <button className="flashcard-button" onClick={handleNextCard}>Next Card</button>
        </div>
    );
}


export default TenFlashcards;

// return(
//     <div className="more-content">
//         <Flashcard 
//         imageSrc="https://cdn.arstechnica.net/wp-content/uploads/2016/04/cryptopic-1-640x360.jpg"
//         question="What is Cryptography?"
//         answer="It is the study of secure communications techniques that allow only 
//         the send and the intended recipient of a message to view its contents"
//         />
//         <button onClick={handleNextCard}>Next Card</button>
//         <Flashcard 
//         imageSrc=""
//         question=""
//         />
//     </div>