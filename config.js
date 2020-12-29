var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoidG9ueWJlaGFyIiwiYSI6ImNrajlya2RoZzFoZmkycXA5Nnpjc3BheGEifQ.JnEUpxQ2NVC9uumiPZ8JWA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'CAMSTL',
    subtitle: 'Centro Audiovisual Max Stahl Timor Leste',
    byline: 'The importance of The Archive derives from the crucial role that audiovisual material played in the East Timorese struggle for self-determination and human rights. That struggle was captured in the faces and the voices of this very dedicated, resilient and persistent people by International film-maker Max Stahl on over 3000 hours of film and audio recording.',
    footer: '&copy; 2020  [ Rua Formosa No.19. Vera Cruz, Suco Colmera, Rai Nain. Dili, Timor-Leste ]',
        
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Server Back Office Host Specification',
            image: 'images/camstl.png',
            description: 'Our mission is to help facilitate the newly independent East-Timor in accessing the voices and the key events in its past and fostering an understanding of its unique cultural heritage; to help unite and secure the identity of the country and its people; and to contribute to the forging of a new democratic nation. To ensure the survival of unique resources which contain and communicate the experience and the story of Timor-Leste and to place these at the service of peace and understanding, in Timor-Leste, Regionally and Internationally.',
            
            
            location: {
                center: [125.57726, -8.55524],  
                zoom: 18.00,
                pitch: 19.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Server Front Office Host Specification [Partner]',
            image: 'images/uc-pt.png',
            description: 'The University of Coimbra, is a Portuguese public University in Coimbra Portugal, being one of the oldest universities in continuous operation in the world. On 22 June 2013, UNESCO added the university to its World Heritage List.',
            
            
            location: {
                center: [ -8.425943, 40.207225],  
                zoom: 15.00,
                pitch: 9.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
