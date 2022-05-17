import { CurrencySelect } from "./CurrencySelect";

function CurrencyInput(props) {
  return (
    <div className="currency__inner">
      <div className="currency__wrapper">
        <p className="currency__title">{props.title}</p>
        <input
          className="currency__input"
          type="text"
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
        />
      </div>
      <CurrencySelect
        onCurrencyChange={props.onCurrencyChange}
        currencies={props.array}
      ></CurrencySelect>
    </div>
  );
}

export { CurrencyInput };
