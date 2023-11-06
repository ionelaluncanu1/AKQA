"use client";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import imageSlide1 from "../assets/images/slide1.png";
import imageSlide2 from "../assets/images/slide2.png";
const Slider = () => {
  return (
    <Carousel
      className="bg-blue-600 rounded-2xl mx-auto"
      pause="hover"
      controls={false}
      variant="dark"
      indicatorLabels={["slide", "slide", "slide", "slide"]}
      touch={true}
    >
      <Carousel.Item>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <section className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] sm:mr-28 lg:mr-0 xl:mr-16 "></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-4xl font-semibold text-gray-900 sm:text-4xl mb-4">
                      <h1>Everyday hands-free.</h1>
                    </blockquote>
                    <p className="max-w-2xl mx-auto">
                      Modern & sleek styles to carry your essentials while on
                      the go.
                    </p>
                    <div className="mt-8">
                      <Button
                        variant="dark"
                        size="lg"
                        className="bg-black text-white rounded-full mr-4"
                      >
                        Shop Collection
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                        className="rounded-full"
                      >
                        All Leather Goods
                      </Button>
                    </div>
                  </figure>
                </div>
              </section>
            </Col>
            <Col xs={12} md={6} lg={6} className="p-6 lg:px-8 rounded-2xl">
              <Image src={imageSlide1} alt="" className="rounded-2xl" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <section className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] sm:mr-28 lg:mr-0 xl:mr-16 "></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-4xl font-semibold text-gray-900 sm:text-4xl mb-4">
                      <h1>Movement is everything.</h1>
                    </blockquote>
                    <p className="max-w-2xl mx-auto">
                      The ECCO Ceramic Bento Pack and Crossbody introduce new
                      ways of wearing for an active hands-free life.
                      #ToolsToLiveFreely
                    </p>
                    <div className="mt-8">
                      <Button
                        variant="dark"
                        size="lg"
                        className="bg-black text-white rounded-full mr-4"
                      >
                        Shop Collection
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                        className="rounded-full"
                      >
                        All Leather Goods
                      </Button>
                    </div>
                  </figure>
                </div>
              </section>
            </Col>
            <Col xs={12} md={6} lg={6} className="p-6 lg:px-8 rounded-2xl">
              <Image
                src={imageSlide2}
                alt=""
                height={506}
                className="rounded-2xl"
              />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <section className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] sm:mr-28 lg:mr-0 xl:mr-16 "></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-4xl font-semibold text-gray-900 sm:text-4xl mb-4">
                      <h1>Everyday hands-free.</h1>
                    </blockquote>
                    <p className="max-w-2xl mx-auto">
                      Modern & sleek styles to carry your essentials while on
                      the go.
                    </p>
                    <div className="mt-8">
                      <Button
                        variant="dark"
                        size="lg"
                        className="bg-black text-white rounded-full mr-4"
                      >
                        Shop Collection
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                        className="rounded-full"
                      >
                        All Leather Goods
                      </Button>
                    </div>
                  </figure>
                </div>
              </section>
            </Col>
            <Col xs={12} md={6} lg={6} className="p-6 lg:px-8 rounded-2xl">
              <Image src={imageSlide1} alt="" className="rounded-2xl" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <section className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
                <div className="absolute inset-0 -z-10 opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] sm:mr-28 lg:mr-0 xl:mr-16 "></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-4xl font-semibold text-gray-900 sm:text-4xl mb-4">
                      <h1>Movement is everything.</h1>
                    </blockquote>
                    <p className="max-w-2xl mx-auto">
                      The ECCO Ceramic Bento Pack and Crossbody introduce new
                      ways of wearing for an active hands-free life.
                      #ToolsToLiveFreely
                    </p>
                    <div className="mt-8">
                      <Button
                        variant="dark"
                        size="lg"
                        className="bg-black text-white rounded-full mr-4"
                      >
                        Shop Collection
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                        className="rounded-full"
                      >
                        All Leather Goods
                      </Button>
                    </div>
                  </figure>
                </div>
              </section>
            </Col>
            <Col xs={12} md={6} lg={6} className="p-6 lg:px-8 rounded-2xl">
              <Image src={imageSlide2} alt="" className="rounded-2xl" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
