import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { ProjectCard } from "../components/Projectscard";
import giftCards from "../assets/images/Premiumgiftcard.png";
import experienceHub from "../assets/images/experiancehub.png";
import zkpoker from "../assets/images/z1Zk.jpg";

export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  role: string;
  additionalROleAndResp?: string;
  detailedDescription: string;
  technologiesUsed: string;
}

export const ProjectScreen = () => {
  const [project, setProject] = useState<Project | {}>({});
  const [open, setOpen] = useState(false);

  const hanleopen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Section = styled("section")({
    height: "100vh",
    width: "100%",
    overflowY: "auto",
  });

  const projectData: Project[] = [
    {
      id: 1,
      img: giftCards,
      title: "Gift Cards",
      description:
        "Gift cards are a way to use premimum features in QuickCam app",
      role: "Gift Cards Implementation: My involvement in the project extended to the meticulous implementation of the Gift Cards feature. This innovative component became the cornerstone of ProManager's QuickCam, offering subscribers enticing rewards at different achievement levels. Through the amalgamation of in-house React.js components and the Tamagui library, I ensured a seamless and feature-rich experience.The Gift Cards concept was carefully curated to provide users with a gamut of options. Leveraging React Native, I crafted diverse gift card choices, fostering a sense of personalization. This extended to the development of a user-friendly interface, simplifying both the purchase and redemption processes.",
      additionalROleAndResp:
        "Infinity Bonus and API Development: My role expanded further as I took the lead in developing the Infinity Bonus program. This reward initiative, seamlessly integrated into ProManager, enticed users with monthly gift cards upon subscribing to any plan. To support this, I utilized Nest.js to develop a robust API, ensuring efficient communication between the front-end and back-end components.In summary, my contributions to QuickCam go beyond crafting a visually appealing interface. I strategically led the development of critical components, particularly the Gift Cards feature, infusing innovation and user-centricity into the heart of ProManager's QuickCam.",
      technologiesUsed: "Html,CSS, React.Js, Zustand,Next.Js,ReactNative,",
      detailedDescription:
        "ProManager's Quick Cam, a dynamic mobile application, transcends conventional multimedia experiences. Users engage with the app's versatile features, capturing short video clips, expressive bitmojis, and captivating snaps. A standout feature within this creative realm is the Gift Cards functionality, a transformative addition that redefines user engagement and subscription benefits.",
    },
    {
      id: 2,
      title: "Zk Poker",
      img: zkpoker,
      description: "ZKpoker is a poker game based on Texas Holdem Model.",
      role: "In my role as a UI developer for the ZkPoker project, I spearheaded the development of an immersive and responsive interface using React and React Native technologies. My focus on user-centric design ensured a seamless and intuitive experience, with a keen emphasis on making navigation and gameplay effortless for players. Through the integration of diverse React components, I enhanced the game's functionality and visual appeal, optimizing it for both web and mobile platforms. Collaborating closely with the design team, I translated their vision into a captivating UI, aligning with the overall gaming experience. Additionally, my commitment to quality assurance involved rigorous testing, identifying, and resolving issues to deliver a polished and error-free user interface.",
      technologiesUsed:
        "Html, CSS, JavaScript,React.Js,Zustand,Next.Js,ReactNative",
      detailedDescription:
        "ZkPoker stands as a testament to immersive gaming experiences, offering a poker game grounded in the Texas Holdem model. As a UI developer on this project, my focus was on elevating the visual and interactive elements, ensuring players engage seamlessly with the game's intricacies.",
    },
    {
      id: 3,
      title: "ExperienceHub-Ai",
      img: experienceHub,
      description:
        "A platform for direct interaction with selected AI models.        ",
      role: "ExperienceHub.AI stands as a testament to my role as a Front-End Developer, where I played a pivotal part in the development of its versatile platform. This innovative project offers a diverse array of models crafted to enhance various user experiences. Leveraging my expertise in front-end technologies such as HTML, CSS, JavaScript, React.js, and Redux, I contributed to shaping the user interface of ExperienceHub.AI. As a Front-End Developer, my responsibilities included translating design concepts into interactive and visually appealing interfaces. I collaborated closely with the team to ensure seamless integration of different models with distinct topologies, providing flexibility and efficiency for a myriad of use cases. This experience not only enriched my skills in UI development but also reinforced my commitment to delivering high-quality, user-centric solutions.",
      technologiesUsed:
        "Html, CSS, React.Js, Next.Js, ReactNative,Storybook(to test the components in isolation).",
      detailedDescription:
        "ExperienceHub.AI is a versatile platform that offers a wide range of models designed to cater to various experiences. These models operate on different topologies, providing flexibility and efficiency for diverse use cases.",
    },
  ];
  console.log("project", project);
  return (
    <Section id="projects" data-aos="fade-up">
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        paddingBottom="15px"
      >
        <Grid padding="3%">
          <Typography
            sx={{
              fontSize: "30px",
              background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
              WebkitBackgroundClip: "text",
              color: "#FFD95A",
              fontWeight: "bold",
              paddingTop: "15px",
            }}
          >
            Projects
          </Typography>
          <Divider color="#7b8794" />
        </Grid>
        <Grid
          paddingTop="30px"
          container
          // flexDirection="row" // Set row layout for larger screens
          justifyContent="center"
          alignItems="center"
          spacing={1} // Adjust the gap between the cards
        >
          {projectData.map((item, index) => {
            return (
              <Grid item key={index} xs={12} md={3} sm={3}>
                <ProjectCard
                  lable={item.title}
                  description={item.description}
                  img={item.img}
                  onClick={() => {
                    setProject(item);
                    hanleopen();
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        {/* <Grid bgcolor="red"> */}
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px",
          }}
        >
          <Container
            className="modalGlassomorphic"
            sx={{
              // background: "linear-gradient(20deg, #000000, #313866, #000000)",
              justifyContent: "center",
              height: "80%",
              borderRadius: "20px",
              overflowY: "auto",
            }}
          >
            <Grid container>
              <Grid
                item
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                paddingBottom={1}
              >
                <Typography
                  fontSize={25}
                  sx={{
                    // background:
                    //   "linear-gradient(180deg,#84D2C5,#EEE7DA,#84D2C5)",
                    WebkitBackgroundClip: "text",
                    color: "#F0A500",
                  }}
                >
                  {(project as Project).title}
                </Typography>
                <Button
                  sx={{
                    background: "linear-gradient(45deg,#1D5B79, #468B97)",
                    borderRadius: "8px",
                  }}
                  variant="contained"
                  onClick={() => handleClose()}
                >
                  Close
                </Button>
              </Grid>
              <Divider color="#ffffff" style={{ width: "100%" }} />
              <Grid item paddingTop={1}>
                <Grid container>
                  <Grid
                    item
                    md={6}
                    sm={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    alignSelf="flex-start"
                  >
                    <img
                      src={(project as Project).img}
                      alt="project img"
                      style={{ width: "75%" }}
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sm={6}
                    spacing={2}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    padding={0}
                    overflow="auto"
                  >
                    <Typography
                      fontFamily="cursive"
                      color="#ffffff"
                      fontWeight={900}
                      fontSize={20}
                      sx={{
                        background:
                          "linear-gradient(180deg,#84D2C5,#EEE7DA,#84D2C5)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Description:
                      <Typography
                        fontFamily="cursive"
                        color="#FAF1E4"
                        fontSize={15}
                        fontWeight={900}
                      >
                        {(project as Project).detailedDescription}
                      </Typography>
                    </Typography>
                    <Typography
                      fontFamily="cursive"
                      fontSize={20}
                      fontWeight={900}
                      sx={{
                        background:
                          "linear-gradient(180deg,#84D2C5,#EEE7DA,#84D2C5)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Role:
                      <Typography
                        fontFamily="cursive"
                        color="#FAF1E4"
                        fontSize={15}
                        fontWeight={700}
                      >
                        {(project as Project).role}
                      </Typography>
                    </Typography>
                    {(project as Project).additionalROleAndResp && (
                      <Typography
                        fontFamily="cursive"
                        color="#FAF1E4"
                        fontSize={15}
                        fontWeight={700}
                      >
                        {(project as Project).additionalROleAndResp}
                      </Typography>
                    )}
                    <Typography
                      fontFamily="cursive"
                      fontWeight={900}
                      fontSize={20}
                      sx={{
                        background:
                          "linear-gradient(180deg,#84D2C5,#EEE7DA,#84D2C5)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Technologies Used:
                      <Typography
                        fontFamily="cursive"
                        color="#FAF1E4"
                        fontSize={15}
                        fontWeight={700}
                      >
                        {(project as Project).technologiesUsed}
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Modal>
      </Grid>
    </Section>
  );
};
