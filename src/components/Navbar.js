import React, {Component} from 'react'
import Navitem from './Navitem'

class Navbar extends Component {
   constructor(props){
       super(props)
       this.state = {
           'NavItemActive':''
       }
   }

   activeItem = (x) => {
       if(this.state.NavItemActive.length>0){
           document.getElementById(this.state.NavItemActive).classList.remove('active')
       }

       this.setState({'NavItemActive': x}, function(){
           document.getElementById(this.state.NavItemActive).classList.add('active')
       })
   }

   render(){
       return(
           <nav>
               <ul>
                   <Navitem item="Home" tolink="/" activec={this.activeItem} />
                   <Navitem item="About" tolink="/about" activec={this.activeItem} />
                   <Navitem item="Education" tolink="/education" activec={this.activeItem} />
                   <Navitem item="Skills" tolink="/skills" activec={this.activeItem} />
                   <Navitem item="Contact" tolink="/contact" activec={this.activeItem} />
               </ul>
           </nav>
       )
   }
}

export default Navbar