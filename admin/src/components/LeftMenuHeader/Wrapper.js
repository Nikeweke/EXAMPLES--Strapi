import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo-strapi.png';

const Wrapper = styled.div`
background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);
  height: ${props => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    vertical-align: middle;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 3rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
