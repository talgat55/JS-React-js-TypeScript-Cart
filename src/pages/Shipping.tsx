import React, {memo} from 'react';
import Content from "../Components/Content/Content";
import {Formik, Field, FormikProps, FieldProps, FormikHelpers} from "formik";
import styled from "styled-components";

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
                    <ShippingComponent
                        id="form-shipping"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label>Recipient</label>
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
                        <div className="form-group  day-time_field">
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
                            <p>
                                For delivery questions only
                            </p>

                        </div>
                        <div className="form-group">
                            <label>Address</label>
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
                        <div className="form_last-fields">
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
                        </div>

                        <button
                            type="submit"
                            className="btn btn-next"
                            disabled={isSubmitting}
                        >
                            Continue
                        </button>
                    </ShippingComponent>
                )}
            </Formik>
        </Content>
    )
}
export default memo(Shipping);

const ShippingComponent = styled.form`
  &#form-shipping{
    label{
      font-size: 16px;
      line-height: 18px; 
      color: #5A1094; 
      margin-bottom: 6px;
      display: inline-block;
    }
    
    input[type=text]{
      background: #FFFFFF;
      border: 1px solid #DEDCDC;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 16px;
      line-height: 18px; 
      color: #6B6B6B;
      padding: 11px 15px;
      width: 100%;
      margin-bottom: 10px;
    }
    
    .day-time_field{
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      input{
        margin-bottom: 0;
      }
      p{
        margin-bottom: 0;
        font-size: 13px;
        line-height: 12px; 
        color: #777879;
        margin-left: 10px;
        min-width: 90px;
        margin-right: 20px;
      }
    }
    
    .form_last-fields{
      display: flex;
      align-items: center;
      
      .form-group:first-child{
        margin-right: 15px;
      }
    }
    
    button{
      background: rgba(90, 16, 148, 0.8);
      border: 1px solid rgba(67, 28, 93, 0.8);
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 16px;
      line-height: 19px; 
      text-align: center; 
      color: #FFFFFF;
      padding: 12px 57px;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background: rgba(90, 16, 148, 0.2);
        border: 1px solid rgba(67, 28, 93, 0.2);
      }
    }
  }
`;