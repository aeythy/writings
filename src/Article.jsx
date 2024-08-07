import Img1 from "./assets/img.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import Img4 from "./assets/img4.png";
import Img5 from "./assets/img5.png";
import Img6 from "./assets/img6.png";
import Img7 from "./assets/img7.png";
import Img8 from "./assets/img8.png";
import Img9 from "./assets/img9.png";
import "./App.css";

  const articles = [
    {
      id: 1,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img1,
      detail:
        "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 2,
      article: "Python for the Absolute beginners",
      picture: Img2,
      detail:
        "Python is the most popular programming language out there and it is used for so many different industries.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 3,
      article: "Docker from Zero to Hero",
      picture: Img3,
      detail:
        "Learn what is Docker and  how Docker is used in the whole software development process.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 4,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img4,
      detail:
        "GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 5,
      article: "Build continuous integration",
      picture: Img5,
      detail:
        "provide a really powerful way to integrate.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 6,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img6,
      detail:
        "provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 7,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img7,
      detail:
        "provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 8,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img8,
      detail:
        "provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
    {
      id: 9,
      article: "Build continuous integration pipelines with GitHub Actions",
      picture: Img9,
      detail:
        "provide a really powerful way to integrate continuous integration and delivery into your applications.",
      date: "June 24, 2022",
      position: "DevOps",
    },
  ];


function ArticleBox() {
  return (
    <>
      {articles.map((article) => {
        return (
          <div className="article_box" key={article.id}>
            <div>
              <img src={article.picture} alt="Staging" />
            </div>
            <div className="article_bold">{article.article}</div>
            <div className="mt1_mb2">
              <p>{article.detail}</p>
            </div>
            <ul className="dflex p0 title_list list_style_none margin0">
              <li>{article.date}</li>
              <li className="dot">.</li>
              <li>{article.position}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default function Article() {
  return <ArticleBox />;
}
