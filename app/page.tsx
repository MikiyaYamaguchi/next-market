import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface item {
  _id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  email: string;
}

export const metadata: Metadata = {
  title: "Next Market",
  description: "Next Market",
};

const getAllItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/item/readall`,
    {
      cache: "no-cache",
    }
  );
  const jsonData = await response.json();
  const allItems = jsonData.allItems;
  return allItems;
};

const ReadAllItems = async () => {
  const allItems = await getAllItems();
  return (
    <div className="grid-container-in">
      {allItems.map((item: item) => (
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <Image
            src={item.image}
            width={750}
            height={500}
            alt={item.title}
            priority
          ></Image>
          <h2>¥{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 80)}...</p>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;
