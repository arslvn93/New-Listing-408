/**
 * Site Configuration
 * This file contains all configurable content for the website
 * Last updated: 2025-11-05T20:28:02.346Z
 */

// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Mateo Jackson",
    photo: "https://app.salesgenius.co/api/user-images/8899f424-d6b4-4366-9603-71b918a979b4?v=676c6a5bb114985af24c1a1666b504f400e9e6d77449ec1f1018ea1ce32c7b10",
    phone: "346345673453",
    email: "mateo@salesgenius.co",
    company: "Real Broker LTD",
    license: "RECO #84397152",
    repo: "New-Listing-408"
  },
  social: {
    instagram: "https://www.instagram.com/caroline112277/",
    facebook: "https://www.facebook.com/carolineleeyourhomesoldguaranteed",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// galleryImages configuration
export const galleryImages = [
  {
    id: 1,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374081484-23-19_513_Pebbl.jpg",
    alt: "Property image 1",
    category: "interior"
  },
  {
    id: 2,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374089251-09-lsm00747-1.jpg",
    alt: "Property image 2",
    category: "kitchen"
  },
  {
    id: 3,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374102445-65-56_513_Pebbl-2.jpg",
    alt: "Property image 3",
    category: "bedroom"
  },
  {
    id: 4,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374115714-64-52_513_Pebbl - VT.jpg",
    alt: "Property image 4",
    category: "bathroom"
  },
  {
    id: 5,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374124771-45-lsm00906-1.jpg",
    alt: "Property image 5",
    category: "exterior"
  },
  {
    id: 6,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374130261-30-lsm00845-1.jpg",
    alt: "Property image 6",
    category: "interior"
  },
  {
    id: 7,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374135320-21-lsm00818.jpg",
    alt: "Property image 7",
    category: "kitchen"
  }
];

// homeShowcaseSections configuration
export const homeShowcaseSections = [
  {
    id: "section1",
    title: "4 Bedrooms",
    description: "Visitors immediately notice how bright and open the home feels. The seamless flow between the living, dining, and family areas makes it perfect for entertaining and comfortable everyday living.",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374081484-23-19_513_Pebbl.jpg"
  },
  {
    id: "section2",
    title: "3 Bathrooms",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374089251-09-lsm00747-1.jpg"
  },
  {
    id: "section3",
    title: "2373 SqFt",
    description: "Spacious living area with ample room for your lifestyle",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374102445-65-56_513_Pebbl-2.jpg"
  },
  {
    id: "section4",
    title: "$$1,250,000",
    description: "The private balcony off the primary suite, perfect for quiet mornings or evening relaxation.",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374115714-64-52_513_Pebbl - VT.jpg"
  }
];

// neighborhood configuration
export const neighborhood = {
  name: "Fairway Village",
  city: "Fullerton",
  description: "Fairway Village places you close to Fullerton’s best outdoor and cultural destinations. The area balances family-friendly green spaces and trails with a revitalized historic downtown that offers restaurants, nightlife and local museums. It’s an ideal location for buyers who want quick access to parks, community events and a lively small-city center.",
  highlights: [
    "Craig Regional Park offers fishing, sports facilities, shaded picnic areas, and well-maintained grounds for outdoor activities.",
    "Fullerton's revitalized historic downtown is a major dining and nightlife hub with diverse restaurants, wine bars, and live music venues.",
    "The Fullerton Museum Center showcases local history and culture, including exhibits on famous guitar maker Leo Fender.",
    "The Redwood Creek Challenge Trail in the Fullerton Arboretum provides a scenic, family-friendly nature walk with play areas, wildlife viewing, and botanical gardens.",
    "Easy access to nearby attractions and regional parks for weekend recreation and family outings."
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "Brea Mall Transit Center",
    distance: "",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Craig Regional Park",
    distance: "",
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Laguna Road School Park",
    distance: "",
    category: "education",
    iconName: "School"
  },
  {
    id: 4,
    name: "T C's Yummies",
    distance: "",
    category: "dining",
    iconName: "Coffee"
  },
  {
    id: 5,
    name: "Cookin' Crab",
    distance: "",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 6,
    name: "Fullerton Station (Amtrak / Transit Station)",
    distance: "",
    category: "transportation",
    iconName: "Car"
  },
  {
    id: 7,
    name: "Fullerton concerts in the park",
    distance: "",
    category: "recreation",
    iconName: "Users"
  },
  {
    id: 8,
    name: "Fullerton Historic Downtown Business District",
    distance: "",
    category: "business",
    iconName: "Wifi"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "38/100",
    caption: "Car-Dependent",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score",
    value: "23/100",
    caption: "Minimal Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "Bike Score",
    value: "14/100",
    caption: "Somewhat Bikeable",
    iconName: "Compass",
    color: "bg-indigo-500"
  }
];

// openHouseBenefits configuration
export const openHouseBenefits = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 4 bedroom, 3 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Fullerton.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information",
    description: "Located within the Fullerton Joint Union High School District and Fullerton School District, known for strong academic programs. Nearby schools include Laguna Road Elementary, Parks Junior High, and Sunny Hills High School (consistently one of the area’s top-rated high schools).",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Wednesday, November 5, 2025",
  time: "2:00 PM - 4:00 PM",
  host: "Mateo Jackson",
  phone: "346345673453",
  email: "mateo@salesgenius.co",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: true,
  virtualTourUrl: "https://listtosoldmedia.com/media/download2.asp?9E0BF1FC27B54F6184DBDBA5B320C10D",
  allOpenHouses: [
    {
      date: "Wednesday, November 5, 2025",
      time: "2:00 PM - 4:00 PM"
    }
  ]
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 4 bedroom, 3 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Fullerton.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information",
    description: "Located within the Fullerton Joint Union High School District and Fullerton School District, known for strong academic programs. Nearby schools include Laguna Road Elementary, Parks Junior High, and Sunny Hills High School (consistently one of the area’s top-rated high schools).",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// property configuration
export const property = {
  name: "513 Pebble Beach Pl",
  address: {
    street: "513 Pebble Beach Pl",
    city: "Fullerton",
    state: "California",
    zip: "92835",
    country: "United States"
  },
  price: "$1,250,000",
  beds: 4,
  baths: 3,
  sqft: 2373,
  lotSize: "30 x 120 ft",
  yearBuilt: 2010,
  type: "Detached",
  status: "For Sale",
  description: "The moment you enter, the soaring vaulted ceilings and wall-to-wall windows create an open, airy atmosphere that instantly impresses. The natural light and sense of space make the home feel grand yet welcoming.",
  shortDescription: "4 BEDS + 3 BATHS in Fullerton",
  longDescription: "Detached home within the prestigious, guard-gated Fairway Village — a rare find in this community.  Spacious 2,373 sq ft layout with 4 bedrooms and 3 bathrooms, including a main-floor bedroom and full bath ideal for guests or multigenerational living.  Vaulted ceilings and expansive windows flooding the home with natural light.  Private backyard retreat featuring a spa jacuzzi with a soothing waterfall and an oversized patio for entertaining.  Access to resort-style amenities: 24-hour security, walking trails, tennis courts, pools, clubhouse, and RV parking.",
  mainFeatures: [],
  propertyType: "Detached",
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374081484-23-19_513_Pebbl.jpg",
  heroCaption: "Vaulted Ceilings + Spa Jacuzzi + Guard-Gated = Your Perfect Family Home Just Listed!"
};

// propertyFeatures configuration
export const propertyFeatures = [
  "The downstairs bedroom and full bath, offering flexibility for guests, in-laws, or a home office.",
  "The private balcony off the primary suite, perfect for quiet mornings or evening relaxation.",
  "The strategic pricing and light renovation potential, offering an opportunity to personalize a premium home in a prestigious neighborhood.",
  "Unlike most homes in Fairway Village, this one is fully detached, offering exceptional privacy and independence. It combines the security and amenities of a gated community with the feel of a single-family residence a highly sought-after but seldom-available combination."
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "513 Pebble Beach Pl",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839",
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374081484-23-19_513_Pebbl.jpg",
  footer: {
    copyrightText: "© 2024 513 Pebble Beach Pl. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "513 Pebble Beach Pl | Detached | Fullerton",
  description: "Vaulted Ceilings + Spa Jacuzzi + Guard-Gated = Your Perfect Family Home Just Listed!",
  keywords: "detached, Fullerton real estate, 4 bedroom, 3 bathroom, $1,250,000",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374081484-23-19_513_Pebbl.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://513pebblebeachpl.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Recent Homebuyer",
    content: "Mateo Jackson provided exceptional service and found us exactly what we were looking for in Fullerton.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Interior Designer",
    content: "The attention to detail and quality of finishes in this property is outstanding. Mateo Jackson presented every detail clearly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mark Williams",
    role: "Neighborhood Resident",
    content: "Living in this area, you appreciate the convenience and lifestyle. Mateo Jackson knows the market incredibly well.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];

