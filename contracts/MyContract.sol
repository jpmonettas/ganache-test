pragma solidity ^0.5.0;

contract MyContract {

  event SomeEvent(uint someParam);
  event SomeOtherEvent(uint someOtherParam);

  constructor () public {
  }

  function fireSomeEvent(uint someParam) public {
    emit SomeEvent(someParam);
  }

  function fireSomeOtherEvent(uint someOtherParam) public {
    emit SomeOtherEvent(someOtherParam);
  }
}
