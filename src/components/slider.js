import React, { useState } from "react"
import { Carousel, CarouselItem, CarouselControl, Container } from "reactstrap"
import { Link } from "gatsby"

import MenuErlebnisse from "./menu/menu"
import useWindowSize from "../utils/useWindowsSize"

import Slider1 from "../images/Fahr-Erlebnisse_web.jpeg"
import Slider1Mobile from "../images/bub_mobile.jpg"

import Slider2 from "../images/hofladen_fahr-erlebnis.jpeg"
import Slider2Mobile from "../images/parallax2-mobile.jpg"

import Slider4 from "../images/Landing_Trotte_AD_6512_rgb.jpg"
import Slider4Mobile from "../images/parallax4-mobile.jpg"

import Slider5 from "../images/Gastronomie_fahr-erlebnis.jpeg"
import Slider5Mobile from "../images/parallax5-mobile.jpg"

import Slider6 from "../images/Landing_uberUns_rgb_webs.jpg"
import Slider6Mobile from "../images/parallax6-mobile.jpg"

import Slider7 from "../images/Fahr-erlebnis_erleben.jpeg"
import Slider7Mobile from "../images/parallax7-mobile.jpg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { parseOptions } from "../utils/praseOptions"

const calculateItems = width => {
  return [
    {
      src: width > 768 ? Slider1 : Slider1Mobile,
      name: "aboutText",
      title: "ÜBER UNS",
      link: `/das-team`,
      externalLink: false,
      menuLinkText: "mehr über uns",
      caption: "",
    },
    {
      src: width > 768 ? Slider2 : Slider2Mobile,
      name: "aboutText",
      title: <MenuErlebnisse />,
      withTabs: true,
      caption: "",
    },
    {
      src: width > 768 ? Slider4 : Slider4Mobile,
      name: "gastronomieText",
      title: "GASTRONOMIE",
      link: `/gastronomie`,
      externalLink: false,
      menuLinkText: "",
      caption: "",
    },
    {
      src: width > 768 ? Slider5 : Slider5Mobile,
      name: "hofladenText",
      title: "HOFLADEN",
      link: "https://fahr-hofladen.ch",
      externalLink: true,
      menuLinkText: "zum Hofladen",
      caption: "",
    },
    {
      src: width > 768 ? Slider6 : Slider6Mobile,
      name: "landwirtschaftText",
      title: "LANDWIRTSCHAFT",
      link: "https://fahr-landwirtschaft.ch",
      externalLink: true,
      menuLinkText: "mehr dazu",
      caption: "",
    },
    {
      src: width > 768 ? Slider7 : Slider7Mobile,
      name: "trotteText",
      title: "TROTTE",
      link: "https://fahr-event.ch",
      externalLink: true,
      menuLinkText: "mehr dazu",
      caption: "",
    },
  ]
}

const Slider = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const { width } = useWindowSize()
  const items = calculateItems(width)

  const changedItems = items.map(item => ({
    ...item,
    caption: documentToReactComponents(content[item.name].json, parseOptions),
  }))

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = changedItems.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carouselCont">
          <div className="ImgCont">
            <img
              className="w-100 d-inline-block"
              src={item.src}
              alt={item.altText}
            />
          </div>
          <Container className="">
            {item.withTabs ? (
              <MenuErlebnisse />
            ) : (
              <h2>
                {item.externalLink ? (
                  <a className="titel-link" href={`${item.link}`}>
                    {item.title}
                  </a>
                ) : (
                  <Link className="titel-link" to={`${item.link}`}>
                    {item.title}
                  </Link>
                )}
              </h2>
            )}
            <br />

            {!item.withTabs && item.caption}

            {item.externalLink ? (
              <a className="menu-link" href={`${item.link}`}>
                {item.menuLinkText}
              </a>
            ) : (
              <Link className="menu-link" to={`${item.link}`}>
                {item.menuLinkText}
              </Link>
            )}
          </Container>
        </div>
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default Slider
