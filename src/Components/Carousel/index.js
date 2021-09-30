import React from "react";
import { Carousel } from "react-bootstrap";
import ProgressiveImage from "react-progressive-image";
import Illustration from "../../Assets/Images/illustration.svg";
import "./style.css";

export default function CarouselContainer() {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <ProgressiveImage src={Illustration} placeholder={Illustration}>
          {(src, loading) => (
            <img
              style={{
                opacity: loading ? 0.5 : 1,
                width: "100%",
                height: "auto"
              }}
              src={src}
              alt=""
            />
          )}
        </ProgressiveImage>
        <Carousel.Caption>
          <h3>Trade Globally</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ProgressiveImage src={Illustration} placeholder={Illustration}>
          {(src, loading) => (
            <img
              style={{
                opacity: loading ? 0.5 : 1,
                width: "100%",
                height: "auto"
              }}
              src={src}
              alt=""
            />
          )}
        </ProgressiveImage>

        <Carousel.Caption>
          <h3>Trade Globally</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ProgressiveImage src={Illustration} placeholder={Illustration}>
          {(src, loading) => (
            <img
              style={{
                opacity: loading ? 0.5 : 1,
                width: "100%",
                height: "auto"
              }}
              src={src}
              alt=""
            />
          )}
        </ProgressiveImage>

        <Carousel.Caption>
          <h3>Trade Globally</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
