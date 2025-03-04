// app/components/IncrementButton.tsx

import React from 'react';
import { Button } from 'react-native';

interface Props {
  increment: () => void;
}

const IncrementButton: React.FC<Props> = ({ increment }) => {
  return <Button title="Increment" onPress={increment} />;
};

export default IncrementButton;
