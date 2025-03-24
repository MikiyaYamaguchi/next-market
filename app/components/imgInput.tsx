import { useState } from "react";

// Props の型定義: setImage useStateの第二引数を渡す
interface ImgInputProps {
  setImage: React.Dispatch<React.SetStateAction<string>>; // setImage は画像パスを更新する関数
}

const ImgInput = (props: ImgInputProps) => {
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const handleClick = async () => {
    if (!imageFile) {
      alert("画像が選択されていません");
      return;
    }
    try {
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dclpkekdr");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dclpkekdr/image/upload",
        { method: "POST", body: data }
      );
      const jsonData = await response.json();
      await props.setImage(jsonData.url);
      alert("画像アップロード成功");
    } catch {
      alert("画像アップロード失敗");
    }
  };
  return (
    <div className="img-input">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setImageFile(file);
          }
        }}
        accept="image/png, image/jpg"
      />
      <button onClick={handleClick} disabled={!imageFile}>
        画像アップロード
      </button>
    </div>
  );
};

export default ImgInput;
