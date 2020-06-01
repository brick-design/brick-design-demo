import React, { createElement, useCallback } from 'react';
import { Button, Form, Tooltip } from 'antd';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import each from 'lodash/each';
import { DEFAULT_PROPS, TYPES_TO_COMPONENT } from './config';
import './index.css';
import { filterProps } from '../../utils';
import {SwitchMultiTypes} from 'bricks-web';
import { FormComponentProps } from 'antd/lib/form';
import { PropInfoType, PROPS_TYPES, PropsSettingType, SelectedInfoType, submitProps } from 'brickd-core';


const FormItem = Form.Item;

interface PropsSettingsPropsType extends FormComponentProps {
  propsSetting?: PropsSettingType,
  selectedInfo?: SelectedInfoType
}

function PropsSettings(props: PropsSettingsPropsType) {

  const {
    form: { getFieldDecorator, validateFields, resetFields, setFieldsValue },
    form,
    selectedInfo,
    propsSetting,
  } = props;
  const { props: initProps, mergePropsConfig } = propsSetting||{};

  /**
   * 渲染form items
   * @param config
   * @param field
   * @returns {*}
   */
  function renderFormItem(config: PropInfoType, field: string) {
    const { selectedKey } = selectedInfo!;
    const { type, label, rules, tip, formItemProps } = config;

    let itemProps: any = {}, itemOption: any = {};
    /**
     * 设置form rules
     */
    const extraObj: any = {
      rules,
    };


    /**
     * 如果属性为boolean类型设置form 获取值的属性
     */
    if (type === PROPS_TYPES.boolean) {
      extraObj.valuePropName = 'checked';
    }
    /**
     * 清除属性配置中的defaultValue,value 目的是消除form警告
     */
    const { defaultValue, value, ...props }: any = {
      field, ...config, ...itemProps,
      size: type === PROPS_TYPES.boolean ? 'default' : 'small',
    };
    if (isArray(type)) return (<SwitchMultiTypes componentProps={props}
                                                 formItemProps={formItemProps}
                                                 key={`${field}${selectedKey}`}
                                                 extraObj={extraObj}
                                                 itemOption={itemOption}
                                                 field={field}
                                                 types={type}
                                                 form={form}
                                                 tip={tip}
                                                 label={label}

    />);
    return (
      <FormItem key={`${field}${selectedKey}`}
                style={{ marginLeft: 10, marginRight: 10, marginBottom: 5 }}
                {...formItemProps} label={<Tooltip title={`${field}:${tip || label}`}>{label}</Tooltip>}>
        {getFieldDecorator(field, { ...extraObj, ...itemOption })(
          createElement(get(TYPES_TO_COMPONENT, type), props),
        )}
      </FormItem>
    );
  }

  /**
   * 提交最终属性结果
   */
  const submitPropsInfo = useCallback((e: any) => {
    e.preventDefault();
    validateFields((err, values) => {
      submitProps({
        props: filterProps(values)
      })

    });
  }, []);

  const resetProps = useCallback(() => {
    resetFields();
    setFieldsValue(initProps);

  }, [initProps]);
  return (
    <>
      {!isEmpty(mergePropsConfig) && (
        <div className='btn-wrap'>
          <Button style={{ fontSize: 12 }} onClick={resetProps}>
            重置
          </Button>
          <Button type="primary" onClick={submitPropsInfo} style={{ fontSize: 12, marginLeft: '20px' }}>
            提交
          </Button>
        </div>
      )}
      <div className={'main-container'} style={{ position: 'relative' }}>
        <Form className={'form-container'} layout="vertical">
          {!isEmpty(mergePropsConfig) && map({ ...mergePropsConfig, ...DEFAULT_PROPS }, renderFormItem)}
        </Form>
      </div>
    </>
  );
}


export default Form.create<PropsSettingsPropsType>({
    mapPropsToFields(props) {
      const selectedProps = get(props, 'propsSetting.props');
      const formatFields: any = {};
      each(selectedProps, (v, field) => (formatFields[field] = Form.createFormField({ value: v })));
      return formatFields;
    },
  })(PropsSettings);
