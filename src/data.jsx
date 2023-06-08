import slide01 from '@images/slider/slide01.jpg'
import slide02 from '@images/slider/slide02.jpg'
import slide03 from '@images/slider/slide03.jpg'
import slide04 from '@images/slider/slide04.jpg'
import slide05 from '@images/slider/slide05.jpg'
import slide06 from '@images/slider/slide06.jpg'
import slide07 from '@images/slider/slide07.jpg'
import slide08 from '@images/slider/slide08.jpg'
import slide09 from '@images/slider/slide09.jpg'
import slide10 from '@images/slider/slide10.jpg'
import slide11 from '@images/slider/slide11.jpg'

import lilacLadies from '@images/dress/lilac-ladies.jpg'
import lilacMen from '@images/dress/lilac-men.jpg'
import darkSuit from '@images/dress/dark-suit-men.jpg'
import powderBlueLadies from '@images/dress/powder-blue-ladies.jpg'
import powderBlueMen from '@images/dress/powder-blue-men.jpg'
import sageGreenLadies from '@images/dress/sage-green-ladies.jpg'
import sageGreenMen from '@images/dress/sage-green-men.jpg'

import ourStoryPandemic from '@images/our-story/our-story-pandemic.png'
import ourStoryMoves from '@images/our-story/our-story-damoves.png'
import ourStoryOfficial from '@images/our-story/our-story-official.png'
import ourStoryChallenge from '@images/our-story/our-story-challenges.png'
import ourStoryProposal from '@images/our-story/our-story-proposal.png'
import ourStoryBeyond from '@images/our-story/our-story-beyond.png'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DiamondIcon from '@mui/icons-material/Diamond';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export const pageImages = {
    gallery: [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11], 
    galleryItems: [
        {
            original: slide01,
            thumbnail: slide01,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide02,
            thumbnail: slide02,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide03,
            thumbnail: slide03,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide04,
            thumbnail: slide04,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide05,
            thumbnail: slide05,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide06,
            thumbnail: slide06,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide07,
            thumbnail: slide07,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide08,
            thumbnail: slide08,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide09,
            thumbnail: slide09,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide10,
            thumbnail: slide10,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
        {
            original: slide11,
            thumbnail: slide11,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
            loading: 'lazy',
        },
    ],
    menDress: [
        {
            description: 'Dark Suit', 
            original: darkSuit,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        }, 
        {
            description: 'Powder Blue', 
            original: powderBlueMen,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        },
        {
            description: 'Sage Green', 
            original: sageGreenMen,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        },
        {
            description: 'Lilac', 
            original: lilacMen,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        }
    ],
    ladiesDress: [
        {
            description: 'Powder Blue', 
            original: powderBlueLadies,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        },
        {
            description: 'Sage Green', 
            original: sageGreenLadies,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        },
        {
            description: 'Lilac', 
            original: lilacLadies,
            loading: 'lazy',
            sizes: "173px 300px",
            originalHeight: "300px",
            originalWidth: "173px"
        }
    ]
}

export const ourStory = {
    story: [
        {
            title: '2020 - The Pandemic Friendship',
            p: [
                'Everything started online!!???',
                'A very unfortunate thing happened last 2020, but somehow, it lead us to be introduced to each other on June 2020!', 
                'Reander was serving in CCF ministry in Cavite, while Jeni was serving in CCF Main\'s B1G music ministry in Pasig. But event with that distance, people from different places of the world started serving together by collaborating online due to the pandemic.'
            ], 
            image: ourStoryPandemic,
            icon: <PeopleAltIcon />
        },
        {
            title: '2021 - The pandemic damoves',
            p: [
                'If there were 2 things that we never ran out of, it would be topics to talk about and memes!!',
                'This was the year that we got to know more about each other on a personal level. We chatted more about our lives, interests, opinions, and spent time bonding over games with our friends. We found ourselves finding interest in each other through our similarities and differences.', 
                'Without reavealing our feelings to each other,   we found ourselves praying for each other and for our hearts to be prepared for what God has in store for us.',
                'When things got more settled in  different aspects of our lives, Reander decided na umamin na at mag-pursue! He laid down his intentions before 2021 ended, and visited Jeni\'s parents in Quezon!'
            ], 
            image: ourStoryMoves,
            icon: <DirectionsRunIcon />
        },
        {
            title: 'January 23, 2022 - <br />Making it official',
            p: [
                'When 2023 came, naging okay yung pasok nito samin until nagkaroon ng sakit si Reander nung birthday ni Jeni na naging reason bakit di nakapunta si Reander sa quezon to celebrate Jeni\'s birthday.',
                'Nung gumaling si Reander sa sakit niya, he went to Jeni\'s house in Quezon nung January 23, 2022. Little did Reander na yun yung time na gagawin ng official ni Jeni yung relationship nila.', 
                'We\'re both happy that God\'s timing is perfect. He\'s never early and late, just the right time.',
            ], 
            image: ourStoryOfficial,
            icon: <CheckCircleIcon />
        },
        {
            title: 'The challenges of 2022',
            p: [
                'We all had our share of challenges in 2022. That year felt like we lost a lot-- time, health, relationships, special occasions, and a woman very special to us.',
                'Our experiences and challenges at times, magnified our imperfections, but despite this we were committed to stay together and never give up.', 
                'We cried together, we laughed together, we prayed together, and for each other.',
                'The year had it\'s painful moments but there was joy because God was there with us through it all.'
            ], 
            image: ourStoryChallenge,
            icon: <ImportContactsIcon />
        },
        {
            title: '2023 - the proposal',
            p: [
                'Fast forward to 2023. Dala pa din namin yung baggage of tragedies that happened last year.',
                'But inspite of all the tragedies/challenges di nawala yung impression ni Lord kay Reander to propose to Jeni.', 
                'God made Reander realise that each moment that we have show God\'s love to us that\'s why even sa very low moment ni Jeni, reander propose to her to show God\'s love even in the darkest of times and even we are down.',
            ], 
            image: ourStoryProposal,
            icon: <DiamondIcon />
        },
        {
            title: 'september 23, 2023 <br />& the years ahead',
            p: [
                'We would love to spend time with you, our friends and families, as we celebrate our commitment and love for each other on Septemer 23, 2023.',
                'Of course it never ends there! Please continue praying for our relationship, our Christ-centered marriage, our new home, and our family in the future!', 
                'We are excited to see you!',
            ], 
            image: ourStoryBeyond,
            icon: <AirplanemodeActiveIcon />
        }

    ] 
}