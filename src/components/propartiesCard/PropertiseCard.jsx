
import { BathroomSvg, BedroomSvg } from "../svg/Svg"; // Adjust this import according to your SVG file location

// Import images
import image1 from "../../assets/images/properties/bailey-anselme-Bkp3gLygyeA-unsplash.jpg";
import image2 from "../../assets/images/properties/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg";
import image3 from "../../assets/images/properties/dillon-kydd-2keCPb73aQY-unsplash.jpg";
import image4 from "../../assets/images/properties/kenny-eliason-kdwahpWYfQo-unsplash.jpg";
import image5 from "../../assets/images/properties/ronnie-george-z11gbBo13ro-unsplash.jpg";
import image6 from "../../assets/images/properties/zac-gudakov-wwqZ8CM21gg-unsplash.jpg";

const PropertiseCard = () => {
  const rentalProperties = [
    {
      id: 1,
      image: image1,
      amount: "$1,200",
      propertyName: "Modern Apartment",
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 2,
      image: image2,
      amount: "$2,500",
      propertyName: "Charming Family House",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 3,
      image: image3,
      amount: "$3,000",
      propertyName: "Luxury Villa",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: 4,
      image: image4,
      amount: "$900",
      propertyName: "Cozy Studio Apartment",
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: 5,
      image: image5,
      amount: "$1,800",
      propertyName: "Stylish Townhouse",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 6,
      image: image6,
      amount: "$1,500",
      propertyName: "Charming Cottage",
      bedrooms: 2,
      bathrooms: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rentalProperties.map((item) => (
        <div className="p-4 bg-white rounded-lg border border-gray-600/10" key={item.id}>
          <img src={item.image} alt={item.propertyName} className="w-full h-48 object-cover rounded-t-lg" />

          <div className="p-6">
            <h4 className="text-2xl font-bold cursor-pointer">{item.propertyName}</h4>

            <div className="mt-2">
              <span className="text-xl font-extrabold text-blue-600">{item.amount}</span> /M
            </div>
          </div>
          <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
            <div className="flex items-center">
              <BedroomSvg />
              <p>
                <span className="font-bold text-gray-900">{item.bedrooms}</span> Bedrooms
              </p>
            </div>
            <div className="flex items-center">
              <BathroomSvg />
              <p>
                <span className="font-bold text-gray-900">{item.bathrooms}</span> Bathrooms
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiseCard;
