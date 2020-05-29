import { ComponentConfigTypes, PROPS_TYPES } from 'brickd-core';

const Breadcrumb: ComponentConfigTypes = {
  nodePropsConfig: {
    separator: {
      type: PROPS_TYPES.reactNode,
    },
    itemRender: {
      type: PROPS_TYPES.functionReactNode,
      params: ['route', 'params', 'routes', 'locations'],
    },
    children: {
      type: PROPS_TYPES.reactNode,
    },
  },
  propsConfig: {
    params: {
      label: '路由的参数',
      type: PROPS_TYPES.object,
      childPropsConfig: {},
    },
    routes: {
      label: 'router 的路由栈信息',
      type: PROPS_TYPES.objectArray,
      childPropsConfig: [{
        location: {
          label: 'location',
          type: PROPS_TYPES.string,
        },
        breadcrumbName: {
          label: 'breadcrumbName',
          type: PROPS_TYPES.string,
        },
        children: {
          label: 'children',
          type: PROPS_TYPES.objectArray,
          childPropsConfig: [{
            location: {
              label: 'location',
              type: PROPS_TYPES.string,
            },
            breadcrumbName: {
              label: 'breadcrumbName',
              type: PROPS_TYPES.string,
            },
          }],
        },
      }],
    },
  },
};
const Item: ComponentConfigTypes = {
  nodePropsConfig: {
    overlay: {
      label: '菜单',
      tip: '哈哈哈',
      type: PROPS_TYPES.functionReactNode,
      params: [],
      childNodesRule: ['Menu'],
    },
    children: {
      type: PROPS_TYPES.reactNode,
    },
  },
  propsConfig: {
    children: {
      label: '内容',
      type: PROPS_TYPES.string,
    },
    href: {
      label: '链接的目的地',
      type: PROPS_TYPES.string,
    },
    onClick: {
      label: '单击事件',
      type: PROPS_TYPES.function,
      placeholder: '(e)=>{}',
    },
  },
};
const Separator: ComponentConfigTypes = {
  propsConfig: {
    children: {
      label: '要显示的分隔符',
      type: PROPS_TYPES.string,
    },
  },
};

export default {
  Breadcrumb,
  'Breadcrumb.Item': Item,
  'Breadcrumb.Separator': Separator,
};
