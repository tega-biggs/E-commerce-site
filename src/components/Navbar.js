import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-lg' data-bs-theme="dark">     
      <div className="container">
      <div className="navbar-brand-container d-flex align-items-center">
        <Link to='/'>
          {/*<svg 
          className='navbar-brand'
          height="40px" 
          style={{enableBackground: 'new 0 0 1668.01 1681'}}
          version="1.1" viewBox="0 0 1668.01 1681" 
          width="40px" 
          xmlSpace="preserve" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {/* SVG content 
          <g id="shop">
            <path 
              d="M1668.214,712.414c0-10.726-2.79-21.288-7.786-30.775L1462,305.058V63.543C1462,27.053,1432.889,0,1396.398,0H273.196   C236.708,0,206,27.053,206,63.543v241.468L7.676,681.56c-5.022,9.511-7.558,20.102-7.558,30.857   C0.118,765.043,28,811.462,68,838.597v688.339C68,1610.77,135.927,1681,218.958,1681h1230.232   c83.828,0,151.811-70.232,151.811-154.066V837.99C1640,810.771,1668.214,764.64,1668.214,712.414z M1330,132v125H339V132H1330z    M313.019,390h1043.495l176.502,334.002c-3.533,5.319-9.658,8.286-16.455,8.286l-1364.789-0.315   c-6.664,0-12.538-2.365-15.942-7.617L313.019,390z M970,1549H695v-305.399c0-75.257,61.934-136.481,137.564-136.481   c75.561,0,137.436,61.225,137.436,136.479V1549z M1449.189,1549H1102v-305.402c0-148.121-121.012-268.621-269.436-268.621   C684.07,974.977,563,1095.482,563,1243.601V1549H218.958c-10.167,0-18.958-11.094-18.958-22.064v-663.14l1268-0.005v663.143   C1468,1537.533,1459.783,1549,1449.189,1549z"
            />
            </g>
            <g id="Layer_1"/>
            </svg> */}

          <svg 
          className='navbar-brand'
          height='50px'
          width="50px"
          data-name="Your Icons" 
          id="Your_Icons"
          viewBox="0 0 48 48" 
          xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`.cls-1{fill:#939598;}.cls-2{fill:#00a651;}.cls-3{fill:#fff;}`}</style>
            </defs>
            <title/>
            <path className="cls-1" d="M37,15H33.91A5.47,5.47,0,0,1,34,16a6,6,0,1,1-12,0,6.53,6.53,0,0,1,.08-1H17.15l-1.27-3.64A5,5,0,0,0,11.16,8H8a1,1,0,0,0,0,2h3.16A3,3,0,0,1,14,12l1,3h0l2.5,7.09,2.62,7.55A5,5,0,0,0,24.85,33H30a1,1,0,0,0,0-2H24.85A3,3,0,0,1,22,29H32.77a6.07,6.07,0,0,0,5.94-4.74l1.22-5.63A3,3,0,0,0,37,15Zm1,3.21-1.22,5.63a4.08,4.08,0,0,1-4,3.16H21.35l-2-5.61L17.84,17h2.22a7.87,7.87,0,0,0,2.35,4.72A8,8,0,0,0,35.94,17h1a1,1,0,0,1,.82.39A1,1,0,0,1,38,18.21Z"/>
            <path className="cls-1" d="M20,33a3,3,0,1,0,3,3A3,3,0,0,0,20,33Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,20,37Z"/>
            <path className="cls-1" d="M34,33a3,3,0,1,0,3,3A3,3,0,0,0,34,33Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,34,37Z"/>
            <path className="cls-2" d="M28,8a8,8,0,1,0,8,8A8,8,0,0,0,28,8Z"/>
            <path className="cls-3" d="M30.5,15H29V13.5a1,1,0,0,0-2,0V15H25.5a1,1,0,0,0,0,2H27v1.5a1,1,0,0,0,2,0V17h1.5a1,1,0,0,0,0-2Z"/>
            </svg>
        </Link>
        <Link to="/" className='nav-link'>
            Products
        </Link>
        </div>
        
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'></li>
          
        </ul>
        <Link to="/cart" className='ml-auto'>
          <ButtonContainer>
          <span className="me-2">
          <i className='fas fa-cart-plus' />
          </span>   
            my cart
          </ButtonContainer>
        </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform:capitalize;
}
`