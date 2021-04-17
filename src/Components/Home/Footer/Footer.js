import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer class="bg-light text-center text-white">
      
        <div class="container p-4 pb-0">
        
          <section class="mb-4">
        
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#3b5998"}} 
              href="#!"
              role="button"
              >
                  <FontAwesomeIcon icon={faFacebookF} />
            </a>
      
          
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              href="#!"
              role="button"
              >
            <FontAwesomeIcon icon={faTwitter} />
            </a>
      
          
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              href="#!"
              role="button"
              >
                  
                  <FontAwesomeIcon icon={faGoogle} />
            </a>
      
            
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              href="#!"
              role="button"
              >
                  
                   <FontAwesomeIcon icon={faInstagram} />
              
              </a>
      
         
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: "#0082ca"}}
              href="#!"
              role="button"
              >
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
           
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor: '#333333'}}
              href="#!"
              role="button"
              >
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
         
        </div>
       
      
      
        <div class="text-center p-3" style={{backgroundColor:' rgba(0, 0, 0, 0.2)'}}>
       
          <a class="text-white" href="#home">THE EVENT</a>
        </div>
       
      </footer>
    );
};

export default Footer;