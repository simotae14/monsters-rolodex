import React, { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const {
      monsters,
    } = this.props;
    return (
      <div className='card-list'>
        {monsters.map(({ id, name, email }) => {
          return (
            <Card
              id={id}
              name={name}
              email={email}
              key={id}
            />
          )
        })}
      </div>
    );
  }
}

export default CardList;
