import React, { Component } from "react";
import {Button, Glyphicon} from 'react-bootstrap';
/*import {
  withStyles,
} from "@material-ui/core";*/
import Loading from './common/loading';
import ModalDelete from './common/modalDelete';
import styled from "styled-components";
import moment from 'moment';

const WrapDivBox = styled.div`
  border: 1px solid silver;
  padding: 1em;
  margin: 0.5em;
  border-radius: 13px;
  width: 50%;
  display: block;
  margin: auto;
`

const WrapButtons = styled.div `
  
  div{
    width: 50%;
    display: inline-block;
    text-align: center;
  }
`

const WrapBoxHeader = styled.div`
  margin-bottom: 4vh;
  div:first-child{
    width: 80%;
  }
  div{
    display: inline-block;
  }
`

const WrapHeader = styled.div `
  h1{
    width: 80%;
    display: inline-block;
  }
  button{
    text-align: right;
    display: inline-block;
  }
`
const WrapElementDate = styled.div `
  text-align: center;
  width: 30%;
  display: block;
  margin: auto;
  font-size: 2em;
`

class Links extends Component {

    hideDeleteModal = () => {
      this.props.hideDeleteModal();
    }

    showDeleteModal = (linkToDelete) => {
      this.props.showDeleteModal(linkToDelete);
    }

    componentDidMount(){
      this.props.fetchLinks();
    }

    cofirmDeleteLink = (id) => {
      this.props.deleteLink(id);
    }

    incrementLiked = (link) => {
      this.props.likeLink(link.id)
    }

    decrementLiked = (link) => {
      this.props.unlikeLink(link.id)
    }

    render() {
      //console.log(this.props.mappedLinksReducerState);
      
      let sortedListByDate = this.props.mappedLinksReducerState.links.sort((l1, l2) =>  new Date(l2.created_at) - new Date(l1.created_at));
      let arrayOfDatesAndLinks = [];
      let lastDate = '';
      let arrayofLinks = [];
      //const allsorted = sortedListByDate.map((element) => {
        sortedListByDate.forEach(element => {        
        const elementDate = moment(element.created_at).format('YYYY-MM-DD');
        if (lastDate === '' ){
          lastDate = elementDate;
        }
        if(lastDate === elementDate){
          arrayofLinks.push({'id':element.id, 'url': element.url, 'title': element.title, 'description': element.description, 'liked': element.liked, 'like_count': element.like_count})
        }
        else{
          arrayofLinks.push({'id':element.id, 'url': element.url, 'title': element.title, 'description': element.description, 'liked': element.liked, 'like_count': element.like_count})
          arrayOfDatesAndLinks.push({'date': lastDate, 'links': [...arrayofLinks.sort((l1,l2)=> l2.like_count-l1.like_count)]});
          arrayofLinks = [];
          lastDate = elementDate;
        }
      });

      console.log('arrayOfDatesAndLinks:', arrayOfDatesAndLinks);
      //arrayOfDatesAndLinks = arrayOfDatesAndLinks.map(element => element.links.sort((l1,l2) => l1.like_count - l2.like_count))
      const { isFetching, isUserLogged, showDeleteModal, id, message, link, liked } = this.props.mappedLinksReducerState;
        return (         
        <div>
            {isFetching &&
              <Loading />
            }
            <div>
              <WrapHeader>
                <h1>Links</h1>
                <Button bsStyle="primary">Add new</Button>
              </WrapHeader>
              {arrayOfDatesAndLinks.length <= 0 && !isFetching &&
                <p>No links available...</p>
              }
              {arrayOfDatesAndLinks && arrayOfDatesAndLinks.length > 0 && !isFetching &&
                <div>
                  {arrayOfDatesAndLinks.map((element,j) => {
                    return(
                      <div key={'pp' + j}>
                        <WrapElementDate key={'pc' + j}>Date: {element.date}</WrapElementDate>
                        {element.links.map((link,i) =>
                            <WrapDivBox key={'div' + i}>
                              <WrapBoxHeader>
                                <div key={'div1' + i}>
                                  <a href={link.url} title={link.description} target="_blank">{link.title}</a>
                                </div>
                                <div key={'div2' + i}>
                                  <span>Liked count:{link.like_count}</span>
                                </div>
                              </WrapBoxHeader>
                              
                              <WrapButtons>
                                <div key={'div3' + i}><Button key={'btn2' + i} onClick={() => this.showDeleteModal(link)} bsSize="sm"><Glyphicon key={'glp2' + i} glyph="trash" /></Button></div>
                                <div key={'div4' + i}><Button key={'btn3' + i} onClick={() => this.incrementLiked(link)}  bsSize="sm"><Glyphicon key={'glp3' + i} glyph={liked? 'heart': 'heart-empty'} /></Button></div>
                              </WrapButtons>
                            </WrapDivBox>
                        )}
                      </div>
                    )
                  }
                  )

                  }
                  <ModalDelete 
                    showDeleteModal={showDeleteModal}
                    hideDeleteModal={this.hideDeleteModal}
                    elementToDelete={link}
                    isFetching={isFetching}
                    successMsg={message}
                    cofirmDelete={this.cofirmDeleteLink}
                    title="Delete link"
                    message1="Are you sure that you want to delete this link"
                    message2="Problems deleting link."
                    message3="Link"
                  />
                </div>
              }
            </div>
        </div>
        );
    }
}


export default Links;