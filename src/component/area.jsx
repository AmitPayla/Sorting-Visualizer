import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./area.css";
import { bubbleSorting } from "./bubblesort";
import { mergesorting } from "./mergesort";
import { quicksort } from "./quicksort";
 const PRIMARY ='grey';
 const SECONDARY ='green';

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [200, 160, 30, 400, 320, 475, 110, 260],
    };
  }
  
  handlerange = (event) => {
    var arr = [];
    var lengthofarray = event.target.value;
    for (var i = 0; i < lengthofarray; i++) {
      arr[i] = i + 267;
    }
    let random = 50;
    while (--lengthofarray) {
      let index;
      index = Math.floor(Math.random() * (lengthofarray + 1));
      Math.abs(index);
      if (random === 50) {
        var temp = arr[index] - random;
        random = 20;
      } else {
        temp = arr[index] + random;
        random = 50;
      }

      arr[index] = arr[lengthofarray];
      arr[lengthofarray - 1] = temp;
    }
    this.setState({
      array: arr,
    });

    this.resetColors();
  };

  resetColors = () =>{
    const element = document.getElementsByClassName("area");
    for(let i =0 ; i< this.state.array.length ; i++){
      element[i].style.backgroundColor = '#81D4FA'
    }
  }

  bubbleSort = () => {
    var objarray = bubbleSorting(this.state.array);
    const element = document.getElementsByClassName("area");
    for (var i = 0; i < objarray.length; i++) {
      const [x, y, a , b, changecolor] = objarray[i];
      if (a === "S" && changecolor!="changeColor") {
        const [index1, index2] = objarray[i];

        const index1style = element[index1].style;
        const index2style = element[index2].style;
        setTimeout(() => {
          index1style.backgroundColor = "#1E8449";
          index2style.backgroundColor = "#1E8449";
        }, parseInt((i * 15)-this.state.array.length));
      } else 
      if(changecolor!="changeColor"){
        const [index1, index2, height1, height2] = objarray[i];
        setTimeout(() => {
          
          const index1style = element[index1].style;
          const index2style = element[index2].style;
          index1style.backgroundColor = "#C0392B ";
          index2style.backgroundColor = "#C0392B ";
          index1style.height = `${height1}px`;
          index2style.height = `${height2}px`;
        }, parseInt((i * 15)-this.state.array.length));
      }
      setTimeout(() => {
        const index1style = element[x].style;
        const index2style = element[y].style;
        index1style.backgroundColor = "#81D4FA";
        index2style.backgroundColor = "#81D4FA";
      }, parseInt((i * 15 + 15)-this.state.array.length));
      if(changecolor === "changeColor" ){
        setTimeout(() => {
          const index2style = element[y].style;
          index2style.backgroundColor = "#1E8449";
        }, parseInt((i * 15 + 16)-this.state.array.length));
      }
    }
    for (let j = 0; j < objarray.length; j++){
      setTimeout(() => {
        const index2style = element[1].style;
        index2style.backgroundColor = "#1E8449";
      }, parseInt((i * 15)-this.state.array.length));
    }
    
  };

  mergesort = () => {
    var auxarray = [...this.state.array];
    const flag = 1;
    var obj = mergesorting(this.state.array, auxarray, flag);
    const element = document.getElementsByClassName("area");
    for (var i = 0; i < obj.length; i++) {
      const [value, startingindex, leftindex, rightindex] = obj[i];
      const startingindexstyle = element[startingindex].style;
      const rightindexstyle = element[rightindex].style;
      const valuestyle = element[startingindex].style;
      const leftindexstyle = element[leftindex].style;
      setTimeout(() => {
        startingindexstyle.backgroundColor = "#922B21";
        rightindexstyle.backgroundColor = "#F4D03F";
        leftindexstyle.backgroundColor = "#884EA0";
        valuestyle.height = `${value}px`;
      
      }, parseInt((i * 15)-this.state.array.length));

      setTimeout(() => {
        startingindexstyle.backgroundColor = "#81D4FA";
        rightindexstyle.backgroundColor = "#81D4FA";
        leftindexstyle.backgroundColor = "#81D4FA";
      },parseInt((i * 15 + 15)-this.state.array.length));
    }
    for (let j = 0; j < this.state.array.length; j++){
      setTimeout(() => {
        element[j].style.backgroundColor = '#1E8449'
      }, parseInt((i * 15)-this.state.array.length));
    }
  };

  quickSort = () => {
    const flag = 1;
    var auxarray = [...this.state.array];
    var element = document.getElementsByClassName("area");
    var obj = quicksort(
      this.state.array,
      0,
      this.state.array.length - 1,
      auxarray,
      flag
    );
    for (var i = 0; i < obj.length; i++) {
      const [low, pivot, high, lowvalue, highvalue] = obj[i];
      const lowstyle = element[low].style;
      const pivotstyle = element[pivot].style;
      const highstyle = element[high].style;
      const lowvaluestyle = element[low].style;
      const highvaluestyle = element[high].style;

      setTimeout(() => {
        lowstyle.backgroundColor = "#76448A";
        pivotstyle.backgroundColor = " #F4D03F ";
        highstyle.backgroundColor = "#16A085 ";
        lowvaluestyle.height = `${lowvalue}px`;
        highvaluestyle.height = `${highvalue}px`;
    
      }, parseInt((i * 15)-this.state.array.length));

      setTimeout(() => {
        lowstyle.backgroundColor = "#81D4FA";
        pivotstyle.backgroundColor = "#81D4FA";
        highstyle.backgroundColor = "#81D4FA";
      }, parseInt((i * 15 + 15)-this.state.array.length));
    }
    for (let j = 0; j < this.state.array.length; j++){
      setTimeout(() => {
        element[j].style.backgroundColor = '#1E8449'
      }, parseInt((i * 15)-this.state.array.length));
    }
  };

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light navbar-center">
            <div
              className="navbar-brand"
              style={{ fontSize: "30px", color: "white", fontWeight: "700" }}
            >
              {" "}
              Sorting Visualizer{" "}
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-center">
                <li className="nav-item active">
                  <label>Range</label>
                  <input
                    onChange={this.handlerange}
                    type="range"
                    min="10"
                    max="250"
                  ></input>
                </li>
                <li className="nav-item">
                  <button onClick={this.bubbleSort}> Bubble Sort</button>
                </li>
                <li className="nav-item">
                  <button onClick={this.mergesort}> Merge Sort</button>
                </li>
                <li className="nav-item">
                  <button onClick={this.quickSort}> Quick Sort</button>
                </li>
                <li className="nav-item" style = {{marginLeft : '40px' }}  >
                  <label>No. of Bars : <span style = {{color : 'white' }} >{this.state.array.length} </span>  </label>
                </li>
              </ul>
            </div>
          </nav>
        </div>


        <div className=" container dis ">
          {this.state.array.map((c, index) => {
            var w = this.state.array.length;
            w = parseInt(632 / w);
            console.log(w);
            return (
              <div
                className="area"
                style={{ width: `${w}mm`, height: `${c}px` }}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sort;
