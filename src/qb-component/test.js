/**
 * Created by az on 2017/7/24.
 */
import React, {Component} from 'react';
import QbLayout from './QbLayout';
import {QbDatePicker, QbTimePicker} from './QbDatePicker';

import QbButton from './QbButton';
import {QbCheckBox, QbRadio, QbInput, QbSwitcher} from './QbInput';
import {QbModalBody, QbModalHeader, QbModalFooter, QbModal} from './QbModal';
import {QbDropDown, QbDropDownDivider, QbDropDownItem} from './QbDropDown';
import QbMessageCard from './QbMessageCard';
import QbSlider from './QbSlider';

import './scss/_variables.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state ={
            show: false,
            switchState: true,
            showCard: true,
        }
    }
    toggleModal () {
        this.setState({
            show: !this.state.show
        });
        console.log('Tag show is, ', this.state.show);
    }
    switchHandler() {
        console.log('Tag click');
        this.setState((prevState, props) => ({ switchState: !prevState.switchState}));
    }
    messageToggle() {
        this.setState((prevState, props)=> ({
            showCard: !prevState.showCard
        }));
    }
    sliderChange(lowPrice, highPrice) {
        console.log(lowPrice, highPrice);
    }
    render() {
        const dropDownContent = [{
            label: 'a',
            value: 'a',
        },{
            label: 'b',
            value: 'b',
        },{
            label: 'c',
            value: 'c',
        }];
        return (
            <div>
                <QbButton label="hello"
                          className="btn btn-primary"
                          size="small"
                          clickHandler={this.toggleModal.bind(this)} dataTarget="#modal" dataToggle='modal'/>
                <QbCheckBox label="hello" changeHandler={()=> alert('hi')} fontStyle={{fontSize: 16}}/>
                <QbRadio label="hello" changeHandler={()=> alert('hello')} fontStyle={{fontSize: 16}}/>
                <QbInput size="small" changeHandler={(e)=> alert(e.target.value)}/>
                <QbModal target="modal" >
                    <QbModalHeader>
                        <div>header</div>
                    </QbModalHeader>
                    <QbModalBody>
                        <div>body</div>
                    </QbModalBody>
                    <QbModalFooter>
                        <QbButton label="close" dataTarget="#modal" dataToggle='modal'/>
                    </QbModalFooter>
                </QbModal>
                <QbDropDown defaultData={{label: "nihao", value: 'hello'}} default inputType="button" btnStyle={{width: 350, textAlign: 'left'}}
                            dropdownStyle={{width: 400}} compStyle={{position: 'relative', width: 400}}
                            content ={dropDownContent} onChange={(data)=> console.log('TAg data:', data)}
                />
                <QbSwitcher switchState={this.state.switchState} clickHandler={this.switchHandler.bind(this)}/>
                <QbTimePicker ensureTime={(time)=> console.log('Tag time is:', time)}/>
                <QbDatePicker/>
                <QbButton label="show message"
                          className="btn btn-primary"
                          size="small"
                          clickHandler={this.messageToggle.bind(this)}/>
                <QbMessageCard display={this.state.showCard}
                               title="hello!"
                               content="ha lou a !"
                               onCancelClick={this.messageToggle.bind(this)}/>
                <QbSlider maxMark="$10+"
                          minMark="Free!"
                          maxPrice={15}
                          style={{height: 100, width:300}}
                          changeHandler={this.sliderChange.bind(this)}/>
            </div>
        )
    }
}
