import React from "react";
import PropTypes from "prop-types";
import { ENGINE_METHOD_DIGESTS } from "constants";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/04/17/eb70d87623d79fe27daeb9cc929b185e1.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://food.chosun.com/site/data/img_dir/2012/05/24/2012052401688_0.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_700.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
