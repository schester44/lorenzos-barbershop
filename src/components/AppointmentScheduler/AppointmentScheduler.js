import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background: black;
`

class AppointmentScheduler extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Wrapper>
                SOME CONTENT
            </Wrapper>
        );
    }
}

export default AppointmentScheduler;