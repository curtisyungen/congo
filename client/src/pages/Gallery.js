import React, { Component } from "react";
import Footer from "../components/Footer/footer";
import allBooks from "../images/allBooks.jpg";
import fiftyBooks from "../images/fiftyBooks.JPG";
import robertGreene from "../images/robertGreene.JPG";
import cardoneBooks from "../images/cardoneBooks.PNG";
import daringGreatly from "../images/daringGreatly.jpg";
import dietCults from "../images/dietCults.JPG";
import earlyShelf from "../images/earlyShelf.JPG";
import firstFullShelf from "../images/firstFullShelf.JPG";
import midBooks from "../images/midBooks.jpg";
import handstand from "../images/handstand.jpg";
import millionaireMind from "../images/millionaireMind.jpg";
import losingAMillion from "../images/losingAMillion.jpg";
import noOneUnderstands from "../images/noOneUnderstands.jpg";
import rousey from "../images/rousey.jpg";
import soGood from "../images/soGood.jpg";
import seal from "../images/seal.jpg";
import buyology from "../images/buyology.jpg";
import bounce from "../images/bounce.jpg";
import chessPiece from "../images/chessPiece.png";
import politics from "../images/politics.jpg";
import selfesteem from "../images/selfesteem.JPG";
import design from "../images/design.JPG";
import anxiety from "../images/anxiety.JPG";
import controlling from "../images/controlling.JPG";
import stacks from "../images/stacks.jpg";
import stacks2 from "../images/stacks2.jpg";
import "./Gallery.css";

class Gallery extends Component {

    componentDidMount = () => {
        if (window.location.protocol !== 'https:') {
            window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }
    
    render() {
        return (
            <span>

                <h4 className="galleryHeader">Gallery</h4>

                <div className="gallery">
                    <div>
                        <img className="fiftyBooks galleryImg col-8" src={fiftyBooks} alt="Fifty Books" />
                    </div>

                    <div>
                        <img className="robertGreene galleryImg col-4 left" src={robertGreene} alt="Robert Greene" />
                    </div>

                    <div>
                        <img className="cardoneBooks galleryImg col-4 right" src={cardoneBooks} alt="Grant Cardone" />
                    </div>
                    
                    <div>
                        <img className="millionaireMind galleryImg col-4 left" src={millionaireMind} alt="Millionaire Mind" />
                    </div>

                    <div>
                        <img className="losingAMillion galleryImg col-4 right" src={losingAMillion} alt="losingAMillion" />
                    </div>

                    <div>
                        <img className="daringGreatly galleryImg col-4 left" src={daringGreatly} alt="Daring Greatly" />
                    </div>

                    <div>
                        <img className="dietCults galleryImg col-4 right" src={dietCults} alt="Diet Cults" />
                    </div>

                    <div>
                        <img className="buyology galleryImg col-4 right" src={buyology} alt="buyology" />
                    </div>

                    <div>
                        <img className="bounce galleryImg col-4 left" src={bounce} alt="bounce" />
                    </div>

                    <div>
                        <img className="handstand galleryImg col-4 right" src={handstand} alt="Handstand" />
                    </div>

                    <div>
                        <img className="earlyShelf galleryImg col-4 left" src={earlyShelf} alt="Early Shelf" />
                    </div>

                    <div>
                        <img className="midBooks galleryImg col-4 right" src={midBooks} alt="Some books" />
                    </div>

                    <div>
                        <img className="firstFullShelf galleryImg col-4 left" src={firstFullShelf} alt="First Full Shelf" />
                    </div>

                    <div>
                        <img className="noOneUnderstands galleryImg col-4 right" src={noOneUnderstands} alt="noOneUnderstands" />
                    </div>

                    <div>
                        <img className="chessPiece galleryImg col-4 right" src={chessPiece} alt="chessPiece" />
                    </div>

                    <div>
                        <img className="soGood galleryImg col-4 left" src={soGood} alt="soGood" />
                    </div>

                    <div>
                        <img className="politics galleryImg col-8 left" src={politics} alt="politics" />
                    </div>

                    <div>
                        <img className="rousey galleryImg col-4 right" src={rousey} alt="rousey" />
                    </div>

                    <div>
                        <img className="seal galleryImg col-4 left" src={seal} alt="seal" />
                    </div>

                    <div>
                        <img className="design galleryImg col-4 right" src={design} alt="design" />
                    </div>

                    <div>
                        <img className="selfesteem galleryImg col-4 left" src={selfesteem} alt="selfesteem" />
                    </div>

                    <div>
                        <img className="stacks2 galleryImg col-4 right" src={stacks2} alt="stacks2" />
                    </div>

                    <div>
                        <img className="anxiety galleryImg col-4 left" src={anxiety} alt="anxiety" />
                    </div>

                    

                    <div>
                        <img className="stacks galleryImg col-4 left" src={stacks} alt="stacks" />
                    </div>

                    <div>
                        <img className="controlling galleryImg col-4 right" src={controlling} alt="controlling" />
                    </div>

                    

                    <div>
                        <img className="allBooks galleryImg col-8" src={allBooks} alt="All Books" />
                    </div>

                </div>

                <Footer />
            </span>
        )
    }
}

export default Gallery;