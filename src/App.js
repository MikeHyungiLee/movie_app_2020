import React from "react";

function Food({ name, picture }) {
    return ( <
        div >
        <
        h2 > I like { name } < /h2> <img src={picture} width="300" heith="300" / >
        <
        /div>
    );
}

// data array
const foodILike = [{
        name: "Kimchi",
        image: "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
        rating: 4.5,
    },
    {
        name: "Samgyeopsam",
        image: "https://i.pinimg.com/originals/bb/be/b3/bbbeb3054f2d5ab7312624a15ee3614e.jpg",
        rating: 5.0,
    },
    {
        name: "NangMyeon",
        image: "https://spainvskorearecipes.files.wordpress.com/2017/09/1732e8aa-b9e6-4b90-b4f2-ee2a057b170f-1.jpg",
        rating: 4.1,
    },
    {
        name: "Kalguksu",
        image: "https://mykoreankitchen.com/wp-content/uploads/2016/12/1.-Kalguksu-500x500.jpg",
        rating: 3.8,
    },
];

function App() {
    return ( <
        div >
        <
        h1 > Hello!!!!! < /h1>{" "} {
            foodILike.map((dish) => ( <
                Food name = { dish.name }
                picture = { dish.image }
                />
            ))
        } { " " } <
        /div>
    );
}

export default App;