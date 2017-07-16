import React from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import './GetInfo.css';
import * as Service from '../services/getInfo';

const FormItem = Form.Item;
class GetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  }

  handleModal = () => {
    this.setState({
      openModal: true,
    });
  }

  handleOk = (e) => {
    e.preventDefault();
    Service.fetch().then((data) => {
      console.log(data);
    })
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let person = {
          name: values.name,
          id: parseInt(values.id),
          explain: values.explain,
          serialNo: parseInt(values.serialNo)
        };
        console.log(person);
        Service.push(person).then((res) => {
          console.log(res);
          if(res.data.success) {
            message.success("报名成功！");
            this.setState({
              openModal: false,
            });
          } else {
            message.error("网络不稳定，请稍后重试");
          }
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    
    return (
      <div>
        <Button className='position' onClick={this.handleModal}>报名</Button>
        <Modal
          title="填写信息"
          visible={this.state.openModal}
          onOk={this.handleOk}
          onCancel={this.closeModal}
        >
          <FormItem
            {...formItemLayout}
            label="name"
          >
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please input your name!' },
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="id"
          >
            {getFieldDecorator('id', {
              rules: [
                { required: true, message: 'Please input your name!' },
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="serialNo"
          >
            {getFieldDecorator('serialNo', {
              rules: [
                { required: true, message: 'Please input your name!' },
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="explain"
          >
            {getFieldDecorator('explain', {
              rules: [
                { required: true, message: 'Please input your name!' },
              ],
            })(
              <Input />
            )}
          </FormItem>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(GetInfo);