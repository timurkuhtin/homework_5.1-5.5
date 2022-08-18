import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './AppComponent.css';
import get from './Http/GetCom';

function AppComponent(): JSX.Element {
  console.log("AppComponent: Function executed.");
  
  let [count, setCount] = useState<number>(0);
  let [counts, setCounts] = useState<number[]>([]);

  console.log("AppComponent Count: %d", count);

  useEffect(() => {
    console.log("AppComponent: executed Every Render and Rerender.");
  });

  useEffect(() => {
    console.log("AppComponent: executed First Render of component.");

    //getUser();
    return () => {
      console.log("AppComponent: executed when component is destroyed.");
    }
  }, []);

  useEffect(() => {
    console.log("%c AppComponent: Executed every time when either count or counts are changed.", 'background: green; color: yellow');
    // Pass an array of dependencies and the useEffect hook will only run if one of the dependencies changes.
  }, [count, counts]);

  //Definition of Delete Handler
  const deleteHandler: (ev: React.MouseEvent<HTMLButtonElement>, index: number) => void = (ev, index) => {
    setCounts(prevCounts => {
      prevCounts.splice(index, 1); // delete by index, second arg is count of deletion items
      return [...prevCounts]; // copy array is so needed.
    })
    console.log('%c Delete handler is executed.', 'color: green');
  }
  //End Delete Handler

  console.log("Just before return from AppComponent function component.")
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/AppComponent.tsx</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>

      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/users?page=2');            
            n.then(function(value){
              let results = document.getElementById("results");              
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>1</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/users/2');            
            n.then(function(value){
              let results = document.getElementById("results");
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>2</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/users/23');
            n.then(function(value){
              let results = document.getElementById("results");
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>3</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
              let results = document.getElementById("results");
              if (results!=null){results.textContent = "Chouse ID";}
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = false;}
        }}>4</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/unknown/2');            
            n.then(function(value){
              let results = document.getElementById("results");
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>5</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/unknown/23');            
            n.then(function(value){
              let results = document.getElementById("results");
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>6</button>
      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {
          let n = get('/api/users?delay=3');            
            n.then(function(value){
              let results = document.getElementById("results");
              if (results!=null){
                if (JSON.stringify(value) == "{}"){
                  results.textContent = "something is wrong"
                } else{
                results.textContent = JSON.stringify(value);}}})
              let buttons = document.getElementById('list-id');
            if (buttons!=null){buttons.hidden = true;}
        }}>7</button>



        <div id='list-id' hidden = {true}>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
              }}>all list</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/1');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "1"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/2');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "2"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/3');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "3"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/4');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "4"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/5');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "5"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/6');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "6"</button>
          <button onClick={
          (ev: React.MouseEvent<HTMLButtonElement>) => {
            let n = get('/api/unknown/13');            
              n.then(function(value){
                let results = document.getElementById("results");
                if (results!=null){
                  if (JSON.stringify(value) == "{}"){
                    results.textContent = "something is wrong"
                  } else{
                  results.textContent = JSON.stringify(value);}}})
          }}>id = "13" or bigger</button>
        </div>
        <div className='my-btn' id = "results">Results</div>      
    </div>
  );
}

export default AppComponent;
