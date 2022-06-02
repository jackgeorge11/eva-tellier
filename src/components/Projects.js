import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ projects, refs, openStates, handleClick }) {
  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const H1 = ({ children }) => <h1 className="rich-text">{children}</h1>;
  const H2 = ({ children }) => <h2 className="rich-text">{children}</h2>;
  const Text = ({ children }) => <p className="rich-text">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // const assetId = node.data.target.sys.id;
        const src = getImage(node.data.target);
        // const src = getImage(projects[0].content.references.find(({contentful_id: id}) => id === assetId))
        return (
          <>
            <GatsbyImage image={src} alt={node.data.target.title} />
          </>
        );
      },
    },
  };

  return (
    <>
      {projects.map((tab, i) => (
        <div
          key={i}
          ref={(e) => (refs.current[tab.slug] = e)}
          className={`project ${openStates[tab.slug] && "is--open"}`}
          onClick={
            openStates[tab.slug] ? null : () => handleClick(tab.slug, refs)
          }
        >
          <div className="tab-content">
            {tab.content && renderRichText(tab.content, options)}
          </div>
          <h3 className="year">{tab.year}</h3>
          <h3 className="intro">{tab.title}</h3>
        </div>
      ))}
    </>
  );
}
