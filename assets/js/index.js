const citations = [
    {
        title: 'Kandy, Sri Lanka',
        description: ` Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.`,
        link: 'https://en.wikipedia.org/wiki/Kandy'
    },
    {
        title: 'Marga, Indonesia',
        description: `Marga is a district of Tabanan Regency, Bali, Indonesia. It is the location of the Battle of Margarana, where Indonesian National Hero I Gusti Ngurah Rai was killed by Dutch forces during the Indonesian Revolution`,
        link: 'https://en.wikipedia.org/wiki/Marga,_Tabanan'
    },
    {
        title: 'Interlaken, Switzerland',
        description: `Interlaken is a traditional resort town in the mountainous Bernese Oberland region of central Switzerland. Built on a narrow stretch of valley, between the emerald-colored waters of Lake Thun and Lake Brienz, it has old timber houses and parkland on either side of the Aare River. Its surrounding mountains, with dense forests, alpine meadows and glaciers, has numerous hiking and skiing trails`,
        link: 'https://en.wikipedia.org/wiki/Interlaken'
    },
    {
        title: 'Vik, Iceland',
        description: `Vík í Mýrdal is a remote seafront village in south Iceland. It sits in the shadow of Mýrdalsjökull glacier, which covers the Katla volcano. Reyniskirkja is a wooden church dating to 1929. Reynisfjara beach has black pebbles, basalt columns and the Reynisdrangar offshore rock formations. The cliffs of Reynisfjall mountain are home to seabirds such as puffins. Just west, the Dyrhólaey peninsula has a large rock arch.`,
        link: 'https://en.wikipedia.org/wiki/Vík_í_Mýrdal'
    },
    {
        title: 'Stockholm, Sweden',
        description: `Stockholm, the capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago. The cobblestone streets and ochre-colored buildings of Gamla Stan (the old town) are home to the 13th-century Storkyrkan Cathedral, the Kungliga Slottet Royal Palace and the Nobel Museum, which focuses on the Nobel Prize. Ferries and sightseeing boats shuttle passengers between the islands.`,
        link: 'https://en.wikipedia.org/wiki/Stockholm'
    },
    {
        title: 'Ouarzazate, Morocco',
        description: `Ouarzazate is a city south of Morocco’s High Atlas mountains, known as a gateway to the Sahara Desert. Its huge Taourirt Kasbah, home to a 19th-century palace, has views over the rugged local landscape, which features in several movies. Northwest is the fortified red-earth city of Aït Ben Haddou. Northeast is the rocky Todra Gorge. A road winds southeast through the Draa Valley’s lush palm groves to the desert.`,
        link: 'https://en.wikipedia.org/wiki/Ouarzazate'
    },
    {
        title: 'Lake Baikal, Russia',
        description: `Lake Baikal is an ancient, massive lake in the mountainous Russian region of Siberia, north of the Mongolian border. Considered the deepest lake in the world, it’s circled by a network of hiking paths called the Great Baikal Trail. The village of Listvyanka, on its western shoreline, is a popular starting point for summertime wildlife-spotting tours, plus wintertime ice-skating and dog sledding.`,
        link: 'https://en.wikipedia.org/wiki/Lake_Baikal'
    },
    {
        title: 'Lambari, Brazi',
        description: `Lambari is a municipality in the state of Minas Gerais in the Southeast region of Brazil. The municipality contains the 214 hectares Nova Baden State Park, created in 1994.`,
        link: 'https://en.wikipedia.org/wiki/Lambari,_Minas_Gerais'
    },
    {
        title: 'Kigali, Rwanda',
        description: `Kigali is the capital city of Rwanda, roughly in the center of the country. It sprawls across numerous hills, ridges and valleys, and has a vibrant restaurant and nightlife scene. The Kigali Genocide Memorial documents the 1994 occurences in Rwanda, associated with the country’s civil war. The city’s Caplaki Crafts Village has stalls selling traditional handicrafts, including woodcarvings and woven baskets.`,
        link: 'https://en.wikipedia.org/wiki/Kigali'
    },
    {
        title: 'Honolulu, US',
        description: `Honolulu, on the island of Oahu’s south shore, is capital of Hawaii and gateway to the U.S. island chain. The Waikiki neighborhood is its center for dining, nightlife and shopping, famed for its iconic crescent beach backed by palms and high-rise hotels, with volcanic Diamond Head crater looming in the distance. Sites relating to the World War II attack on Pearl Harbor include the USS Arizona Memorial.`,
        link: 'https://en.wikipedia.org/wiki/Honolulu'
    },
    {
        title: 'Hobbiton, New Zealand',
        description: `The Hobbiton Movie Set was a significant location used for The Lord of the Rings film trilogy and The Hobbit film trilogy.`,
        link: 'https://en.wikipedia.org/wiki/Hobbiton_Movie_Set'
    },
    {
        title: 'Taito City, Japan',
        description: `Known for its old downtown shitamachi areas such as Asakusa, Ueno and Yanaka, Taito City is a must for any Tokyo explorer's itinerary. It's the capital's smallest “ward” (the municipal division of neighborhoods across Tokyo) but one of its richest in terms of history and traditional culture.`,
        link: 'https://en.wikipedia.org/wiki/Taitō'
    },
    {
        title: 'Wulong, China',
        description: `The Wulong Karst (Chinese: 武隆喀斯特) is a karst landscape located within the borders of Wulong District, Chongqing Municipality, People's Republic of China. It is divided into three areas containing the Three Natural Bridges, the Qingkou Tiankeng (箐口天坑) and Furong Cave respectively. It is a part of the Wulong Karst National Geology Park as well as part of the South China Karst, a UNESCO World Heritage Site.`,
        link: 'https://en.wikipedia.org/wiki/Wulong_Karst'
    },
    {
        title: 'Lisbon, Portugal',
        description: `Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge. Nearby, the National Azulejo Museum displays 5 centuries of decorative ceramic tiles. Just outside Lisbon is a string of Atlantic beaches, from Cascais to Estoril.`,
        link: 'https://en.wikipedia.org/wiki/Lisbon'
    },
    {
        title: 'Machu Picchu, Peru',
        description: `Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery. `,
        link: 'https://en.wikipedia.org/wiki/Machu_Picchu'
    },
    {
        title: 'Fuvahmulah, Maldives',
        description: `Fuvahmulah City is an island in the Maldives. It is under Maldives administrative divisions of Gnaviyani Atoll or Nyaviyani Atoll. The inhabitants speak a distinctive form of the Dhivehi language, known as "Fuvahmulaki baha". Fuvahmulah means "Island of the Areca nut palms", Fuvah in the local language.`,
        link: 'https://en.wikipedia.org/wiki/Fuvahmulah'
    },
];

