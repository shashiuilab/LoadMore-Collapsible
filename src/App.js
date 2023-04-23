/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import { Members } from "./data" ;

function App() {
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showLoadLess, setShowLoadLess] = useState(false);
  // const [rowsContainerHeight, setRowContainerHeight] = useState(null);
  const loadMoreClickHandler = (e) => {
    e.preventDefault();
    setShowLoadMore(false);
    setShowLoadLess(true);
  }
  const showLessClickHandler = (e) => {
    e.preventDefault();
    setShowLoadMore(true);
    setShowLoadLess(false);
  }
  useLayoutEffect(() => {
    console.log(document.querySelector(".App").offsetHeight);
    // setRowContainerHeight(document.querySelector(".App").offsetHeight);
    const rowsContainerHeight = document.querySelector(".App").offsetHeight;
    if(rowsContainerHeight > 550) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
      setShowLoadLess(false);
    }
  }, []);
  return (
    <div className="App">
      <div className="">
        <div className={`table-container ${showLoadMore ? "maxHeight" : ""}`} id="table-container">
          <div className="row border pad-t-20 pad-b-20 pad-l-20 pad-r-20">
            <div>
              <p>Work Status</p>
              <p>All</p>
            </div>
            <a href="#">Edit</a>
          </div>
          <div className="row pad-t-20 pad-b-20 pad-l-20 pad-r-20">
            <p>Members</p>
            <a href="#">Edit</a>
          </div>
          { Members.map((memberData) => {
            return (
              <div className="row border pad-b-20 pad-r-20 pad-l-20 pad-t-20">
                <div>
                  <p>{memberData.users.length} active Members will be cancelled for the date of {memberData.date}</p>
                  <div className="column-container">
                    <ul>
                      {memberData.users.map((member) => {
                        return <>
                          <li>{member}</li>
                        </>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        { showLoadMore && <a href="/" onClick={loadMoreClickHandler}>Load more...</a>}
        { showLoadLess && <a href="/" onClick={showLessClickHandler}>Load less...</a>}
      </div>
    </div>
  );
}

export default App;
