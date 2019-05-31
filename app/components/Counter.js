// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes';
import SMB2 from 'smb2';
import fs from 'fs-extra';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class Counter extends Component<Props> {
  props: Props;

  handleSMB = () =>{
    
        // var smb2Client = new SMB2({
    //   share: '\\\\192.168.4.221\\c$',
    //   domain: 'React',
    //   username: 'React',
    //   password: 'react'
    // });
    // smb2Client.readFile('\\REACT-TESTING-S\\shared_folder\\a.txt',function(err, files) {
    //   if (err) console.log('errir',err);
    //   console.log('files',files);
    // });
    //   smb2Client.exists('shared_folder', function (err, exists) {
    //     if (err) throw err;
    //     console.log(exists ? "it's there" : "it's not there!");
    // });
    //     var SambaClient = require('samba-client');

    //   var client = new SambaClient({
    //     address: '192.168.4.221', // required
    //     username: 'react', // not required, defaults to guest
    //     password: 'react', // not required
    //     domain: 'react' // not required
    //   });
    }

  handleChange = async(event) => {
    event.preventDefault();
    // const sourcePath = '/home/revan/work/project1/src/styles'
    // try {
    //     await fs.copy('G:\\Projects\\Source', 'G:\\Projects\\fsdest')
    // } catch (error) {
    //     console.log('** Error **', error)
    // }
  };

  isAlreadyExist = (path) => {

  }

  render() {   
    return (
      <div>        
        {/* <button onClick={this.handleChange}>Copy</button> */}
        <input type='file' multiple onChange={this.handleInputChange} />
      </div>
    );
  }

  handleInputChange = async(e) =>{
    console.log(e.target.files,'files')
     // const sourcePath = '/home/revan/work/project1/src/styles'
     try {
      Array.from(e.target.files).map( async file=>{
        await fs.copy(file.path, '/home/revan/sambashare/FTP_PLP/new/'+file.name)
      })
    } catch (error) {
        console.log('** Error **', error)
    }
  }
}
