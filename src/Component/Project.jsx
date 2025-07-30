import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useRef, useEffect } from "react";
import { ProjectList } from "../db/projectdb";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const mainTheme = useContext(ThemeContext);
  const boxRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip heavy animation on small devices

    const cards = boxRef.current.querySelectorAll(".project-card");

    cards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        y: 30,
        scale: 0.98,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "ease-in-out",
        delay: index * 0.1,
      });

      const image = card.querySelector("img");
      gsap.to(image, {
        y: -20,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const contentElements = card.querySelectorAll(
        ".project-title, .project-description, .project-tech-stack, .project-github-link, .project-deployed-link"
      );

      gsap.from(contentElements, {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.1,
        ease: "ease-in-out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "15px", sm: "20px", md: "40px" }}
      id="projects"
      minH="100vh"
    >
      <Box
        w="80%"
        margin="auto"
        borderTop="2px solid #00796B"
        opacity={0}
        ref={(el) => {
          if (el) {
            gsap.fromTo(
              el,
              { width: "0%", opacity: 0 },
              {
                width: "80%",
                opacity: 1,
                duration: 0.8,
                ease: "ease-in-out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                },
              }
            );
          }
        }}
      />
      <Box m="auto" textAlign="center">
        <Box pt="50px">
          <Heading
            color="#00796B"
            size={{ base: "lg", md: "xl" }}
            opacity={0}
            ref={(el) => {
              if (el) {
                gsap.fromTo(
                  el,
                  { y: 20, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "ease-in-out",
                    scrollTrigger: {
                      trigger: el,
                      start: "top 90%",
                    },
                  }
                );
              }
            }}
          >
            PROJECTS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={{ base: "15px", md: "20px 30px" }}
          mt="40px"
          ref={boxRef}
        >
          {ProjectList?.map((project) => {
            return (
              <Box
                key={project.heading}
                p={{ base: "12px", md: "18px" }}
                textAlign="left"
                className="project-card"
                boxShadow="0 2px 6px rgba(99, 99, 99, 0.2)"
                borderRadius="10px"
                bg={mainTheme.theme.cardBg || mainTheme.theme.bg}
                transition="all 0.3s ease-in-out"
                _hover={{
                  background: mainTheme.theme.hover,
                  transform: "translateY(-4px)",
                }}
                overflow="hidden"
              >
                <Box>
                  <Heading
                    p={{ base: "8px 0", md: "12px 0" }}
                    size={{ base: "sm", md: "md" }}
                    color="#00796B"
                    className="project-title"
                  >
                    {project.heading}
                  </Heading>
                </Box>
                <Box
                  pb="15px"
                  w="70%"
                  borderTop="2px solid #00796B"
                  mx="auto"
                />
                <Box w="100%" overflow="hidden" borderRadius="6px">
                  <Link to={project.liveLink} target="_blank">
                    <Box
                      overflow="hidden"
                      _hover={{ transform: "scale(1.03)" }}
                      transition="transform 0.3s ease-in-out"
                    >
                      <Image
                        loading="lazy"
                        width="100%"
                        height="150px"
                        objectFit="cover"
                        borderRadius="6px"
                        src={`${process.env.PUBLIC_URL}/images/${project.images}`}
                        alt={project.heading}
                      />
                    </Box>
                  </Link>
                </Box>
                <Box p={{ base: "8px 0", md: "12px 0" }}>
                  <Text
                    fontWeight="semibold"
                    m="6px 0"
                    color="#00796B"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {project.title}
                  </Text>
                  <Box
                    w="60%"
                    borderTop="2px solid #00796B"
                    mx="auto"
                  />
                  <Text
                    color={mainTheme.theme.dText}
                    className="project-description"
                    fontSize={{ base: "xs", md: "sm" }}
                    mt="8px"
                  >
                    {project.description}
                  </Text>
                </Box>
                <Box className="project-tech-stack">
                  <Heading
                    size={{ base: "xs", md: "sm" }}
                    color="#00796B"
                    mb="6px"
                  >
                    Tech Stack
                  </Heading>
                  <Box
                    w="60%"
                    borderTop="2px solid #00796B"
                    mx="auto"
                  />
                  <Grid
                    p={{ base: "8px 0", md: "12px 0" }}
                    gap="10px"
                    templateColumns={{
                      base: "repeat(3,1fr)",
                      sm: "repeat(4,1fr)",
                      md: "repeat(4,1fr)",
                      lg: "repeat(5,1fr)",
                    }}
                    textAlign="center"
                  >
                    {project.techStack?.map((tech) => (
                      <Box key={tech.title}>
                        <Flex
                          justifyContent="center"
                          alignItems="center"
                          p="3px"
                        >
                          {(tech?.title === "Express" ||
                            tech?.title === "Next.js") &&
                          (mainTheme?.theme.bg === "black" ||
                            mainTheme?.theme.bg === "#08105B") ? (
                            tech?.svg({ size: "2rem", color: "#757575" })
                          ) : (
                            <Image
                              src={tech.img}
                              alt={tech.title}
                              width={tech.wid || "30px"}
                              maxW="30px"
                              transition="transform 0.3s ease-in-out"
                              className="tech-icon"
                              loading="lazy"
                            />
                          )}
                        </Flex>
                      </Box>
                    ))}
                  </Grid>
                </Box>
                <Box m={{ base: "12px 0", md: "16px 0" }} zIndex={1}>
                  <Flex
                    justify="space-between"
                    gap={{ base: "8px", md: "12px" }}
                    flexWrap="wrap"
                    alignItems="center"
                  >
                    {project.gitLink && (
                      <Box flex="1" minW="100px">
                        <a
                          target="_blank"
                          href={project.gitLink}
                          rel="noopener noreferrer"
                        >
                          <Button
                            className="project-github-link"
                            bg="#00796B"
                            color={
                              mainTheme.theme.cardBg || mainTheme.theme.bg
                            }
                            border="2px solid #00796B"
                            borderRadius="8px"
                            px={{ base: "16px", md: "24px" }}
                            py={{ base: "8px", md: "12px" }}
                            fontSize={{ base: "sm", md: "md" }}
                            w="100%"
                            _hover={{
                              bg:
                                mainTheme.theme.cardBg || mainTheme.theme.bg,
                              color: "#00796B",
                              transform: "translateY(-3px)",
                              boxShadow:
                                "0 6px 12px rgba(0, 121, 107, 0.3)",
                            }}
                            transition="all 0.3s ease-in-out"
                          >
                            GitHub
                          </Button>
                        </a>
                      </Box>
                    )}
                    {project.sourceLink && (
                      <Box flex="1" minW="100px">
                        <a
                          target="_blank"
                          href={project.sourceLink}
                          rel="noopener noreferrer"
                        >
                          <Button
                            className="project-github-link"
                            bg="#00796B"
                            color={
                              mainTheme.theme.cardBg || mainTheme.theme.bg
                            }
                            border="2px solid #00796B"
                            borderRadius="8px"
                            px={{ base: "16px", md: "24px" }}
                            py={{ base: "8px", md: "12px" }}
                            fontSize={{ base: "sm", md: "md" }}
                            w="100%"
                            _hover={{
                              bg:
                                mainTheme.theme.cardBg || mainTheme.theme.bg,
                              color: "#00796B",
                              transform: "translateY(-3px)",
                              boxShadow:
                                "0 6px 12px rgba(0, 121, 107, 0.3)",
                            }}
                            transition="all 0.3s ease-in-out"
                          >
                            Source
                          </Button>
                        </a>
                      </Box>
                    )}
                    <Box flex="1" minW="100px">
                      <a
                        target="_blank"
                        href={project.liveLink}
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="project-deployed-link"
                          bg="#26A69A"
                          color={
                            mainTheme.theme.cardBg || mainTheme.theme.bg
                          }
                          border="2px solid #26A69A"
                          borderRadius="8px"
                          px={{ base: "16px", md: "24px" }}
                          py={{ base: "8px", md: "12px" }}
                          fontSize={{ base: "sm", md: "md" }}
                          w="100%"
                          _hover={{
                            bg:
                              mainTheme.theme.cardBg || mainTheme.theme.bg,
                            color: "#26A69A",
                            transform: "translateY(-3px)",
                            boxShadow:
                              "0 6px 12px rgba(38, 166, 154, 0.3)",
                          }}
                          transition="all 0.3s ease-in-out"
                        >
                          Live Demo
                        </Button>
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
