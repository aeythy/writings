import Article from './Article'
import ProjectLogo from './assets/Logo.png'
import GridIcon from "./assets/Grid Icon.png";
import ListIcon from "./assets/List Icon.png";
import Vector from './assets/Vector.png';
import './App.css'

function App() {
  return (
    <>
      <div className="page_container">
        {/* HEADER  */}
        <div className="page">
          <div className="dflex-space-between">
            <div className="title">writings.dev</div>
            <ul className="dflex title_list list_style_none m0">
              <li>categories</li>
              <li>articles</li>
              <li>about</li>
            </ul>
          </div>
          <div className="dflex-center margin_top_50">
            <div className="page_header_logo text_center">
              <img src={ProjectLogo} alt="Project Logo" />
              <p className="base_color">Writings for Developers</p>
              <p>Curated collection of articles for busy developers</p>
            </div>
          </div>
        </div>
      </div>
      {/* CATEGORIES  */}
      <div className="line_top">
        <div className="categories_container">
          <ul className="dflex title_list list_style_none m0">
            <li>
              <img src={GridIcon} className="grid_icon" alt="Grid Icon" />
              <img src={ListIcon} className="grid_icon" alt="List Icon" />
            </li>
            <li>JavaScript</li>
            <li>DevOps</li>
            <li>Cloud</li>
            <li>Terraform</li>
            <li>Architecture</li>
            <li>Scalability</li>
            <li>Explainers</li>
          </ul>
        </div>
      </div>
      {/* ARTICLES LISTING  */}
      <div className="page_container">
        <div className="page">
          <div className="article_grid">
            <Article />
          </div>
        </div>
      </div>
      {/* PAGNIGATION */}
      <div className="page_container">
        <div className="page">
          <div className="pagnigation">
            <button className="article_button">Previous</button>
            <ul>
              <li>1</li>
              <li className="is_active">2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <button className="article_button">Next</button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="line_top">
        <div className="page_container">
          <div className="page">
            <div className="dflex-space-between">
              <div className="footer">
                <div className="footer_title">writings.dev</div>
                <a href="https://github.com/aeythy">
                  <button className="footer_button">by @aeythy</button>
                </a>
              </div>
              <div className="footer">
                <a href="https://github.com/aeythy">
                  <button className="footer_button">
                    <img src={Vector} alt="Folllow" />
                    Follow @aeythy
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
