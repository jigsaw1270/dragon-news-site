import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaGoogle ,FaGithub ,FaFacebookF ,FaTwitch ,FaInstagram } from 'react-icons/fa';
import Qzone from '../QQzone/Qzone';
import bg from '../../../assets/bg.png'

const Rightnav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>


            <div>
                <h3>Find Us On</h3>
                <ListGroup>
      <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      <ListGroup.Item><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
  
    </ListGroup>

            </div>

            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;