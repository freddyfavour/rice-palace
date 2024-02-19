// Import images
import biryaniImage from "../../../assets/biryani.png";
import arrozalaImage from "../../../assets/arrozala.png";
import chelowImage from "../../../assets/Chelow.png";
import coconutRiceImage from "../../../assets/coconut.png";
import curryRiceImage from "../../../assets/curry.png";
import friedRiceImage from "../../../assets/fried.png";
import jollofRiceImage from "../../../assets/jollof.png";
import kabsaImage from "../../../assets/kabsa.png";
import paellaImage from "../../../assets/paella.png";
import pilafImage from "../../../assets/pilaf.png";
import risottoImage from "../../../assets/risotto.png";

// Gallery function
const gallery = (name, src, price, description) => {
  return { name, src, price, description };
};

//meals array
const meals = [
  gallery(
    "Biryani",
    biryaniImage,
    "$10",
    "Biryani is a flavorful and aromatic rice dish made with basmati rice, spices, and usually meat or vegetables."
  ),
  gallery(
    "Arroz Ala",
    arrozalaImage,
    "$12",
    "Arroz Ala is a Spanish rice dish cooked with saffron, vegetables, and sometimes seafood or meat."
  ),
  gallery(
    "Chelow",
    chelowImage,
    "$8",
    "Chelow is a Persian rice dish consisting of fluffy rice served with a pat of butter or saffron-infused rice."
  ),
  gallery(
    "Coconut Rice",
    coconutRiceImage,
    "$9",
    "Coconut Rice is a tropical dish made by cooking rice with coconut milk, giving it a rich and creamy flavor."
  ),
  gallery(
    "Curry Rice",
    curryRiceImage,
    "$11",
    "Curry Rice is a dish where rice is cooked with a flavorful curry sauce, often containing meat, vegetables, or tofu."
  ),
  gallery(
    "Fried Rice",
    friedRiceImage,
    "$7",
    "Fried Rice is a Chinese dish made by stir-frying pre-cooked rice with vegetables, eggs, and sometimes meat or seafood."
  ),
  gallery(
    "Jollof Rice",
    jollofRiceImage,
    "$13",
    "Jollof Rice is a popular West African dish made with rice, tomatoes, onions, and a blend of spices, often served with meat or fish."
  ),
  gallery(
    "Kabsa",
    kabsaImage,
    "$15",
    "Kabsa is a traditional Saudi Arabian dish made with spiced rice, meat (usually chicken, lamb, or goat), and vegetables."
  ),
  gallery(
    "Paella",
    paellaImage,
    "$14",
    "Paella is a Spanish rice dish originating from the Valencia region, typically made with saffron-infused rice, seafood, chicken, and vegetables."
  ),
  gallery(
    "Pilaf",
    pilafImage,
    "$10",
    "Pilaf is a dish where rice is cooked in a seasoned broth, often with spices, vegetables, and sometimes meat or dried fruits."
  ),
  gallery(
    "Risotto",
    risottoImage,
    "$16",
    "Risotto is an Italian rice dish cooked with broth to a creamy consistency, often flavored with ingredients such as mushrooms, seafood, or cheese."
  ),
];

export default meals;
