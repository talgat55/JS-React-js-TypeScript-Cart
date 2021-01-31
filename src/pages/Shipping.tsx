import React, {memo} from 'react';
import Content from "../Components/Content/Content";
import {Formik,Field} from "formik";
interface FormValues {
    firstName: string;
}
const Shipping: React.FC = () => {
    //
    // Submit form
    //
    const handleSubmit = (values: FormValues, {props, ...actions}) =>{
        console.log(values)
        actions.setSubmitting(false);
    }
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
                onSubmit={handleSubmit}
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
                            <Field name="email">
                                {({field, form, meta}) =>  (
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="E-mail"
                                        className={form.touched.email && form.errors.email ? 'error' : ''}
                                    />
                                ) }
                            </Field>
                        </div>

                        <div className="form-group">
                            <Field name="password">
                                {({field, form, meta}) =>  (
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder={`${t('main.form.pass_field')}`}
                                        className={form.touched.password && form.errors.password ? 'error' : ''}
                                    />

                                ) }
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