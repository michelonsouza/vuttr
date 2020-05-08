import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import closeIcon from '~/assets/images/Icon-Close-2px.svg';
import { Card } from '~/components';

import { HeaderToolItem, ToolContent } from '../styles';

export default function ToolsItem({ tool, handleDelete }) {
  const tags = useMemo(() => {
    return tool.tags.map((t) => `#${t}`);
  }, [tool.tags]);

  return (
    <Card aria-describedby={tool.description}>
      <HeaderToolItem>
        <a
          href={tool.link}
          rel="noopener noreferrer"
          target="_blank"
          title={tool.title}
        >
          {tool.title}
        </a>
        <button
          type="button"
          title={`Remove item #${tool.id}`}
          onClick={() => handleDelete(tool.id)}
        >
          <img className="logo" src={closeIcon} alt="Remove item" /> remove
        </button>
      </HeaderToolItem>
      <ToolContent>
        <p>{tool.description}</p>
        <div>
          {tags.map((t) => (
            <b key={t} title={t}>
              {t}{' '}
            </b>
          ))}
        </div>
      </ToolContent>
    </Card>
  );
}

ToolsItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  tool: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
