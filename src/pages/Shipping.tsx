import React, {memo} from 'react';
import Content from "../Components/Content/Content";
import {Formik, Field, FormikProps, FieldProps, FormikHelpers} from "formik";

interface FormValues {
    full_name: string;
    daytime: string;
    add_field: string;
    city: string;
    country: string;
    zip: string;
}

const Shipping: React.FC = () => {
    //
    // Submit form
    //

    return (
        <Content>
            <h1>
                Shipping Info
            </h1>
            <Formik
                initialValues={
                    {
                        full_name: '',
                        daytime: '',
                        address: '',
                        add_field: '',
                        city: '',
                        country: '',
                        zip: '',
                    }}
                validate={values => {
                    const errors = {};
                    // if (!values.email) {
                    //     errors.email =  `${t('main.form.required')}`;
                    // } else if (
                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    // ) {
                    //     errors.email = `${t('main.form.wrong_email')}`;
                    // }
                    // if (values.password.length < 6) {
                    //     errors.password = `${t('main.form.min_length_six')}`;
                    // }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    actions.setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <Field name="full-name">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="full-name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.full_name}
                                            placeholder="Full Name"
                                            className={form.touched.full_name && form.errors.full_name ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="daytime">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="daytime"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.daytime}
                                            placeholder="Daytime Phone"
                                            className={form.touched.daytime && form.errors.daytime ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="address">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                            placeholder="Street Address"
                                            className={form.touched.address && form.errors.address ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="add_field">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="add-field"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.add_field}
                                            placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
                                            className={form.touched.add_field && form.errors.add_field ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="city">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                            placeholder="City"
                                            className={form.touched.city && form.errors.city ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="country">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="country"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.country}
                                            placeholder="Country"
                                            className={form.touched.country && form.errors.country ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="zip">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="zip"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.zip}
                                            placeholder="ZIP"
                                            className={form.touched.zip && form.errors.zip ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                            disabled={isSubmitting}
                        >

                        </button>
                    </form>
                )}
            </Formik>
        </Content>
    )
}
export default memo(Shipping);