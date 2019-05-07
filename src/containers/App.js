import { connect } from 'react-redux';
import App from '../components/App';

// map state from store to props
// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);