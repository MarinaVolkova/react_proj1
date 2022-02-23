import React, {Component} from 'react';
import {Button, Center, HStack, Flex, Alert} from "@chakra-ui/react";
import { connect } from 'react-redux';
import {increment, decrement, reset, closeResetMessage} from "../../store/actions/counter";
import {getCounterHistory, getCounterValue} from "../../store/selectors/counter";

class Profile extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        PROFILE

        <Center>
          <Flex flexDir={'column'}>
            <div>
              counterHistory: [{ this.props.counterHistory.join(',') }]
            </div>

            <HStack spacing='24px'>
                <Button onClick={() => this.props.inc()}>+</Button>
                <div>{ this.props.counterValue }</div>
                <Button onClick={() => this.props.dec()}>-</Button>
            </HStack>
            <Button onClick={() => this.props.handleReset()}>RESET</Button>

            {this.props.counterMessage && <Alert>
              { this.props.counterMessage }
              <Button onClick={() => this.props.handleClosePopup()}>CLOSE</Button>
            </Alert>}

          </Flex>
        </Center>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
  counterHistory: getCounterHistory(state),
  counterMessage: state.counter.message
})

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    handleReset: () => dispatch(reset()),
    handleClosePopup: () => dispatch(closeResetMessage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);