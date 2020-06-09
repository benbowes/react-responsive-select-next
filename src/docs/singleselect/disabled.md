```jsx
import ReactResponsiveSelect, { CaretIcon } from '../../react-responsive-select'; // 'react-responsive-select'

<form>
  <ReactResponsiveSelect
    name="carType1"
    disabled={true}
    caretIcon={<CaretIcon />}
    prefix="Car1: "
    selectedValue="subaru"
    onSubmit={() => console.log('onSubmit')}
    onChange={newValue => console.log('onChange', newValue)}
    options={[
      { value: 'null', text: 'Any' },
      { value: 'alfa-romeo', text: 'Alfa Romeo' },
      { value: 'bmw', text: 'BMW' },
      { value: 'fiat', text: 'Fiat' },
      { value: 'subaru', text: 'Subaru' },
      { value: 'suzuki', text: 'Suzuki' },
      { value: 'tesla', text: 'Tesla' },
      { value: 'volvo', text: 'Volvo' },
      { value: 'zonda', text: 'Zonda' },
    ]}
  />
</form>;
```
