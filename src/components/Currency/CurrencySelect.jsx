import './style.css'

function CurrencySelect(props) {
  return (
    <select className="currency__select" onChange={(ev) => props.onCurrencyChange(ev.target.value)}>
      {props.currencies.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export { CurrencySelect };
