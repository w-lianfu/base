import styled from 'styled-components';

import Color from '@tool/color';

const HeaderPaper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 0.1rem solid ${Color.borderColor(1)};

  img { width: 15rem; }
`;

export default HeaderPaper;
