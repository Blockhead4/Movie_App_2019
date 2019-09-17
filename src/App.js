import React from "react";
import { ENGINE_METHOD_DIGESTS } from "constants";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/04/17/eb70d87623d79fe27daeb9cc929b185e1.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://food.chosun.com/site/data/img_dir/2012/05/24/2012052401688_0.jpg"
  },
  {
    name: "Doncasu",
    image:
      "http://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_700.jpg"
  },
  {
    name: "Kimbap",
    image: "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg"
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
