import React from 'react';
import PropTypes from 'prop-types';
import Ribbon from 'components/Ribbon';


const EPIC_SEPARATOR = '>';
function DescriptionCellRenderer(props) {
  let epic;
  let description;
  if (props.value.includes('>')) {
    [epic, ...description] = props.value
      .split(EPIC_SEPARATOR)
      .map(item => item.trim());
  } else {
    description = [props.value];
  }

  return (
    <div>
      {epic && <Ribbon>{epic}</Ribbon>}
      {description.join(' > ')}
    </div>
  );
}

DescriptionCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default DescriptionCellRenderer;
