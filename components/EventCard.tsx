// components/Card.js
import Image from "next/image";
import Link from "next/link";

interface PropType {
  name: string;
  date: string;
  img: string;
  link: string;
  data: string;
}

const EventCard = ({ name, date, img, link, data }: PropType) => {
  return (
    <div className="w-80 m-auto text-center">
      <div className="overflow-hidden shadow-xl rounded-xl h-[350px] border-red-500 border-[1px] border-opacity-10">
        {link ? (
          <Link
            href={{
              pathname: link,
              query: {
                name: name,
                date: date,
                img: img,
                data: data,
              },
            }}
            passHref
            className="block cursor-pointer transition-all hover:bg-red-500"
          >
            {" "}
            <img
              className={`inline-block object-cover h-[350px] w-[100%] hover:opacity-90 transition-all`}
              src={img || "/pastEvents/emptyevent.jpeg"}
              alt={name}
            />
          </Link>
        ) : (
          <div className="overflow-hidden shadow-xl rounded-xl h-[350px]">
            <img
              className={`inline-block object-cover h-[350px] w-[100%] transition-all`}
              src={img || "/pastEvents/emptyevent.jpeg"}
              alt={name}
            />
          </div>
        )}
      </div>
      <dd className="mt-4 regular-20 leading-6 font-medium text-gray-900">
        {name}
      </dd>
    </div>
  );
};

export default EventCard;
