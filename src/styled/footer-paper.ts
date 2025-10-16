import styled from 'styled-components';

import Color from '@tool/color';

const FooterPaper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 3rem;
  border-top: 0.1rem solid ${Color.borderColor(1)};

  img { width: 10rem; }
`;

export default FooterPaper;
