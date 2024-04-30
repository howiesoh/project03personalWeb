import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const PAGE1_CONTENT = `您好，我叫何曜宇，本人目前正值青壯年，個性開朗樂觀，且對各式網頁視覺效果有著濃厚興趣，也有著使命必達的認真，這是我的個人網站，你可以從這邊了解到關於我的不同資訊喔。`;

export const ABOUT_TEXT = `畢業後就職於PetPoint國際股份有限公司，職位為遊戲特效美術，主要負責遊戲的畫面效果美化，同時也會協助處理企劃發想及整理、與跨國的工程師部門溝通、也負責遊戲引擎的使用，具有邏輯思考及資料彙整的能力，也善於與同事合作。

大學時研修過基礎的C#課程，就業後對網頁特效及網頁視覺效果產生興趣，自主學習JavaScript，自行製作簡易的網站。`;

export const EXPERIENCES = [
  {
    year: "2022 ~ 2024",
    role: "遊戲特效美術",
    company: "佩博亞洲國際股份有限公司",
    description: `製作數款手機網頁遊戲，負責其中粒子特效美術以及2D動畫美術部分，也負責與工程師協調溝通，並使用stable diffusion製作美術素材以及概念圖。`,
    technologies: ["Unity3D", "Spine2D", "AfterEffect", "cocosCreater2D"],
  },
];

export const PROJECTS = [
  {
    title: "餐廳網站樣式",
    href: "https://howiesoh.github.io/project01restaurant/",
    image: project1,
    description: "日本料理餐廳官方網站樣式，也具備RWD設計。",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "圖庫搜索網站",
    href: "https://howiesoh.github.io/project02pictureSearch/",
    image: project2,
    description: "連接圖庫API，可以自由使用關鍵字搜索圖片的網站。",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "台灣 台北市 內湖區 ",
  phoneNo: "+886 963 719 638 ",
  email: "howie12323@gmail.com",
};
