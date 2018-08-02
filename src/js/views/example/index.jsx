import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import LazyLoading from '../../common/components/LazyLoading/LazyLoading'
import { actions as formActions } from '../../redux/modules/example';
import { actions as analyticsActions } from '../../redux/modules/analytics';
import { formResponseSelector } from '../../redux/selectors/exampleSelector';
import { analyticsSelector } from '../../redux/selectors/analyticsSelector';
import { ExampleWithError } from '../../common/components/Example';
import { ErrorBoundary } from '../../common/components/Utilities';

require('../../../style/index.css');

const Main = Loadable({
  loader: () => import('../../common/components/Example/Example'),
  loading: LazyLoading,
})

const mapStateToProps = state => ({
  form: formResponseSelector(state),
  analytics: analyticsSelector(state),
});

const mapDispatchToProps = {
  ...formActions,
  ...analyticsActions
};

@connect(mapStateToProps, mapDispatchToProps)
class ExampleView extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Fragment>
        <Main {...this.props} />
      </Fragment>
    )
  }
}

export default ExampleView;
