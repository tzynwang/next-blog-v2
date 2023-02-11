import React, { memo } from 'react';

function Hello(): React.ReactElement {
  return <div>hello world</div>;
}

export default memo(Hello);
