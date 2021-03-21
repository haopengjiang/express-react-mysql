import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAll, destroyItem } from '../../actions/crudAction';

import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { AddShoppingCart, ThumbUp, Assessment, Face } from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const Dashboard = ({ fetchAll, destroyItem, products }) => {
  useEffect(() => {
    fetchAll('products');
  }, [fetchAll]);

  return (
    <div>
      <h2 style={{ paddingBottom: '15px' }}>Dashboard</h2>

      <Grid container spacing={4} style={{ marginBottom: '15px' }}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={AddShoppingCart} color={pink[600]} title="Total Profit" value="1500k" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={ThumbUp} color={cyan[600]} title="Likes" value="4231" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Assessment} color={purple[600]} title="Sales" value="460" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Face} color={orange[600]} title="New Members" value="248" />
        </Grid>
      </Grid>

      <Grid container spacing={10} style={{ marginBottom: '15px' }}>
        <Grid item xs>
          <Product data={products} deleteProduct={destroyItem} />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { fetchAll, destroyItem })(Dashboard);
