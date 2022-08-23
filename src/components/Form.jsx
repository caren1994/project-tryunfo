import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input type="text" data-testid="name-input" name="" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea type="text" data-testid="description-input" name="" />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input type="number" data-testid="attr1-input" name="" />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input type="number" data-testid="attr2-input" name="" />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input type="number" data-testid="attr3-input" name="" />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input type="text" data-testid="image-input" name="" />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select name="" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input type="checkbox" name="" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