const likeIcon = document.querySelector('.like-icon')
const likeCount = document.querySelector('.like-count')

const wrapper = document.querySelector('.wrapper')
const snackBar = document.querySelector('.snack-bar')
const snackClose = document.querySelector('.close-snack')
const bookmarks = document.querySelectorAll('.bookmark')
const notification = document.querySelector('.notification')
const notBar = document.querySelector('.not-bar')

const snackTitle = document.getElementById('snackTitle')
const snackDesc = document.getElementById('snackDesc')
const snackImg = document.getElementById('snackImg')
const snackLink = document.getElementById('snackLink')

const snackBtns = document.querySelectorAll('.photo > a')

snackBtns.forEach(snackBtn => {
    snackBtn.addEventListener('click',(e)=>{
        let snackId = parseInt(e.target.dataset.id)
        snackTitle.textContent = citations[snackId].title
            snackDesc.textContent = citations[snackId].description
            snackImg.setAttribute('src',`./assets/img/gallery/new_Compressed_gallery-photos__${snackId+1}.jpg`)
            snackLink.setAttribute('href',citations[snackId].link)
            wrapper.classList.add('expand-width')
            setTimeout(()=>{
                wrapper.classList.add('expand-height')
            },250)
            setTimeout(()=>{
                snackBar.classList.add('center-snack')
            },500)
    })
})

likeIcon.addEventListener('click',function(){
    likeIcon.classList.add('liked')
    likeCount.textContent = '97'
})

snackClose.addEventListener('click',()=>{
    snackBar.classList.remove('center-snack')
    setTimeout(()=>{
        wrapper.classList.remove('expand-height')
    },500)
    setTimeout(()=>{
        wrapper.classList.remove('expand-width')
    },750)
})

wrapper.addEventListener('click', ()=>{
    snackBar.classList.remove('center-snack')
    setTimeout(()=>{
        wrapper.classList.remove('expand-height')
    },500)
    setTimeout(()=>{
        wrapper.classList.remove('expand-width')
    },750)
})

bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click',()=>{
        notification.style.opacity = 1;
        setTimeout(()=>{
            notBar.classList.add('not-loaded')
        },250)
        setTimeout(()=>{
            notification.style.opacity = 0
        },1250)
        setTimeout(()=>{
            notBar.classList.remove('not-loaded')
        },1500)
    })
})