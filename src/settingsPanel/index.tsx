import React, { useState } from 'react';
import { Tabs } from 'antd/lib/index';
import PropsSettings from './propsSettings';
import StyleSettings from './styleSettings';
import { useSelector } from 'brickd-core';
import { BrickTree } from 'bricks-web';

const { TabPane } = Tabs;
function SettingPanel() {
const {propsSetting,selectedInfo}=useSelector(['propsSetting', 'selectedInfo'])
  const [activeKey, setActiveKey] = useState('1');

  return (
    <Tabs
      onChange={(activeKey: any) => setActiveKey(activeKey)}
      activeKey={activeKey}
    >
      <TabPane forceRender key="1" tab={'组件树'}>
        <BrickTree className='brick-tree' />
      </TabPane>
      <TabPane forceRender key="2" tab={'属性配置'}>
        <PropsSettings selectedProps={selectedInfo&&selectedInfo.props} selectedInfo={selectedInfo}/>
      </TabPane>
      <TabPane forceRender key="3" tab={'样式配置'}>
        <StyleSettings styleSetting={selectedInfo&&selectedInfo.props.style}/>
      </TabPane>

    </Tabs>
  );
}

export default SettingPanel;
