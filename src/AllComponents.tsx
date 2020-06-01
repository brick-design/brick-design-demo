import React, { useState } from 'react';
import { Tabs } from 'antd';
import  './index.css';
import { BrickPreview } from 'bricks-web';

const { TabPane } = Tabs;

function AllComponents() {
    const [activeKey, setActiveKey] = useState('container');
    return (
        <Tabs  activeKey={activeKey}
               onChange={(newActiveKey: string) => setActiveKey(newActiveKey)}>
            <TabPane forceRender
                     tab={'container'} key="container">
                <div className='preview-tab-panel'>
                <BrickPreview
                    isShow={activeKey === 'container'}
                    isContainer
                />
                </div>
            </TabPane>
            <TabPane forceRender
                     tab={'nonContainer'} key="nonContainer">
                <div className='preview-tab-panel'>
                <BrickPreview isShow={activeKey === 'nonContainer'}

                />
                </div>
            </TabPane>
        </Tabs>
    );
}


export default AllComponents;
