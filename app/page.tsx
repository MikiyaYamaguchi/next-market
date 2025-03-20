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

const getAllItems = async () => {
  const response = await fetch("http://localhost:3001/api/item/readall", {
    cache: "no-cache",
  });
  const jsonData = await response.json();
  const allItems = jsonData.allItems;
  return allItems;
};

const ReadAllItems = async () => {
  const allItems = await getAllItems();
  return (
    <div>
      <h1 className="h1-style">こんにちは</h1>
      {allItems.map((item: item) => (
        <Link href="" key={item._id}>
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
