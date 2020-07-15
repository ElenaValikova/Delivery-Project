import { restaurants } from "./data/restoraunts";

const render = (id, data) => (document.getElementById(id).innerHTML = data);
const compileInfo = ({ time, rate, minCost, food }) => {
    return `
<ul>
    <li>Еда: ${food}</li>
    <li>Рейтинг: ${rate}</li>
    <li>Время доставки: ${time}</li>
    <li>Минимальная цена за блюдо: ${minCost}</li>
</ul>`;
  };

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const restaurant = restaurants.find(
    (item) => id && String(item.id) === String(id)
  );
  
  if (restaurant) {
    render("name", restaurant.name);
    render("info", compileInfo(restaurant));
  } else {
    render("name", "Ресторан не найден");
  }
});
