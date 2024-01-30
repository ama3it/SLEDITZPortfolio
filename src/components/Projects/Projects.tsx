import "./Project.css";
import { useState } from "react";

const Data = [
  {
    id: "1",
    title: "Poha",
    category: "Breakfast",
    price: "$1",
    img: "https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    desc: " Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples",
  },
  {
    id: "2",
    title: "Upma",
    category: "Breakfast",
    price: "$1",
    img: "https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    desc: " A quintessential South Indian Breakfast! Made with protein-packed urad dal and semolina followed by crunchy veggies and curd, this recipe makes for a hearty morning meal. With some grated coconut on top, it gives a beautiful south-Indian flavour.",
  },
  {
    id: "3",
    title: "Cheela",
    category: "Breakfast",
    price: "$1",
    img: "https://c.ndtvimg.com/2019-05/1afu8vt8_weight-loss-friendly-breakfast-paneer-besan-chilla_625x300_25_May_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    desc: "A staple across Indian households, moong dal is widely used in a number of Indian delicacies. One such delicacy is moong dal cheela. You can also add paneer to this recipe to amp up the nutritional value and make it, even more, protein-dense",
  },
  {
    id: "4",
    title: "Channa Kulcha",
    category: "Lunch",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg",
    desc: "A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder, and some mango powder, which is what gives the chana its sour and tangy taste.",
  },
  {
    id: "5",
    title: "Egg Curry",
    category: "Lunch",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2017-11/goan-egg-curry_620x350_41511515276.jpg",
    desc: "Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt, and fresh coriander.",
  },
  {
    id: "6",
    title: "Paneer Aachari",
    category: "Lunch",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg",
    desc: "Don't get intimidated by the list of ingredients because not only are already in your kitchen cabinet, but also because all they'll need is 20 minutes of your time. Chunks of cottage cheese cooked in some exciting spices, yogurt and a pinch of sugar.",
  },
  {
    id: "7",
    title: "Fish Fry",
    category: "Dinner",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg",
    desc: "Get your daily dose of perfect protein. Pieces of surmai fish marinated in garlic, cumin, fennel, curry leaves, and tomatoes are pan-fried in refined oil and served hot. This fish fry recipe has a host of delectable spices used for marination giving it a unique touch.",
  },
  {
    id: "8",
    title: "Dum Alloo",
    category: "Dinner",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_51434362664.jpg",
    desc: "Your family will thank you for this fantastic bowl of dum aloo cooked Lakhnawi style. Take some potatoes, crumbled paneer, kasuri methi, butter, onions, and some ghee.",
  },
  {
    id: "9",
    title: "Malai Kofta",
    category: "Dinner",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg",
    desc: "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.",
  },
  {
    id: "10",
    title: "Malai Kofta",
    category: "Snaks",
    price: "$1",
    img: "https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg",
    desc: "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.",
  },
];

const Projects = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
// @ts-ignore
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-6 md:text-2xl text-xl font-medium">My Works</h3>

        <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          illo distinctio beatae perspiciatis et! Rem, enim?
        </p>
      </div>

      <div className="grid grid-cols-1 items-center mt-6 gap-6">
        <div className="filters-group-wrap text-center">
          <div className="filters-group">
            <ul className="mb-0 list-none container-filter space-x-3">
              <li
                className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500 active "
                data-group="all"
                onClick={() => setItem(Data)}
              >
                All
              </li>
              {menuItems.map((val, id) => {
                return (
                  <li
                    className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500"
                    data-group="all"
                    key={id}
                    onClick={() => filterItem(val)}
                  >
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="md:flex flex-wrap w-full mx-auto mt-4">
        {item.map((item) => {
          return (
            <div className="lg:w-1/2 md:w-1/3 p-3 picture-item" key={item.id}>
              <div className="group relative block rounded-xl duration-700 ease-in-out">
                <div className="relative overflow-hidden rounded-xl">
                  <a href={item.img} className="lightbox" title="">
                    <img src={item.img} className="rounded-xl" alt="" />
                  </a>
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
