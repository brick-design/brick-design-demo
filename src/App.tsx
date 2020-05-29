import React from 'react';
import './App.css';
import {BrickDesign} from 'brickd';
import {LegoProvider} from 'brickd-core';
import {BrickPreview,BrickTree} from 'bricks-web'
import 'antd/dist/antd.css'
import 'brickd/dist/index.css';
import 'bricks-web/dist/index.css';
import config from './configs'
function App() {
  return (
    <LegoProvider config={config}>
      <div style={{display:"flex",flexDirection:'row'}}>
        <div style={{width:300,height:'100vh'}}>
          <BrickPreview isContainer={true}/>
        </div>
        <div className={'content'}>
          <BrickDesign/>
        </div>
        <div style={{width:300,height:'calc(100vh - 200px)'}}>
          <BrickTree/>
        </div>
      </div>
    </LegoProvider>
  );
}

export default App;
