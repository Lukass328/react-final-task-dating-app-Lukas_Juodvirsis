import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import '../css/Card.css'

function TinderCards() {
  const [peoples, setPeople] = useState([
    {
      name: `Elon Musk`,
      url: `https://media.gettyimages.com/photos/of-tesla-and-space-x-elon-musk-attends-the-2015-vanity-fair-oscar-picture-id464172224?k=6&m=464172224&s=612x612&w=0&h=M9Wf9-mcTJBLRWKFhAX_QGVAPXogzxyvZeCiIV5O3pw=`
    },
    {
      name: `Jeff Bezos`,
      url: `https://media.gettyimages.com/photos/amazon-ceo-jeff-bezos-founder-of-space-venture-blue-origin-and-owner-picture-id1036094130?k=6&m=1036094130&s=612x612&w=0&h=3tKtZs6_SIXFZ2sdRUB4LjAf_GlfCMekP2Morwkt5EM=`
    }
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log(`i'm in swiped`, nameToDelete);
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(`enough tinder today`);

  }
  return (
    <div className="tinderCard_container">
      {peoples.map((person, index) =>
        <TinderCard
          key={index}
          className="swipe"
          preventSwipe={[`up`, `down`]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div className="card"
            style={{
              backgroundImage: "url(" + person.url + ")"
            }}>
            <h3>{person.name}</h3>
          </div>

        </TinderCard>
      )}
    </div>
  )
}
export default TinderCards;