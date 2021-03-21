import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { submitForm } from '../../actions/crudAction';

// Import custom components
import ProductForm from '../../components/product/productForm';

class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm(formProps) {
    this.props.submitForm('products', formProps);
  }

  render() {
    return <ProductForm onSubmit={this.submitForm} />;
  }
}

export default connect(null, { submitForm })(ProductContainer);
