import React, {Component} from 'react';
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
                    {/*<FormGroup>*/}
                        {/*<Label for="examplePassword">Password</Label>*/}
                        {/*<Input type="password" name="password" id="examplePassword" placeholder="" />*/}
                    {/*</FormGroup>*/}
                    <Button>Submit</Button>
                </Form>
            </div>
        )

    }
}

export default LoginComponent;