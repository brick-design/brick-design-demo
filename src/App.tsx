import React from 'react';
import './App.css';
import ToolBar from "./toolBar";
import {BrickDesign} from 'brickd';
import {LegoProvider} from 'brickd-core';
import {BrickTree} from 'bricks-web';
import AllComponents from "./AllComponents";

import 'antd/dist/antd.css'
import 'brickd/dist/index.css';
import 'bricks-web/dist/index.css';
import config from './configs'
import SettingPanel from "./settingsPanel";
function App() {
  return (
    <LegoProvider config={config}>
      <div className='wrapper'>
        <ToolBar/>
        <div className='content'>
        <div className='left-preview'>
          <AllComponents/>
        </div>
        <div className='canvas-container'>
          <BrickDesign/>
        </div>
        <div className='props-shadow'>
          <SettingPanel/>
        </div>
        </div>
      </div>
    </LegoProvider>
  );
}

export default App;
