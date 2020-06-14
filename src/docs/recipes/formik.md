Using ReactResponsiveSelect with Formik

```jsx
import { Select, CaretIcon, ErrorIcon } from '../../react-responsive-select'; // 'react-responsive-select'
import { Formik } from 'formik';
import * as Yup from 'yup';

<Formik
  initialValues={{
    car: 'lexus',
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  }}
  validationSchema={Yup.object().shape({
    car: Yup.mixed().notOneOf(['null'], 'Please select a car'),
  })}
>
  {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => {
    return (
      <form onSubmit={handleSubmit}>
        <p>Trigger an error by selecting "Any"</p>
        <div className={errors.car && touched.car ? 'has-error' : ''}>
          <Select
            name="car"
            selectedValue={values.car}
            caretIcon={<CaretIcon key="car-caret" />}
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
