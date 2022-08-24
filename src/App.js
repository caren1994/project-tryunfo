import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    hasTrunfo: false,
    preview: false,
  };

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription,
        cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const valorDosCards = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const numero1 = 90;
      const numero2 = 210;
      if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 >= 0 && cardAttr1 <= numero1 && cardAttr2 >= 0
      && cardAttr2 <= numero1 && cardAttr3 >= 0 && cardAttr3 <= numero1
      && valorDosCards <= numero2) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (objetoinfo) => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevstate) => ({
      data: [...prevstate.data, objetoinfo],
      preview: true,
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  };

  apagardata = (param) => {
    const { data } = this.state;
    const { cardTrunfo } = data.find(({ cardName }) => cardName === param);

    if (cardTrunfo === true) {
      this.setState({
        data: data.filter(({ cardName }) => cardName !== param),
        hasTrunfo: false,
      });
    } else {
      this.setState({
        data: data.filter(({ cardName }) => cardName !== param),
      });
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      data,
      preview,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {

          preview === true && data.map((element) => (
            <div key={ element.cardName }>
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.apagardata(element.cardName) }
              >
                Excluir
              </button>
            </div>))
        }

      </div>
    );
  }
}

export default App;
