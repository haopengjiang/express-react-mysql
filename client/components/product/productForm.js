import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// Import custom components
import renderText from '../common/form/renderText';
import CustomizedSnackbar from '../common/snakebar/CustomizedSnackbar';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto',
  },
  card: {
    padding: 20,
    overflow: 'auto',
  },
  cardHeader: {
    textAlign: 'center',
  },
  btnDiv: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 21,
  },
};

const ProductForm = (props) => {
  const { handleSubmit, onSubmit, classes, error } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="New Product" />
        {error && <CustomizedSnackbar variant="error" className={classes.margin} message={error} />}
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="title" component={renderText} label="Title" />
            <br />
            <Field type="text" name="text" component={renderText} label="Description" />
            <br />
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Create
              </Button>
              <p>
                <Link to={'/dashboard'}>Go Back</Link>.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateProduct = (values) => {
  const errors = {};

  const requiredFields = ['title', 'text'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });
  return errors;
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'ProductForm', // a unique identifier for this form
  validate: validateProduct, // ←Callback function for client-side validation
})(withStyles(styles)(ProductForm));
