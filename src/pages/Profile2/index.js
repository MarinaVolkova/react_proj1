import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Alert, Button, Center, Flex, HStack} from "@chakra-ui/react";
import {getCounterHistory, getCounterValue} from "../../store/selectors/counter";
import {increment, decrement, reset, closeResetMessage} from "../../store/actions/counter";

const Profile2 = (props) => {
  const dispatch = useDispatch();
  const counterHistory = useSelector(getCounterHistory);
  const counterValue = useSelector(getCounterValue);

  const handleIncr = () => {
    dispatch(increment())
  }

  return (
    <div>
      PROFILE 2

      <Center>
        <Flex flexDir={'column'}>
          <div>
            counterHistory: [{ counterHistory.join(',') }]
          </div>

          <HStack spacing='24px'>
            <Button onClick={() => handleIncr()}>+</Button>
            <div>{ counterValue }</div>
            <Button onClick={() => dispatch(decrement())}>-</Button>
          </HStack>
          <Button onClick={() => dispatch(reset())}>RESET</Button>

          {props.counterMessage && <Alert>
            { props.counterMessage }
            <Button onClick={() => dispatch(closeResetMessage())}>CLOSE</Button>
          </Alert>}

        </Flex>
      </Center>


    </div>
  );
}

export default Profile2;