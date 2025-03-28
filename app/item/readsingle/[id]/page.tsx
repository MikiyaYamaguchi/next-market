import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`,
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  const singleItem = jsonData.singleItem;
  return {
    title: singleItem.title,
    description: singleItem.description,
  };
}

const getSingleItem = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`,
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
    <div className="grid-container-si">
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
