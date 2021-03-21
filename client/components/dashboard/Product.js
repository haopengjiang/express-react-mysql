import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Wallpaper from '@material-ui/icons/Wallpaper';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = () => ({
  root: {
    paddingTop: 0,
  },
  subheader: {
    fontSize: 24,
    backgroundColor: cyan[600],
    color: '#FFFFFF',
  },
  actions: {
    justifyContent: 'flex-end',
  },
});

const Product = (props) => {
  const history = useHistory();
  const { classes } = props;
  const products = props.data;
  const deleteProduct = props.deleteProduct;

  return (
    <Card>
      <CardHeader title="Recent Products" />
      <Divider />
      <CardContent>
        <List>
          {products.map((item, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={item.id}
              button={true}
              onClick={() => history.push(`/product/${item.id}`)}
            >
              <ListItemIcon>
                <Avatar>
                  <Wallpaper />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.text} />
              <Button onClick={() => deleteProduct('products', item.id)}> Delete </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Link to={'/product'}>
          <Button color="primary" size="small" variant="text">
            New Product
          </Button>
        </Link>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
};

export default withStyles(styles)(Product);
