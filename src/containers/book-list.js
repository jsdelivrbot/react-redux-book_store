import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          key={book.title}>{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//anything returned, will end up as props on BookList
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote booklist from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
