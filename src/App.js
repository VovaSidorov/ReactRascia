import React, { Component } from 'react';
import Table from './table';
import Form from './form';
import Api from './api';




class App extends Component {
    state = {
        characters: [],
      }

      handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
      }

      removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
    
      render() {
        const { characters } = this.state
      
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
            <Api />
          </div>
        )
      }
  }

export default App