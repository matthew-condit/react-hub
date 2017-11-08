import React, {Component} from 'react';
import { login } from '../../services/authService';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    render() {
        return (
            <div className="Hello World">
                <Form>
                    <FormGroup>
                        <Label for="username">UserName</Label>
                        <Input value={this.state.username} onChange={this.onUsernameChange} type="text" name="username" placeholder="UserName" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )

    }
}

export default LoginComponent;