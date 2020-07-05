Using ReactResponsiveSelect with Formik

```jsx
import { Select, CaretIcon, ErrorIcon, MultiSelectOptionMarkup } from '../../react-responsive-select'; // 'react-responsive-select'
import { Formik } from 'formik';
import * as Yup from 'yup';

<Formik
  initialValues={{
    car: 'lexus',
    bikes: ['bmw'],
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  }}
  validationSchema={Yup.object().shape({
    car: Yup.mixed().notOneOf(['null'], 'Please select a car'),
    bikes: Yup.mixed().test({
      name: 'something-other-than-any-selected',
      message: 'Please select a bike',
      test: value => value.indexOf('null') === -1,
    }),
  })}
>
  {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => {
    return (
      <form onSubmit={handleSubmit}>
        <p>Trigger an error by selecting "Any"</p>
        <div style={{ display: 'flex' }}>
          <div className={errors.car && touched.car ? 'has-error' : ''}>
            <p>Single Select</p>
            <Select
              name="car"
              selectedValue={values.car}
              caretIcon={<CaretIcon />}
              disabled={isSubmitting}
              onSubmit={handleSubmit}
              onChange={({ value, name }) => {
                handleChange({ target: { value, name } });
              }}
              onBlur={({ value, name }) => {
                handleBlur({ target: { value, name } });
              }}
              options={[
                { value: 'null', text: 'Any' },
                { value: 'alfa-romeo', text: 'Alfa Romeo' },
                { value: 'bmw', text: 'BMW' },
                { value: 'fiat', text: 'Fiat' },
                { value: 'lexus', text: 'Lexus' },
                { value: 'morgan', text: 'Morgan' },
                { value: 'subaru', text: 'Subaru' },
              ]}
            />
            {errors.car && touched.car && (
              <div className="field-error-message">
                <ErrorIcon /> {errors.car}
              </div>
            )}
          </div>

          <div className={errors.bikes && touched.bikes ? 'has-error' : ''}>
            <p>Multi Select</p>
            <Select
              multiselect={true}
              name="bikes"
              selectedValues={values.bikes}
              caretIcon={<CaretIcon />}
              disabled={isSubmitting}
              onSubmit={handleSubmit}
              onChange={({ altered, options }) => {
                if (altered) {
                  handleChange({ target: { value: options.map(option => option.value), name: 'bikes' } });
                }
              }}
              onBlur={({ options }) => {
                handleBlur({ target: { value: options.map(option => option.value), name: 'bikes' } });
              }}
              options={[
                {
                  value: 'null',
                  text: 'Any',
                  markup: <MultiSelectOptionMarkup text="Any" />,
                },
                {
                  value: 'bmw',
                  text: 'BMW',
                  markup: <MultiSelectOptionMarkup text="BMW" />,
                },
                {
                  value: 'honda',
                  text: 'Honda',
                  markup: <MultiSelectOptionMarkup text="Honda" />,
                },
                {
                  value: 'motoguzzi',
                  text: 'Moto Guzzi',
                  markup: <MultiSelectOptionMarkup text="Moto Guzzi" />,
                },
                {
                  value: 'suzuki',
                  text: 'Suzuki',
                  markup: <MultiSelectOptionMarkup text="Suzuki" />,
                },
                {
                  value: 'vespa',
                  text: 'Vespa',
                  markup: <MultiSelectOptionMarkup text="Vespa" />,
                },
              ]}
            />
            {errors.bikes && touched.bikes && (
              <div className="field-error-message">
                <ErrorIcon /> {errors.bikes}
              </div>
            )}
          </div>
        </div>

        <br />

        <div>
          <button type="button" className="outline" onClick={handleReset} disabled={isSubmitting}>
            Reset
          </button>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '...' : 'Submit'}
          </button>
        </div>

        {/*
        <div>
          <pre> <code>{JSON.stringify(props, null, 2)}</code></pre>
        </div>
        */}
      </form>
    );
  }}
</Formik>;
```
