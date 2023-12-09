import "../sidebar/sidebar.css"
import {  Link } from "react-router-dom";
import $ from 'jquery';
import { useEffect, useState  } from 'react';
import Dashboard from "../Dashboard/dashboard";

function Sidebar() {


const activeMenu = () => {
  $(function(){

    var current = this.location.pathname;
    $('#nav-content a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }else{
          $this.removeClass('active');
        }
    })
})

}

  useEffect( () => {
    // setCompanyList([]);
    activeMenu();

 }, []);


    return (

<div className="nav-wrapper">
<div id="nav-bar">

  <div id="nav-header"><a id="nav-title" href="#">Gl Funnel</a>
    <hr/>
  </div>
  <div id="nav-content">
  <Link className="nav-button" to="dashboard" onClick={() => {activeMenu()}}><div ><span>Dashboard</span></div></Link>
  <Link className="nav-button"  to="users" onClick={() => {activeMenu()}}> <div ><span>Users</span></div></Link>

    <div id="nav-content-highlight" className="active"></div>
  </div>

</div>
</div>


    );
  }
  
  export default Sidebar;