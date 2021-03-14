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

const Payment: React.FC = () => {
    //
    // Submit form
    //

    return (
        <Content>
            <h1>
                Payment
            </h1>
            <Formik
                initialValues={
                    {
                        card_hole_name: '',
                        card_number: '',
                        city: '',
                        expire_date: '',
                        security_code: '',
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
                        <div className="before_text">
                            <svg width="19" height="26" viewBox="0 0 19 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M14.4006 14.5071V10.1378C14.4006 9.85407 14.171 9.62412 13.8877 9.62412H12.6984V5.50597C12.6984 2.47008 10.2318 0 7.20015 0C4.16852 0 1.70192 2.47008 1.70192 5.50597V9.59601H2.72775V5.50597C2.72775 3.03652 4.73417 1.02727 7.20015 1.02727C9.66614 1.02727 11.6726 3.0362 11.6726 5.50597V9.62412H0.512603C0.229314 9.62412 0 9.85407 0 10.1378V18.5931C0 19.5969 0.811803 20.4099 1.80987 20.4099H8.11179C8.37137 23.183 10.7069 25.361 13.5429 25.361C16.3659 25.361 18.7008 23.2417 18.9741 20.4317C18.9913 20.2549 19 20.0746 19 19.8959C19.0003 18.5568 18.5114 17.2681 17.6235 16.2673C16.7805 15.3176 15.6367 14.7049 14.4006 14.5071ZM1.02583 18.5975V15.3738C1.02583 15.3735 1.02583 15.3735 1.02583 15.3732V10.6514H13.3751V14.4399C10.6158 14.5246 8.36638 16.6651 8.1121 19.3826H1.80987C1.37744 19.3829 1.02583 19.0305 1.02583 18.5975ZM17.9536 20.3324C17.7318 22.6138 15.8358 24.334 13.5433 24.334C11.0997 24.334 9.11173 22.3432 9.11173 19.8962C9.11173 17.4493 11.0997 15.4585 13.5433 15.4585C14.8081 15.4585 16.0158 16.0021 16.8569 16.9497C17.5776 17.762 17.9748 18.8083 17.9748 19.8962C17.9745 20.0418 17.9676 20.1887 17.9536 20.3324Z"
                                      fill="#6B6B6B"/>
                                <rect x="8" y="14.35" width="11" height="11" rx="5.5" fill="#7ED321"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M16.2687 18.1138C16.469 18.3144 16.469 18.6396 16.2687 18.8402L12.9491 22.1645C12.8489 22.2648 12.7176 22.3151 12.5866 22.3151C12.4555 22.3151 12.3242 22.2648 12.224 22.1645L10.8182 20.7566C10.6179 20.5561 10.6179 20.2308 10.8182 20.0302C11.0185 19.8297 11.3433 19.8297 11.5436 20.0302L12.5866 21.0747L15.5436 18.1135C15.7439 17.9132 16.0684 17.9132 16.2687 18.1138Z"
                                      fill="white"/>
                            </svg>
                            This is a secure 128-bit SSL encrypted payment
                        </div>
                        <div className="form-group">
                            <label>Cardholder Name</label>
                            <Field name="full-name">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="full-name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.card_hole_name}
                                            placeholder="Cardholder Name"
                                            className={form.touched.card_hole_name && form.errors.card_hole_name ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>

                        <div className="form-group">
                            <label>Card Number</label>
                            <Field name="card_number">
                                {({form}: FieldProps<any>) => {
                                    return (
                                        <input
                                            required
                                            type="text"
                                            name="card_number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.card_number}
                                            placeholder="Card Number"
                                            className={form.touched.card_number && form.errors.card_number ? 'error' : ''}
                                        />
                                    )
                                }}
                            </Field>
                        </div>


                        <div className="form_last-fields">
                            <div className="form-group">
                                <label>Expire Date</label>
                                <Field name="expire_date">
                                    {({form}: FieldProps<any>) => {
                                        return (
                                            <input
                                                required
                                                type="text"
                                                name="expire_date"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.expire_date}
                                                placeholder="MM / YY"
                                                className={form.touched.expire_date && form.errors.expire_date ? 'error' : ''}
                                            />
                                        )
                                    }}
                                </Field>
                            </div>
                            <div className="form-group">
                                <label>Security Code</label>
                                <Field name="security_code">
                                    {({form}: FieldProps<any>) => {
                                        return (
                                            <input
                                                required
                                                type="text"
                                                name="security_code"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.security_code}
                                                placeholder="Security Code"
                                                className={form.touched.security_code && form.errors.security_code ? 'error' : ''}
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
export default memo(Payment);

const ShippingComponent = styled.form`
  .before_text{
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    svg{
      margin-right: 4px;
    }
  }
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