import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { submitForm, fetchById } from '../../actions/crudAction';

// Import custom components
import ProductUpdateForm from '../../components/product/productUpdateForm';

class ProductUpdateContainer extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchById('products', this.props.match.params.id);
  }
  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm(formProps) {
    this.props.submitForm('products', formProps, this.props.match.params.id);
  }

  render() {
    return <ProductUpdateForm onSubmit={this.submitForm} />;
  }
}

export default connect(null, { submitForm, fetchById })(ProductUpdateContainer);
