// app/components/DecrementButton.tsx

import React from 'react';
import { Button } from 'react-native';

interface Props {
  decrement: () => void;
}

const DecrementButton: React.FC<Props> = ({ decrement }) => {
  return <Button title="Decrement" onPress={decrement} />;
};

export default DecrementButton;
