import db from './firebase-config'
import firebase from 'firebase/compat/app';

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

export const pageInfo = {
    menu: [
        {
            title: 'Our Story',
            link: '#story'
        },
        {
            title: 'Info', 
            link: '#info',
        },
        {
            title: "RSVP",
            link: '#rsvp'
        }
    ],
    banner: {
        title: 'Jeni and Reander', 
        subtitle: 'are getting married', 
        date: 'September 23, 2023', 
        time: '3:00 PM',
        location: 'Villa Juliana Resort<span>Tayabas, Quezon</span>',
        coming_soon: 'Coming Soon',
    }, 
    story: {
        title: 'Our Story', 
        paragraphs: [
            '<strong>The standard Lorem Ipsum passage, used since the 1500s</strong> <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br>',
            '<strong>The standard Lorem Ipsum passage, used since the 1500s</strong> <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        ] 
    }, 
    entourage: {
        title: 'Entourage', 
        parents: {
            groom: {
                father: 'Ronnie A. Agulto',
                mother: 'Lea S. Agulto'
            },
            bride: {
                father: 'Ricardo T. Imperial', 
                mother: 'Ma. Juliana Imperial'
            }
        },
        principals: [
            {
                name: 'Francis Saturnino V. Juan',
                position: 'Atty.', 
                gender: 'male'
            }, 
            {
                name: 'Ericson O. Yu',
                position: 'Mr.', 
                gender: 'male'
            },
            {
                name: 'Claudio David R. Castro',
                position: 'Mr.', 
                gender: 'male'
            },
            {
                name: 'Ranulfo M. Campugan',
                position: 'Mr.', 
                gender: 'male'
            },
            {
                name: 'Minerva J. Hollmann',
                position: 'Dra.', 
                gender: 'female'
            },    
            {
                name: 'Ma. Theresa M. Manaligod',
                position: 'Mrs.', 
                gender: 'female'
            }, 
            {
                name: 'Leonila Matilde Pandy',
                position: 'Mrs.', 
                gender: 'female'
            },
            {
                name: 'Vicel Azada-Buenaobra',
                position: 'Mrs.', 
                gender: 'female'
            },  
        ],
        secondary: [
            {
                name: 'Mr. Frangelico Pandy', 
                role: 'best man'
            }, 
            {
                name: 'Mrs. Regine Anne Del-Rosario',
                role: 'matron'
            }, 
            {
                name: 'Mr. Jan Bret Salandanan',
                role: 'veil',
            },
            {
                name: 'Ms. Leeyan Nicole Agulto',
                role: 'veil'
            },
            {
                name: 'Mr. Jerome Atkins',
                role: 'candle'
            },
            {
                name: 'Ms. Hannah Bajao',
                role: 'candle'
            },
            {
                name: 'Mr. Luigi Riego',
                role: 'cord'
            },
            {
                name: 'Ms. Fearlyn Mae Studenski',
                role: 'cord'
            },
            {
                name: 'Mr. Juan Paolo Imperial',
                role: 'ring bearer'
            },
            {
                name: 'Mr. Keith Salandanan',
                role: 'coin bearer'
            },  
            {
                name: 'Ms. Sydney Salvoza',
                role: 'bible bearer'
            },
            {
                name: 'Mr. Chabi Imperial',
                role: 'flower dogs'
            },
            {
                name: 'Mr. Dylan Baby Luke Imperial',
                role: 'flower dogs'
            },
        ]
    },
    location: {
        title: 'Location',
        paragraphs: [
            '<strong>The standard Lorem Ipsum passage, used since the 1500s</strong> <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e sse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        ], 
        waze: 'https://www.waze.com/live-map/directions/villa-juliana-m-h-del-pilar-tayabas?to=place.w.79691916.796853627.15749615', 
        maps: 'https://goo.gl/maps/pV9kX2hzBpvXKpoo8'
    }, 
    dress: {
        title: 'Dress Code', 
        code: {
            ladies: 'midi or maxi dress, jumpsuit, pantsuit Gents: dark <br>suit, blazer, dress shirt, polo, tie',
            men: 'dark suit, blazer, dress shirt, polo, tie'
        }
    },
    rsvp: {
        title: 'RSVP', 
        paragraphs: [
            'We would love to know if you can join us on our special day? Please respond before <b><u>August 14</u></b>',
        ]
    },
    gallery: [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11], 
    galleryItems: [
        {
            original: slide01,
            thumbnail: slide01,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide02,
            thumbnail: slide02,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide03,
            thumbnail: slide03,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide04,
            thumbnail: slide04,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide05,
            thumbnail: slide05,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide06,
            thumbnail: slide06,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide07,
            thumbnail: slide07,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide08,
            thumbnail: slide08,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide09,
            thumbnail: slide09,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide10,
            thumbnail: slide10,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
        {
            original: slide11,
            thumbnail: slide11,
            thumbnailWidth: '150px', 
            thumbnailHeight: '150px',
        },
    ],
    guests: [
        {
            first_name: 'Reander',
            last_name: 'Agulto'
        }, 
        {
            first_name: 'Julienne Anne',
            last_name: 'Imperial'
        }, 
        {
            first_name: 'Ma. Juliana',
            last_name: 'Imperial'
        }, 
        {
            first_name: 'Ricardo',
            last_name: 'Imperial'
        }, 
        {
            first_name: 'Ronnie',
            last_name: 'Agulto'
        }, 
        {
            first_name: 'Carolina',
            last_name: 'Salandanan'
        }, 
    ]
}

export const firebaseData = {
    
}