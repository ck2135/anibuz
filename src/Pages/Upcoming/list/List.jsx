import React from "react";
import './List.css'
import img1 from '../../../Assets/img1.jpg'
import img2 from '../../../Assets/img2.jpg'
import img3 from '../../../Assets/img3.jpg'
import img4 from '../../../Assets/img4.jpg'
import img5 from '../../../Assets/img5.jpg'
import img6 from '../../../Assets/img6.jpg'
import img7 from '../../../Assets/img7.jpg'
import img8 from '../../../Assets/img8.jpg'
import img9 from '../../../Assets/img9.jpg'
import img10 from '../../../Assets/img10.jpg'


const List = () => {

    let news = [
        {
            h2: 'Tokyo Revengers TV Anime See Mikey and Izana Faces Off in New Tenjiku Arc Trailer, Visual',
            h4: 'The third major arc begins October 3',
            h6: 'Daryl Harding',
            src: img1
        },
        {
            h2: "SPY x FAMILY CODE: White Anime Film International Theatrical Release Dates Announced",
            h4: 'New dub trailers for the movie also released',
            h6: "Kyle Cardine",
            src: img2
        },
        {
            h2: 'Japan Box Office: Demon Slayer: Kimetsu no Yaiba -To the Hashira Training- Makes No. 1 Debut',
            h4: 'To the Hashira Training- made over 600 million yen in its first weekend',
            h6: 'Mikikazu Komatsu',
            src: img3
        },
        {
            h2: 'No Longer Allowed in Another World TV Anime Announces Premiere Date with New Trailer,Voice Cast Members',
            h4: 'Hiroshi Kamiya is cast as the protagonist, Sensei',
            h6: 'Mikikazu Komatsu',
            src: img4
        },
        {
            h2: 'One Piece Creator Eiichiro Oda Designs Logo for Legendary Japanese Band GLAY',
            h4: 'This is the band first ever official logo',
            h6: 'Daryl Harding',
            src: img5
        },
        {
            h2: 'Toman Takes Over Tokyo Tower in Tokyo Revengers Anime Collab',
            h4: 'For one month, Tokyo Tower will be painted (more) red',
            h6: 'Daryl Harding',
            src: img6
        },
        {
            h2: 'Demon Slayer: Kimetsu no Yaiba -To the Hashira Training- Anime Opens Past 600 Million Yen in Japan',
            h4: 'Makes it the top box office release of the weekend',
            h6: 'Daryl Harding',
            src: img7
        },
        {
            h2: 'your name. Audiobook Due July 2024 from Yen Press',
            h4: 'Latest Yen Audio title to be released across all major audiobook platforms',
            h6: 'Humberto Saabedra',
            src: img8
        },
        {
            h2: 'Mushoku Tensei: Jobless Reincarnation Season 2 Cour 2 Anime Premieres April 7 [UPDATED]',
            h4: 'New trailer, key visual released for the latest announcement',
            h6: 'Liam Dempsey',
            src: img9
        },
        {
            h2: 'Dragon Ball Z x Reese Puffs Collab Packs Powerful Punch in Limited-Time Boxes',
            h4: 'Goku, Vegeta and more available while supplies last',
            h6: 'Joseph Luster',
            src: img10
        }
    ]


    return (
        <>
            <h1 className="heading">Top Anime News</h1>

            <div className="newsList">
            {news.map((item) => (
          <div key={item} className="newsItem">
            <div className="image">
              <img src={item.src} alt="" />
            </div>
            <div className="text">
              <h2>{item.h2}</h2>
              <p>{item.h4}</p>
              <h6>{item.h6}</h6>
            </div>
          </div>
        ))}
            </div>



        </>
    );
};

export default List;
