import { React, Component } from 'react'; 
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button'; 

class ActionButton extends Component {

    state = {
        formOpen: false
    }; 

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

    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        });
    };

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
                        border: 'none' 
                }} />
               </Card>
               <div style={styles.formButtonGroup}>
                    <Button 
                            variant='contained'
                            style={{ color: 'white', backgroundCoulor: '#5aac44'}}> 
                            {buttonTitle} 
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

export default ActionButton; 