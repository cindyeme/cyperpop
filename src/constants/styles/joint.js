import styled from 'styled-components';

export const In = styled.div`
position: absolute;
bottom: 0;
right:0;
// grid-row: 1/-1;
// grid-column: 1/-1;
// align-self: center;
// justify-self: end;
border-radius: 10rem;
// z-index: 10;
margin-top: -3rem;
 `;


//  modal style
export const Modal = styled.div(({ visible }) => ({
    display: `${visible ? 'grid' : 'none'}`,
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    zIndex: 800,
    background: 'black',
    overflowY: 'scroll',
    height: '100%',
  }));
export const ModalPic = styled.div(({ visible }) => ({
  display: `${visible ? 'flex' : 'none'}`,
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  background: 'rgba(0, 0,0, 0.7)',
  // borderRadius: '16px',
  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  // backdropFilter: 'blur(1px)',
  zIndex : '200',
  padding: '0 .8rem'
    // -webkit-backdrop-filter: blur(5px);
  }));

  export const ModalFollow = styled.div(({ visible }) => ({
  display: `${visible ? 'flex' : 'none'}`,
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  background: 'rgba(0, 0,0, 0.7)',
  // borderRadius: '16px',
  // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  // backdropFilter: 'blur(1px)',
  zIndex : '200',
  padding: '3rem'
    // -webkit-backdrop-filter: blur(5px);
  }));