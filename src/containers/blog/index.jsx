import React from "react";
import styled from "styled-components";
// import renderHTML from 'react-render-html';
import Navbar from "../../components/Nav/Navbar";
import { Footer } from "../../components/footer";
import '../../containers/blog/blog.css';
import { Marginer } from "../../components/marginer";
import { Particle } from "../../components/particles";
// var AnimateReorder = require('react-animate-reorder');
// import FlipMove from 'react-flip-move';
// var StaggeredAnimation = require("react-staggered-animation");
// var ReactCSSTransitionGroup = require('react-transition-group');
import { Animate, AnimateGroup } from 'react-simple-animate';
import { Fade, Stagger } from 'react-animation-components'
import { Row } from "reactstrap";

const imgs = [
  { id: 1, author: "Daria Shevtsova", tag: "Software", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 2, author: "Kasuma", tag: "Software", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 3, author: "Dominika Roseclay", tag: "Design", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 4, author: "Scott Webb", tag: "Design", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 5, author: "Jeffrey Czum", tag: "Electronics", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 6, author: "Dominika Roseclay", tag: "General", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." },
  { id: 7, author: "Valeria Boltneva", tag: "Electronics", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true", summary: "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore." }
];

export const OurBlogTitle1 = styled.h1`
font-family: 'Rubik', sans-serif;
    color: #460c5e;
    font-size: 55px;
    font-weight: bold;
    display: inline-block;

    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;
export const OurBlogTitle2 = styled.h1`
font-family: 'Rubik', sans-serif;
    color: #DD038F;
    font-size: 55px;
    font-weight: bold;
    display: inline-block;
    @media screen and (max-width: 480px) {
        text-align: center;
    }
`;



const filters = [
  { name: "General", status: false },
  { name: "Electronics", status: false },
  { name: "Software", status: false },
  { name: "Design", status: false },
];


const Filters = ({ onClickAll, all, onClick, filters }) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All</label>
      </li>
      {filters.map(
        (filter, i) =>
          <li key={i} data-index={i} onClick={onClick} >
            <input className="filterBox"
              id={filter.name}
              type="checkbox"
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({ imgs, preImgs }) => {
  return (
    <ul >
      <Stagger in className="blogList" delay={50} chunk={300}>
        {imgs.map(
          (img, i) =>
            <Fade>
              <li key={i}>
                <a href="https://www.facebook.com/hexodelabs">
                  <figure>
                    <img className="blog" src={img.src} alt={img.author} />
                    <figcaption>
                      <div>{img.author} </div>
                      <span>{img.tag}</span>
                      <div className="Description">{img.summary}</div>
                    </figcaption>
                  </figure>
                </a>
              </li>
            </Fade>
        )}
      </Stagger>
    </ul>
  )
}
const PageContainer = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: auto;
  padding: 0;
  overflow:hidden;
  `;

class BlogPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      imgs,
      preImgs: [],
      filters,
      all: true
    };
  }

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });

    this.updateFilters();
    this.setState({
      imgs: []
    });
    setTimeout(() => { this.updateImgs() }, 500);
    // this.updateImgs() 
  }

  setAll = () => {
    const { filters } = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }

  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if ((img.tag == filter.name) && (filter.status == true)) {
          newImgs[a] = img;
          a++;
        }
      })
    });
    this.setState({
      imgs: newImgs
    });
  }


  render() {
    const { filters, all } = this.state;

    return (
      <PageContainer>
        {/* <Particle blog className="particles"/> */}
        <Navbar beginColorBlack />
        <Marginer direction="vertical" margin="8em" />
        <OurBlogTitle1>Our <span><OurBlogTitle2>Blog</OurBlogTitle2></span></OurBlogTitle1>
        <Marginer direction="vertical" margin="2em" />
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />

        {(all) ? (
          <Cards imgs={imgs} />
        ) : (
            <Cards imgs={this.state.imgs} />
          )}

        <Marginer direction="vertical" margin="8em" />
        <Footer />
      </PageContainer>

    );

  }
}

export default BlogPage;