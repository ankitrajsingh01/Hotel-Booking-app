import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";

import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";

import roomImg5 from "./roomImg5.png";
import roomImg6 from "./roomImg6.png";
import roomImg7 from "./roomImg7.png";
import roomImg8 from "./roomImg8.png";

import roomImg9 from "./roomImg9.png";
import roomImg10 from "./roomImg10.png";
import roomImg11 from "./roomImg11.png";
import roomImg12 from "./roomImg12.png";

import roomImg13 from "./roomImg13.png";
import roomImg14 from "./roomImg14.png";
import roomImg15 from "./roomImg15.png";
import roomImg16 from "./roomImg16.png";

import roomImg17 from "./roomImg17.png";
import roomImg18 from "./roomImg18.png";
import roomImg19 from "./roomImg19.png";
import roomImg20 from "./roomImg20.png";

import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = ["Delhi", "Mumbai", "Bangalore", "Jaipur"];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Ankit",
  email: "user.stynxt@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["Mumbai"],
};

// Hotel Dummy Data
export const hotelDummyData = [
  {
    _id: "67f76393197ac559e4089b72",
    name: "Lemon Tree Premier",
    address: " Andheri East, Mumbai",
    contact: "+0123456789",
    owner: userDummyData,
    city: "Mumbai",
    rating: "4.5",
    reviews: "1.5k+",
    createdAt: "2025-04-10T06:22:11.663Z",
    updatedAt: "2025-04-10T06:22:11.663Z",
    __v: 0,
  },
  {
    _id: "67f76393197ac559e4089b73",
    name: "The Oberoi Udaivilas",
    address: "HMGC+VVV, Badi-Gorela-Mulla Talai Rd",
    contact: "+12345678901",
    owner: userDummyData,
    city: "Udaipur",
    rating: "4.6",
    reviews: "2k+",
    createdAt: "2025-04-12T08:14:22.113Z",
    updatedAt: "2025-04-12T08:14:22.113Z",
    __v: 0,
  },
  {
    _id: "67f76393197ac559e4089b75",
    name: "Hyatt Regency",
    address: "JA-1, Sector III, Salt Lake City",
    contact: "+918888888888",
    owner: userDummyData,
    city: "Kolkata",
    rating: "4.8",
    reviews: "3k+",
    createdAt: "2025-04-18T14:30:00.000Z",
    updatedAt: "2025-04-18T14:30:00.000Z",
    __v: 0,
  },
  {
    _id: "67f76393197ac559e4089b76",
    name: "Taj Mahal Palace",
    address: "Apollo Bunder, Colaba",
    contact: "+912266653366",
    owner: userDummyData,
    city: "Mumbai",
    rating: "4.9",
    reviews: "5k+",
    createdAt: "2025-04-20T09:15:33.450Z",
    updatedAt: "2025-04-20T09:15:33.450Z",
    __v: 0,
  },
  {
    _id: "67f76393197ac559e4089b77",
    name: "Novotel",
    address: "Opp. RMZ Ecospace Business Park, Outer Ring Road",
    contact: "+918044556677",
    owner: userDummyData,
    city: "Bengaluru",
    rating: "4.6",
    reviews: "2.8k+",
    createdAt: "2025-04-28T10:40:10.200Z",
    updatedAt: "2025-04-28T10:40:10.200Z",
    __v: 0,
  },
];

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData[0],
    roomType: "Double Bed",
    pricePerNight: 4999,
    amenities: ["Room Service", "Mountain View", "Pool Access", "Free WiFi"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData[1],
    roomType: "Double Bed",
    pricePerNight: 8749,
    amenities: ["Room Service", "Mountain View", "Pool Access", "Free WiFi"],
    images: [roomImg5, roomImg6, roomImg7, roomImg8],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData[2],
    roomType: "Double Bed",
    pricePerNight: 9849,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Pool Access"],
    images: [roomImg9, roomImg10, roomImg11, roomImg12],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData[3],
    roomType: "Single Bed",
    pricePerNight: 9999,
    amenities: ["Free WiFi", "Room Service", "Pool Access", "Free Breakfast"],
    images: [roomImg13, roomImg14, roomImg15, roomImg16],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
  {
    _id: "67f7647c197ac559e4089b98",
    hotel: hotelDummyData[4],
    roomType: "Double Bed",
    pricePerNight: 8799,
    amenities: ["Room Service", "Mountain View", "Pool Access", "Free WiFi"],
    images: [roomImg17, roomImg18, roomImg19, roomImg20],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData[0],
    checkInDate: "2026-06-30T00:00:00.000Z",
    checkOutDate: "2026-07-01T00:00:00.000Z",
    totalPrice: 4999,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2026-04-10T06:42:01.529Z",
    updatedAt: "2026-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData[1],
    checkInDate: "2026-05-27T00:00:00.000Z",
    checkOutDate: "2026-05-30T00:00:00.000Z",
    totalPrice: 5399,
    guests: 2,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2026-06-12T06:41:45.873Z",
    updatedAt: "2026-06-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[2],
    hotel: hotelDummyData[2],
    checkInDate: "2026-04-11T00:00:00.000Z",
    checkOutDate: "2026-04-12T00:00:00.000Z",
    totalPrice: 6199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2026-04-10T06:41:20.501Z",
    updatedAt: "2026-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 16597,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
