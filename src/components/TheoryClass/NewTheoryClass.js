import React from 'react';

import ButtonIcon from '../Button/ButtonIcon';

import './theory-class.scss';

export default class NewTheoryClass extends React.Component {
  state = {
    name: ''
  };

  handleAdd(theoryClass) {
    this.props.onAdd(theoryClass);
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <div className='new-theory-class'>
        <input
          type='text'
          className='new-theory-class__input'
          placeholder='Digite o nome da nova turma...'
          value={name}
          onChange={event => this.setState({ name: event.target.value })}
          onKeyPress={event => {
            if (event.key === 'Enter') this.handleAdd(event.target.value);
          }}
        />
        <ButtonIcon icon='save' onClick={() => this.handleAdd(document.querySelector('.new-theory-class__input').value)} />
      </div>
    );
  }
}
