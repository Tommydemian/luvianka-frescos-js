import { createStore } from 'vuex'

const store = createStore({
    state: {
        productGroups: [
                {
                  'name': 'cortes del lomo',
                  products: [
                    {
                  id: 1,
                  title: 'Solomillo de cerdo',
                  subtitle: 'El corte premium de la espalda del cerdo',
                  subgroup: 'lomo',
                  description: 'El solomillo de cerdo es un corte de carne de cerdo del lomo que se conoce por su sabor y suavidad. Es una pieza magra y tierna, ideal para asar, saltear o cocinar al horno.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/Frame 5764@2x.png', import.meta.url).href,
                  readmore: false
                },
                {
                  id: 3,
                  title: 'Churrasquito de cerdo',
                  subtitle: 'Corte tierno y versátil',
                  subgroup: 'lomo',
                  description: 'El churrasquito de cerdo es un corte de carne de cerdo que se obtiene de la parte superior del lomo. Se trata de un corte magro y tierno que se puede cocinar de varias formas y es ideal para platos asados.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/churrasquito.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 4,
                  title: 'Vacio ',
                  subtitle: 'El corte de lomo infaltable',
                  subgroup: 'lomo',
                  description: 'El vacío de cerdo es un corte magro y tierno de la parte trasera del animal, ideal para asado y parrilla. Es una parte rica en proteínas y baja en grasas, haciéndolo una opción saludable para dietas equilibradas. Se encuentra cerca de la cola y se puede cortar en filetes o tiras, es común en la cocina argentina y uruguaya.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/vacio.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 9,
                  title: 'Carre deshuesado', 
                  subtitle: 'Corte de carne sin hueso para asado o a la parrilla',
                  subgroup: 'lomo',
                  description: 'El carré deshuesado es un corte de cerdo que proviene de la parte trasera del animal, cerca de la espalda. Es un corte ancho y plano, que se caracteriza por tener un hueso retirado, lo que lo hace fácil de cortar y servir. Se puede cocinar a la parrilla, al horno o en la sartén y es ideal para asados y guisos. Es un corte muy versátil y tierno, con una textura suave y un sabor delicioso.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/carredeshuesado.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 10,
                  title: 'Milanesa de cerdo', 
                  subtitle: 'Filete de Lomo de Cerdo Adobado',
                  subgroup: 'lomo',
                  description: 'Las milanesas de cerdo son filetes de cerdo ligeramente marinados y luego panados y fritos hasta dorarse. Son un plato típico de la cocina argentina y sudamericana y se pueden servir como plato principal o como guarnición. Son populares por su sabor y textura crujiente, y se pueden rellenar con queso, jamón o verduras para agregar un toque extra de sabor.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/milanesa.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 11,
                  title: 'Cuadril de cerdo', 
                  subtitle: 'Corte premium de cuadril de cerdo',
                  subgroup: 'lomo',
                  description: 'El cuadril de cerdo es un corte de carne que proviene del lomo o espalda del animal. Es un corte magro y tierno, y se puede cortar en filetes o en tiras. Es ideal para la parrilla, el asado o la cocción rápida en sartén. Es una parte de la carne versátil y popular en muchos países, y se utiliza en una variedad de platos, desde ensaladas hasta platos principales.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/cuadril.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 14,
                  title: 'Cortes para milanesa', 
                  subtitle: 'corte ideal para empanados',
                  subgroup: 'lomo',
                  description: 'Los cortes de cerdo más comunes para hacer milanesas son el lomo, el filete y el cuadril. Estos cortes son magros y tiernos, lo que los hace ideales para la preparación de milanesas. Sin embargo, es fundamental que el corte sea uniforme y delgado para asegurar una buena textura y cocción en la milanesa. Además, algunas personas prefieren usar carne picada en lugar de cortes enteros para hacer milanesas, pero esto depende del gusto personal...',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/cortesparamilanesa.png', import.meta.url).href,
                  readmore: false
                  }
                  ],
                },
                {
                  name: 'Cortes del hombro',
                  products: [
                    {
                  id: 2,
                  title: 'Bondiola de cerdo',
                  subtitle: 'Corte tierno y versátil',
                  subgroup: 'hombro',
                  description: 'La bondiola de cerdo es un corte de carne de cerdo que proviene de la parte trasera del animal, cerca del lomo. Es un corte marmorizado, con una combinación de carne magra y grasa, ideal para asar al horno o a la parrilla. También se puede utilizar para hacer guisos y estofados. Es un corte popular y se caracteriza por su sabor suave y jugoso.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/bondiola.png', import.meta.url).href,
                  readmore: false
              
                },
                {
                  id: 6,
                  title: 'Pechito de cerdo ',
                  subtitle: 'Delicioso corte de la pechuga',
                  subgroup: 'hombro',
                  description: 'El pechito de cerdo es un corte de carne magro y tierno que proviene del pecho del cerdo. Es un corte versátil que se puede cocinar de varias maneras, como asado, parrilla, a la plancha o a la parrilla. Se puede cortar en filetes o en tiras para hacer platos como lomitos o cordero a la parrilla. Es una opción saludable debido a su bajo contenido de grasa y alto contenido de proteínas.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/pechito.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 8,
                  title: 'Matambrito de cerdo ',
                  subtitle: 'Corte Tierno y Suave',
                  subgroup: 'hombro',
                  description: 'El matambrito de cerdo es un corte de carne de la parte del pecho del animal. Es un corte magro y tierno que se suele utilizar para hacer asados o para milanesas. A menudo se considera una opción saludable debido a su bajo contenido de grasa y su alto contenido de proteínas.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/matambrito.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 12,
                  title: 'Chuleta de paleta', 
                  subtitle: 'Hueso en T para cocinar a la parrilla',
                  subgroup: 'hombro',
                  description: 'La chuleta de paleta de cerdo es un corte de carne de la parte superior del hombro del animal. Es un corte tierno y con poca grasa, por lo que es ideal para cocinar a la parrilla o al horno. Se puede cortar en filetes gruesos o en tiras finas, y se utiliza comúnmente en la cocina argentina y uruguaya.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/chuletadepaleta.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 13,
                  title: 'Chuleta de pernil', 
                  subtitle: 'Corte suculento de pernil de cerdo',
                  subgroup: 'hombro',
                  description: 'La chuleta de pernil es un corte de carne de cerdo que proviene de la parte trasera del animal, cerca de la cola. Es un corte fácil de preparar y se puede cocinar a la parrilla, al horno o en una sartén. Es una parte de la carne magra y tierna, por lo que es una opción saludable para aquellos que siguen una dieta equilibrada. Además, su sabor es suave y versátil, por lo que se puede combinar con diferentes sabores y es una opción popular para cenas familiares.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/chuletadepernil.png', import.meta.url).href,
                  readmore: false
                  }
                ]
                },
                {
                  name: 'Cortes de la Costilla',
                  products: [
                    {
                  id: 5,
                  title: 'Ribs de Cerdo ',
                  subtitle: 'Deliciosas y tiernas costillas',
                  subgroup: 'costilla',
                  description: 'Las ribs o costillas de cerdo son un corte de carne de la parte posterior del animal. Se caracterizan por tener una capa de grasa y una capa de carne, lo que las hace muy sabrosas. Se pueden asar o ahumar para conseguir un sabor ahumado y tierno, y se utilizan comúnmente en platos como el barbecue o el asado.',
                  weight: '7/8kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/ribs.png', import.meta.url).href,
                  readmore: false
                  },
                  {
                  id: 7,
                  title: 'Costillita de cerdo ',
                  subtitle: 'La reina de la barbacoa',
                  subgroup: 'costilla',
                  description: 'Las costillitas de cerdo son cortes de carne de la espalda del animal, compuestos de la costilla y una porción de la carne adyacente. Son populares en la cocina de barbeque y se pueden asar, cocinar a la parrilla o hacer a la parrilla hasta que estén tiernas y doradas, con una textura suave y sabores intensos. Se pueden servir como plato principal o como aperitivo, y son una opción popular en la cocina estadounidense y sudamericana.',
                  weight: '5kg Aprox',
                  image: new URL('../assets/images/productsPage/productGallery/costillita.png', import.meta.url).href,
                  readmore: false
                  },
                  ]
                }
              ], 
        recipes: [
                    {
                id: 1,        
                title: 'Lomo de Cerdo con Salsa de Miel y Mostaza',
                description: 'Una receta clásica con solo 6 ingredientes y 4 pasos. Lomo de cerdo adobado con una salsa dulce y picante.',
                ingredientes: [
                  'Lomo de cerdo',
                  'Mostaza Dijon',
                  'Miel',
                  'Ajo',
                  'Sal y pimienta'
                ],
                steps: [
                  'Mezclar mostaza, miel, ajo, sal y pimienta en un tazón pequeño.',
                  'Adobar el lomo de cerdo con la mezcla de la salsa.',
                  'Cocinar en una sartén hasta que esté dorado por ambos lados.',
                  'Verter la salsa sobre el lomo de cerdo y continuar cocinando hasta que esté completamente cocido.'
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/lomo-de-cerdo-recetas-miel-mostaza.jpg', import.meta.url).href
              },
              {
                id: 2,
                title: "Cerdo en Adobo",
                description: "Este platillo mexicano requiere 8 ingredientes y solo 4 pasos para una carne de cerdo suave y sabrosa.",
                ingredientes: [
                  "Carne de cerdo",
                  "Ajo",
                  "Comino",
                  "Oregano",
                  "Vinagre blanco",
                  "Agua",
                  "Sal",
                  "Pimienta negra"
                ],
                steps: [
                  "Mezclar los ingredientes de adobo en un tazón grande.",
                  "Añadir la carne de cerdo y marinar por un mínimo de 2 horas.",
                  "Cocinar la carne de cerdo en una sartén hasta que esté dorada por ambos lados.",
                  "Verter el adobo sobre la carne y continuar cocinando hasta que esté suave y tierno."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/cerdoadobo.jpg', import.meta.url).href
              },
              { id: 3,
                title: "Cerdo Ahumado con Papas",
                description: "Una cena fácil de hacer en solo 9 ingredientes y 4 pasos. La carne de cerdo ahumada se cocina junto con papas para una comida completa.",
                ingredientes: [
                  "Papas",
                  "Carne de cerdo ahumada",
                  "Cebolla",
                  "Ajo",
                  "Aceite de oliva",
                  "Tomates cherry",
                  "Sal y pimienta",
                  "Tomillo",
                  "Orégano"
                ],
                steps: [
                  "Precalentar el horno a 200 grados Celsius.",
                  "Cortar las papas en cubos y mezclarlas con cebolla, ajo, aceite de oliva, tomates cherry, sal, pimienta, tomillo y orégano.",
                  "Colocar la mezcla de papas en una bandeja para hornear.",
                  "Añadir la carne de cerdo ahumada y hornear por 25 minutos o hasta que estén doradas."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/cerdoahumadopapas.jpg', import.meta.url).href
              },
              {
                id: 4,
                title: "Cerdo en Salsa de Naranja",
                description: "Una combinación dulce y picante de 7 ingredientes y 4 pasos para una carne de cerdo tierna y sabrosa.",
                ingredientes: [
                  "Carne de cerdo",
                  "Jugo de naranja",
                  "Miel",
                  "Soja",
                  "Ajo",
                  "Gengibre",
                  "Cebolla"
                ],
                steps: [
                  "Mezclar el jugo de naranja, miel, soja, ajo, gengibre y cebolla en un tazón pequeño.",
                  "Cortar la carne de cerdo en tiras y marinar en la salsa por un mínimo de 1 hora.",
                  "Cocinar la carne de cerdo en una sartén hasta que esté dorada por ambos lados.",
                  "Verter la salsa sobre la carne y continuar cocinando hasta que esté completamente cocida."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/cerdonaranja.webp', import.meta.url).href
              },
              {
                id: 5,
                title: "Chuletas de Cerdo con Salsa de Manzana",
                description: "Un platillo clásico con 7 ingredientes y 4 pasos para una carne de cerdo tierna y sabrosa con un toque dulce de manzana.",
                "ingredientes": [
                "Chuletas de cerdo",
                "Manzana",
                "Cebolla",
                "Ajo",
                "Vinagre balsámico",
                "Miel",
                "Sal y pimienta"
                ],
                steps: [
                "Cortar la manzana y la cebolla en cubos pequeños.",
                "Mezclar ajo, vinagre balsámico, miel, sal y pimienta en un tazón pequeño para crear la salsa.",
                "Cocinar las chuletas de cerdo en una sartén hasta que estén doradas por ambos lados.",
                "Añadir la manzana y la cebolla a la sartén con las chuletas y verter la salsa sobre ellas. Cocinar hasta que la manzana esté suave y la salsa se haya espesado."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/cerdomanzana.jpg', import.meta.url).href
                },
                {
                id: 6,
                title: "Costillas de Cerdo al Horno con BBQ",
                description: "Un platillo fácil de hacer con 7 ingredientes y 4 pasos para costillas de cerdo tiernas y con un sabor ahumado a barbacoa.",
                "ingredientes": [
                "Costillas de cerdo",
                "Ketchup",
                "Miel",
                "Vinagre de manzana",
                "Mostaza dijon",
                "Ajo",
                "Sal y pimienta"
                ],
                steps: [
                "Mezclar ketchup, miel, vinagre de manzana, mostaza dijon, ajo, sal y pimienta en un tazón pequeño para crear la salsa de barbacoa.",
                "Cubrir las costillas de cerdo con la salsa de barbacoa y dejar marinar por un mínimo de 2 horas.",
                "Precalentar el horno a 220 grados Celsius.",
                "Colocar las costillas en una bandeja para hornear y hornear por 45 minutos o hasta que estén tiernas y doradas. Servir con más salsa de barbacoa al gusto."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/costillas-de-cerdo-en-salsa-barbicue.jpg', import.meta.url).href
                },
                {
                id: 7,
                title: " Solomillo de cerdo con salsa de cerezas",
                description: "El cerdo y las frutas se complementan a la perfección de manera sencilla y elegante y en esta meravillosa receta.",
                "ingredientes": 
                ["2 solomillos de cerdo",
                "2 naranjas",
                "1 limón",
                "200g de cerezas",
                "4 cucharadas de miel",
                "un poco de whisky",
                "sal y pimienta"]
                ,
                steps: [
                    "Mezclar zumo de naranja y limón con miel y agua. Pintar solomillos con esta mezcla y dejar marinar por unas horas.",
                    "Cocinar las cerezas con zumo de naranja y limón, whisky y miel en una cazuela a fuego lento.",
                    "Reducir la salsa hasta que quede espesa.",
                    "Cocinar los solomillos marinados hasta que estén listos. Servir con la salsa de cerezas por encima."
                ],
                image: new URL('../assets/images/recipesPage/recipeGallery/cerezaycerdo.jpg', import.meta.url).href
                }
                ]
              
        
    }, 
    mutations: {

    }, 
    actioons: {

    }, 
    getters: {
        productGroups(state) {
            return state.productGroups;
        }

    }
});

export default store;