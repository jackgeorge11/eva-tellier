import React, { useState, useRef } from "react";
import "../scss/styles.scss";
import Projects from "../components/Projects";
import { useStaticQuery, graphql } from "gatsby";
import Info from "../components/Info";

const IndexPage = () => {
  const { allContentfulInfo, allContentfulProject } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulInfo {
        nodes {
          content {
            raw
          }
          slug
          title
        }
      }
      allContentfulProject {
        nodes {
          slug
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
          title
          year
        }
      }
    }
  `);

  const info = allContentfulInfo.nodes;
  const projects = allContentfulProject.nodes;

  const getAllSlugs = (info, projects) => {
    const slugs = [];
    info.forEach((tab) => {
      return slugs.push(tab.slug);
    });
    projects.forEach((tab) => {
      return slugs.push(tab.slug);
    });
    return slugs;
  };

  const allSlugs = getAllSlugs(info, projects);

  const getFalseStates = (slugs) => {
    let falseStates = {};
    for (let i = 0; i < slugs.length; i++) {
      falseStates[slugs[i]] = false;
    }
    return falseStates;
  };

  const falseStates = getFalseStates(allSlugs);

  const [openStates, setOpenStates] = useState(falseStates);

  const refs = useRef({});

  const handleClick = (project, refs) => {
    if (openStates[project]) {
      setOpenStates({
        ...falseStates,
      });
    } else {
      setOpenStates({
        ...falseStates,
        [project]: true,
      });
    }
    allSlugs.forEach((s) => {
      console.log(s);
      console.log(refs?.current[s]);
      if (refs?.current[s]) {
        refs.current[s].scrollTop = 0;
      }
    });
  };

  return (
    <div className="home">
      <main className="left">
        <h1 className="title">Eva Tellier</h1>
        {info.map((tab, i) => (
          <h2
            key={i}
            className={`bio ${openStates[tab.slug] && "is--open"}`}
            onClick={() => handleClick(tab.slug, refs)}
          >
            {tab.title}
          </h2>
        ))}
        <a href="mailto:evatellier16@gmail.com" className="mail">
          eva@evatellier.com
        </a>
        {projects.map((tab, i) => (
          <>
            <h3
              key={i}
              className={`project-title ${openStates[tab.slug] && "is--open"}`}
              onClick={() => handleClick(tab.slug, refs)}
            >
              {tab.title}
            </h3>
            <h4
              key={i}
              className={
                i + 1 < projects.length ? "project-year" : "project-year last"
              }
            >
              {tab.year}
            </h4>
          </>
        ))}
      </main>
      <main className="right">
        <Projects
          projects={projects}
          refs={refs}
          falseStates={falseStates}
          openStates={openStates}
          handleClick={handleClick}
        />
        <Info
          info={info}
          refs={refs}
          falseStates={falseStates}
          openStates={openStates}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
};

export default IndexPage;
