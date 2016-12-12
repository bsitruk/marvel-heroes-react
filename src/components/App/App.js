import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Main from '../Main/Main';

function mapStateToProps(state, ownProps) {
    return {
        heroes: state.heroes,
        heroId: ownProps.params.heroId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,
        dispatch);
}

const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;