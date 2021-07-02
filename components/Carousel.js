
function Carousel(cards, title, subtitle){
    return(
        <CarouselContainer>
                {!!cards && cards.map(card) (
                    <CarouselItem>
                        <img src={card.image}></img>
                        <CardText>{card.text}</CardText>

                    </CarouselItem>
                )}
        </CarouselContainer>
    )
}


export default Carousel;

const CarouselItem  = s.div``;
const CarouselContainer = s.div``;
const CardText = s.div``;
