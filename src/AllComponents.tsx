import React, { useState } from 'react';
import { Tabs } from 'antd';
import  './index.css';
import { BrickPreview } from 'bricks-web';
import {CONTAINER_CATEGORY, NON_CONTAINER_CATEGORY} from "./configs";

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
                    componentsCategory={CONTAINER_CATEGORY}
                />
                </div>
            </TabPane>
            <TabPane forceRender
                     tab={'nonContainer'} key="nonContainer">
                <div className='preview-tab-panel'>
                <BrickPreview
                    isShow={activeKey === 'nonContainer'}
                    componentsCategory={NON_CONTAINER_CATEGORY}

                />
                </div>
            </TabPane>
        </Tabs>
    );
}


export default AllComponents;
