import React, { Component } from 'react';

class CardList extends Component {
  render() {
    const {
      monsters,
    } = this.props;
    return (
      <div>
        {monsters.map(({ id, name }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default CardList;
