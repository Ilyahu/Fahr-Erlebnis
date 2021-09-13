import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Link } from "gatsby"

export const parseOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const embedded = children.find(child => (child ? child.props : false));

      if (embedded) {
        return children;
      }

      return (<div className="subtitle">{children}</div>);
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="title">{children}</h1>
    ),
    [BLOCKS.EMBEDDED_ASSET]: () => null,
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list">
        {children.map(child => (
          <li key={child.key} className="listItem">
            {child.props.children}
          </li>
        ))}
      </ul>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return <Link to={uri}>{children}</Link>;
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const { fields: nodeFields } = node.data.target;
      return (
        <Link className="link" to={`/${nodeFields.slug}`}>{children}</Link>
      );
    },
  },
};
