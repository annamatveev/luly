import React from 'react';
import PropTypes from 'prop-types';
import Ribbon from 'components/Ribbon';
import DefaultDescription from 'components/DefaultDescription';

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
      {description.join(' > ') || (
        <DefaultDescription message="Add a description for the task" />
      )}
    </div>
  );
}

DescriptionCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default DescriptionCellRenderer;
