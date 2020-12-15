import { React, Component, useState } from 'react'; 
import { connect } from 'react-redux';
import axios from 'axios'; 

import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button'; 

import { addList, addCard } from '../actions';

class ActionButton extends Component {

   state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({ 
            formOpen: true, 
            text: ''
        })
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        })
    };

    handleChangeInput = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props; 
        const { text } = this.state; 
    
        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addList(text));

            axios({
                method: 'post',
                responseType: 'json',
                data: {
                    'task_list': {
                        name: this.state.text, 
                        board_id: 1
                    }
                },
                url: `http://localhost:3001/api/v1/task_lists`, 
                validateStatus: (status) => {
                    return true; 
                },
              })
              .then(response => {
                console.log(response)
            })
        }
        return; 
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props; 
        const { text } = this.state; 

        if (text) {
            this.setState({
                text: ''
            })
            dispatch(addCard(listID, text));
            axios({
                method: 'post',
                responseType: 'json',
                data: {
                    'task_card': {
                        name: this.state.text, 
                        task_list_id: 1
                    }
                },
                url: `http://localhost:3001/api/v1/task_cards`, 
                validateStatus: (status) => {
                    return true; 
                },
              })
              .then(response => {
                console.log(response)
            })
        }
        return; 
    }


    renderAction = () => {
        const { list } = this.props; 
        const actionName = list ? "Add another list" : "Add another card"; 
        const buttonTextOpacity = list ? 1 : 0.5; 
        const buttonTextColor = list ? 'white' : 'inherit'; 
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit'; 

        return (
            <div 
                onClick={this.openForm}
                style={{
                ...styles.openFormButtonGroup, 
                opacity: buttonTextOpacity, 
                color: buttonTextColor, 
                background: buttonTextBackground
            }}>
                <Icon>add</Icon>
                <div>{actionName}</div>
            </div>
        )

    }

    renderForm = () => {
        const { list } = this.props; 

        const placeholder  = list ? 'Enter list title ...' : 'Enter a title for this card'; 
        const buttonTitle = list ? 'Add List' : 'Add Card'; 
        
        return (
           <div> 
               <Card style={{
                   minHeight: 80, 
                   minWidth: 272, 
                   padding: '6px 8px 2px',
                   marginBottom: 8
               }}>
                   
                <Textarea placeholder={placeholder} 
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleChangeInput}
                    style={{
                        resize: 'none', 
                        overflow: 'hidden', 
                        width: '100%', 
                        outline: 'none', 
                        border: 'none' }} />
               </Card>
               <div style={styles.formButtonGroup}>
                    <Button 
                            onMouseDown={list ? this.handleAddList : this.handleAddCard }
                            variant='contained'
                            color='secondary'
                            style={{ color: 'white', backgroundCoulor: '#5aac44'}}> 
                            {buttonTitle} {" "}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAction(); 
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex', 
        alignItems: 'center',
        cursor: 'pointer', 
        borderRadius: 3, 
        height: 36, 
        width: 272, 
        paddingLeft: 10
    }, 
    formButtonGroup: {
        marginTop: 8, 
        display: 'flex', 
        alignItems: 'center'
    }
}

export default connect() (ActionButton); 