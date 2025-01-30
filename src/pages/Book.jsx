import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Books =()=>{
    const [books, setBooks]= useState([]);
    const [sortOrder, setSortOrder]= useState(["asc"]);
    const [filter, setFilter] =useState("");
    const [page, setPage]= useState(1);
     useEffect(()=>{
        axios.get('https://bubble-enchanting-nutmeg.glitch.me/books')
     }

     )
}