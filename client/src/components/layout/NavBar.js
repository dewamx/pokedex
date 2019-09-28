// import React, { Component } from 'react';
// import styled from 'styled-components';
// import classnames from 'classnames';
// // import { useAuth0 } from "../../react-auth0-wrapper";
// import { Link } from "react-router-dom";

// // const NavBarStyle = styled.nav;
// const Branding = styled.a`
// -moz-user-select: none;
// -website-user-select: none;
// -ms-user-select: none;
// user-select: none;
// -o-user-select: none;
// `;

// const Logo = styled.img`
// height: 30px;
// width: 30px;
// margin-right: 0.5em;
// `;
// // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

// export default class NavBar extends Component {

//   state = {
//     hoverNavBar: false,
//   };

//   hoverNavBar() {
//     window.scrollY <= 0
//       ? this.setState({ hoverNavBar: false })
//       : this.setState({ hoverNavBar: true });
//   }

//   componentDidMount() {
//     // Added True To End To Listen to All Events On Page
//     window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
//   }

//   componentWillUnmount() {
//     // Added True To End To LIsten to All Events On Page
//     window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
//   }

//   updateSearch = (e) => {
//     this.props.setSearch(e.target.value)
//   }



//   render() {
//     return (

//         {/* {!isAuthenticated && (
//           <button
//             onClick={() =>
//               loginWithRedirect({})
//             }
//           >
//             Log in
//         </button>
//         )}
//         {isAuthenticated && (
//           <span>
//             <Link to="/">Home</Link>&nbsp;
//             <Link to="/profile">Profile</Link>
//           </span>
//         )}
//         {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//       </div> */}
    
// /* <>
// <nav class="navbar navbar-default navbar-inverse" role="navigation">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//         <span class="sr-only">Toggle navigation</span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//       </button>
//       <a class="navbar-brand" href="#">Saved</a>
//     </div>
//     <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul class="nav navbar-nav">
//         <li class="active"><a href="#">Link</a></li>
//         <li><a href="#">Link</a></li>
//         <li class="dropdown">
//           <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
//           <ul class="dropdown-menu" role="menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//             <li class="divider"></li>
//             <li><a href="#">One more separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div> */
//     // <form class="navbar-form navbar-left" role="search">
//     //   <div class="form-group">
//     //     <input onChange={this.updateSearch} value={this.state.search} type="text" class="form-control" placeholder="Search" />
//     //   </div>
//     //   <button type="submit" class="btn btn-default">Submit</button>
//     // </form>
// //     <ul class="nav navbar-nav navbar-right">
// //       <li><p class="navbar-text">Already have an account?</p></li>
// //       <li class="dropdown">
// //         <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
// //         <ul id="login-dp" class="dropdown-menu">
// //           <li>
// //             <div class="row">
// //               <div class="col-md-12">
// //                 Login via
// //                     <div class="social-buttons">
// //                   <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
// //                   <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
// //                 </div>
// //                 or
// //                      <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
// //                   <div class="form-group">
// //                     <label class="sr-only" for="exampleInputEmail2">Email address</label>
// //                     <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required />
// //                   </div>
// //                   <div class="form-group">
// //                     <label class="sr-only" for="exampleInputPassword2">Password</label>
// //                     <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required />
// //                     <div class="help-block text-right"><a href="">Forget the password ?</a></div>
// //                   </div>
// //                   <div class="form-group">
// //                     <button type="submit" class="btn btn-primary btn-block">Sign in</button>
// //                   </div>
// //                   <div class="checkbox">
// //                     <label>
// //                       <input type="checkbox" /> keep me logged-in
// //                            </label>
// //                   </div>
// //                 </form>
// //               </div>
// //               <div class="bottom text-center">
// //                 New here ? <a href="#"><b>Join Us</b></a>
// //               </div>
// //             </div>
// //           </li>
// //         </ul>
// //       </li>
// //     </ul>
// //   </div>
// // </nav>
// // </>
// // };
