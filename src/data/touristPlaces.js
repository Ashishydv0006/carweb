import delhiPreviewImg from "../assets/places/delhi-preview.jpg";
import agraPreviewImg from "../assets/places/agra-preview.jpg";
import jaipurPreviewImg from "../assets/places/jaipur-preview.jpg";
import delhiImg from "../assets/places/delhi.jpg";
import gurgaonImg from "../assets/places/gurgaon.jpg";
import agraImg from "../assets/places/agra.jpg";
import jaipurImg from "../assets/places/jaipur.jpg";
import amritsarImg from "../assets/places/amritsar.jpg";
import rishikeshImg from "../assets/places/rishikesh.jpg";
import varanasiImg from "../assets/places/varanasi.jpg";
import shimlaImg from "../assets/places/shimla.jpg";
import manaliImg from "../assets/places/manali.jpg";
import udaipurImg from "../assets/places/udaipur.jpg";
import jodhpurImg from "../assets/places/jodhpur.jpg";
import jaisalmerImg from "../assets/places/jaisalmer.jpg";
import mumbaiImg from "../assets/places/mumbai.jpg";
import goaImg from "../assets/places/goa.jpg";
import bengaluruImg from "../assets/places/bengaluru.jpg";
import mysuruImg from "../assets/places/mysuru.jpg";
import hyderabadImg from "../assets/places/hyderabad.jpg";
import chennaiImg from "../assets/places/chennai.jpg";
import kolkataImg from "../assets/places/kolkata.jpg";
import darjeelingImg from "../assets/places/darjeeling.jpg";
import kochiImg from "../assets/places/kochi.jpg";
import alleppeyImg from "../assets/places/alleppey.jpg";
import ahmedabadImg from "../assets/places/ahmedabad.jpg";
import konarkImg from "../assets/places/konark.jpg";

export const tourPreviewCities = [
  {
    id: "delhi-preview",
    city: "Delhi",
    state: "Delhi NCR",
    image: delhiPreviewImg,
    description:
      "The capital�s signature circuit of heritage, culture, and modern boulevards.",
    highlights: ["Qutub Minar", "India Gate", "Humayun's Tomb"],
  },
  {
    id: "agra-preview",
    city: "Agra",
    state: "Uttar Pradesh",
    image: agraPreviewImg,
    description:
      "A timeless Mughal masterpiece just a smooth glide from Delhi NCR.",
    highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
  },
  {
    id: "jaipur-preview",
    city: "Jaipur",
    state: "Rajasthan",
    image: jaipurPreviewImg,
    description:
      "Pink City royalty, vibrant markets, and iconic palace architecture.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace"],
  },
];

