import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
              	<Scene key='root'hideNavBar>
              		<Scene key="auth">
                    	<Scene key='login' component={LoginForm} title='Please login'   initial/>
                    </Scene>
                    <Scene key="main">
                    	<Scene 
                    	onRight={() => Actions.employeecreate()}
                    	rightTitle="Add"
                    	key='employeelist' 
                    	component={EmployeeList} 
                    	title='Emplyoyees'  />
                    	<Scene key='employeecreate' component={EmployeeCreate} title="EmployeeCreate" />
                    </Scene>
              	</Scene>
            </Router>
        )
    }
}

export default RouterComponent;
