import { useState } from 'react';

import CardList from 'components/CardList/CardList';
import DropDown from 'hooks/DropDown';
import { ArrowUp } from 'components/ArrowUp/ArrowUp';
import css from './Tweets.module.css';

export default function TweetsPage() {
  const [selectedValue, setSelectedValue] = useState('default');

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
  };

  return (
    <div className={css.container}>
      <DropDown onChange={handleChange} />
      <CardList selectedValue={selectedValue} />
      <ArrowUp />
    </div>
  );
}