const touristCityCards = [
  {
    id: "delhi",
    city: "Delhi",
    state: "Delhi NCR",
    image: delhiImg,
    primaryPlace: "Qutub Minar",
    description: "Capital heritage loop with grand monuments and memorials.",
    highlights: ["Qutub Minar", "India Gate", "Humayun's Tomb", "Red Fort"],
  },
  {
    id: "gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    image: gurgaonImg,
    primaryPlace: "Damdama Lake",
    description: "Premium city breaks with nightlife, culture, and quick escapes.",
    highlights: ["Kingdom of Dreams", "CyberHub", "Damdama Lake"],
  },
  {
    id: "agra",
    city: "Agra",
    state: "Uttar Pradesh",
    image: agraImg,
    primaryPlace: "Taj Mahal",
    description: "The crown jewel of North India�s heritage trail.",
    highlights: ["Taj Mahal", "Agra Fort", "Itimad-ud-Daulah"],
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    image: jaipurImg,
    primaryPlace: "Amber Fort",
    description: "Royal forts and palaces in the heart of the Pink City.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jal Mahal"],
  },
  {
    id: "amritsar",
    city: "Amritsar",
    state: "Punjab",
    image: amritsarImg,
    primaryPlace: "Golden Temple",
    description: "Spiritual serenity and vibrant Punjabi culture.",
    highlights: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
  },
  {
    id: "rishikesh",
    city: "Rishikesh",
    state: "Uttarakhand",
    image: rishikeshImg,
    primaryPlace: "Laxman Jhula",
    description: "Yoga, adventure, and riverfront tranquility.",
    highlights: ["Laxman Jhula", "Triveni Ghat", "River Rafting"],
  },
  {
    id: "varanasi",
    city: "Varanasi",
    state: "Uttar Pradesh",
    image: varanasiImg,
    primaryPlace: "Ganga Ghats",
    description: "Timeless rituals on the ghats of the Ganges.",
    highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath", "Ganga Aarti"],
  },
  {
    id: "shimla",
    city: "Shimla",
    state: "Himachal Pradesh",
    image: shimlaImg,
    primaryPlace: "The Ridge",
    description: "Colonial charm and crisp Himalayan views.",
    highlights: ["The Ridge", "Mall Road", "Jakhu Temple"],
  },
  {
    id: "manali",
    city: "Manali",
    state: "Himachal Pradesh",
    image: manaliImg,
    primaryPlace: "Solang Valley",
    description: "Snowy adventures and mountain escapes.",
    highlights: ["Solang Valley", "Hadimba Temple", "Old Manali"],
  },
  {
    id: "udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    image: udaipurImg,
    primaryPlace: "City Palace",
    description: "Lakeside elegance with royal heritage.",
    highlights: ["City Palace", "Lake Pichola", "Jag Mandir"],
  },
  {
    id: "jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    image: jodhpurImg,
    primaryPlace: "Mehrangarh Fort",
    description: "Blue City grandeur and mighty fortresses.",
    highlights: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower"],
  },
  {
    id: "jaisalmer",
    city: "Jaisalmer",
    state: "Rajasthan",
    image: jaisalmerImg,
    primaryPlace: "Jaisalmer Fort",
    description: "Golden desert landscapes and sandstone marvels.",
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    image: mumbaiImg,
    primaryPlace: "Gateway of India",
    description: "The city of dreams with iconic waterfront heritage.",
    highlights: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
  },
  {
    id: "goa",
    city: "Goa",
    state: "Goa",
    image: goaImg,
    primaryPlace: "Calangute Beach",
    description: "Sun-kissed beaches and Portuguese heritage.",
    highlights: ["Calangute Beach", "Basilica of Bom Jesus", "Fort Aguada"],
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    image: bengaluruImg,
    primaryPlace: "Bengaluru Palace",
    description: "Garden city charm and cosmopolitan energy.",
    highlights: ["Bengaluru Palace", "Lalbagh", "Cubbon Park"],
  },
  {
    id: "mysuru",
    city: "Mysuru",
    state: "Karnataka",
    image: mysuruImg,
    primaryPlace: "Mysore Palace",
    description: "Royal grandeur and illuminated palace evenings.",
    highlights: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    image: hyderabadImg,
    primaryPlace: "Charminar",
    description: "Nizam-era heritage with vibrant bazaars.",
    highlights: ["Charminar", "Golconda Fort", "Hussain Sagar"],
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    image: chennaiImg,
    primaryPlace: "Marina Beach",
    description: "Coastal culture and classical heritage.",
    highlights: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    image: kolkataImg,
    primaryPlace: "Victoria Memorial",
    description: "Colonial elegance and cultural artistry.",
    highlights: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
  },
  {
    id: "darjeeling",
    city: "Darjeeling",
    state: "West Bengal",
    image: darjeelingImg,
    primaryPlace: "Tiger Hill",
    description: "Tea gardens and Himalayan sunrise views.",
    highlights: ["Tiger Hill", "Batasia Loop", "Tea Estates"],
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    image: kochiImg,
    primaryPlace: "Fort Kochi",
    description: "Coastal heritage and artistic vibes.",
    highlights: ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace"],
  },
  {
    id: "alleppey",
    city: "Alappuzha",
    state: "Kerala",
    image: alleppeyImg,
    primaryPlace: "Backwaters",
    description: "Luxury houseboat cruises through lush lagoons.",
    highlights: ["Backwaters", "Alleppey Beach", "Kuttanad"],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    image: ahmedabadImg,
    primaryPlace: "Sabarmati Ashram",
    description: "Heritage precincts and modern riverfront charm.",
    highlights: ["Sabarmati Ashram", "Adalaj Stepwell", "Riverfront"],
  },
  {
    id: "konark",
    city: "Konark",
    state: "Odisha",
    image: konarkImg,
    primaryPlace: "Konark Sun Temple",
    description: "Stone-carved chariot architecture by the sea.",
    highlights: ["Konark Sun Temple", "Chandrabhaga Beach", "Puri"],
  },
];

export default touristCityCards;
