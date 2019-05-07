import { connect } from 'react-redux';
import * as linksActions from '../modules/actions/linksAction';
import Links from '../components/Links';


// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    mappedLinksReducerState: state.linksState,
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLinks: () => dispatch(linksActions.fetchLinks()),
    fetchLink: id => dispatch(linksActions.fetchLink(id)),
    addNewLink: link => dispatch(linksActions.addNewLink(link)),
    deleteLink: id => dispatch(linksActions.deleteLink(id)),
    likeLink: id => dispatch(linksActions.likeLink(id)),
    unLikeLink: id => dispatch(linksActions.unLikeLink(id)),
    showDeleteModal: linkToDelete => dispatch(linksActions.showDeleteModal(linkToDelete)),
    hideDeleteModal: () => dispatch(linksActions.hideDeleteModal())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Links);