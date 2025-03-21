import Image from "next/image";
import Link from "next/link";

const getSingleItem = async (id: string) => {
  const response = await fetch(
    `http://localhost:3001/api/item/readsingle/${id}`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  const singleItem = jsonData.singleItem;
  return singleItem;
};

const ReadSingleItem = async (context: { params: Promise<{ id: string }> }) => {
  const { id } = await context.params;
  const singleItem = await getSingleItem(id);
  return (
    <div>
      <div>
        <Image
          src={singleItem.image}
          width={750}
          height={500}
          alt={singleItem.title}
          priority
        />
        <div>
          <h1>{singleItem.title}</h1>
          <h2>¥{singleItem.price}</h2>
          <hr />
          <p>{singleItem.description}</p>
          <div>
            <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
            <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;
